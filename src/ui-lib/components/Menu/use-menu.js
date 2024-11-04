import { useRef, useCallback, cloneElement } from 'react';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { useOutsideParentClick } from '../../utils/hooks/use-outside-parent-click.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { lazyDisclosure } from '../../utils/methods/lazy.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { createDescendantContext } from '../Descendants/use-descendant.js';
import { useOverlay } from '../Overlay/use-overlay.js';
import { OverlayTransitions } from '../Overlay/tailwind-variations/overlay-transition.js';
import { useMenuContext } from './menu-context.js';

const [MenuDescendantsProvider, useMenuDescendantsContext, useMenuDescendants, useMenuDescendant] = createDescendantContext();
function getOwnerDocument(node) {
    return node?.ownerDocument ?? document;
}
function isActiveElement(element) {
    const doc = getOwnerDocument(element);
    return doc.activeElement === element;
}
const useMenu = (props = {}) => {
    const { closeOnSelect = true, closeOnBlur, isLazy, isOpen: isOpenProp, defaultIsOpen, close: onCloseProp, open: onOpenProp, placement = 'bottom-start', lazyBehavior, ...restProps } = props;
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const descendants = useMenuDescendants();
    const onOpenCallback = useCallback(() => {
        onOpenProp?.();
    }, [onOpenProp]);
    const { isOpen, open, close, toggle } = useDisclosure({
        isOpen: isOpenProp,
        defaultIsOpen,
        close: onCloseProp,
        open: onOpenCallback
    });
    const overlay = useOverlay({
        ...restProps,
        enabled: isOpen,
        placement
    });
    const menuId = uniqueId('menu-list');
    const buttonId = uniqueId('menu-button');
    const [isMd] = useMediaQuery(MediaScreens.md);
    useOutsideParentClick({
        enabled: isOpen && isMd,
        callback: close,
        parent: buttonRef,
        refObject: menuRef
    });
    return {
        isOpen,
        onOpen: open,
        onClose: close,
        toggle,
        descendants,
        isLazy,
        lazyBehavior,
        placement,
        closeOnBlur,
        closeOnSelect,
        menuRef,
        menuId,
        buttonId,
        overlay,
        buttonRef
    };
};
function useMenuButton(props = {}, externalRef = null) {
    const menu = useMenuContext();
    const { toggle, isOpen, overlay } = menu;
    return {
        ...props,
        ref: mergeRefs(menu.buttonRef, externalRef, overlay.referenceRef),
        id: menu.buttonId,
        onClick: callAllHandlers(props.onClick, toggle)
    };
}
function useMenuList(props = {}, ref = null) {
    const { children, ...htmlProps } = props;
    const menu = useMenuContext();
    const { menuRef, overlay, isOpen, menuId, isLazy, lazyBehavior, placement } = menu;
    const hasBeenOpened = useRef(false);
    if (isOpen) {
        hasBeenOpened.current = true;
    }
    const shouldRenderChildren = lazyDisclosure({
        wasSelected: hasBeenOpened.current,
        enabled: isLazy,
        mode: lazyBehavior,
        isSelected: isOpen
    });
    return {
        htmlProps,
        animation: OverlayTransitions[placement],
        show: isOpen,
        beforeEnter: overlay.forceUpdate,
        overlayProps: overlay.getOverlayProps({
            style: { zIndex: 10 }
        }, mergeRefs(menuRef, ref)),
        children: shouldRenderChildren ? children : null,
        tabIndex: -1,
        id: menuId
    };
}
function useMenuItem(props = {}, externalRef = null) {
    const { onMouseEnter: onMouseEnterProp, onMouseMove: onMouseMoveProp, onMouseLeave: onMouseLeaveProp, onClick: onClickProp, onFocus: onFocusProp, isDisabled, closeOnSelect, type: typeProp, ...htmlProps } = props;
    const menu = useMenuContext();
    const { closeOnSelect: menuCloseOnSelect, onClose } = menu;
    const ref = useRef(null);
    const id = uniqueId('menu-item');
    const { index, register } = useMenuDescendant({
        disabled: isDisabled
    });
    const onMouseEnter = useCallback((event) => {
        onMouseEnterProp?.(event);
        if (isDisabled)
            return;
    }, [index, isDisabled, onMouseEnterProp]);
    const onMouseMove = useCallback((event) => {
        onMouseMoveProp?.(event);
        if (ref.current && !isActiveElement(ref.current)) {
            onMouseEnter(event);
        }
    }, [onMouseEnter, onMouseMoveProp]);
    const onMouseLeave = useCallback((event) => {
        onMouseLeaveProp?.(event);
        if (isDisabled)
            return;
    }, [isDisabled, onMouseLeaveProp]);
    const onClick = useCallback((event) => {
        onClickProp?.(event);
        if (closeOnSelect ?? menuCloseOnSelect) {
            onClose();
        }
    }, [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]);
    const onFocus = useCallback((event) => {
        onFocusProp?.(event);
    }, [onFocusProp, index]);
    return {
        ...htmlProps,
        onClick,
        onFocus,
        onMouseEnter,
        onMouseMove,
        onMouseLeave,
        ref: mergeRefs(register, ref, externalRef),
        disabled: isDisabled,
        type: typeProp ?? 'button',
        id,
        tabIndex: -1
    };
}
function useMenuOption(props = {}, ref = null) {
    const { isChecked, ...rest } = props;
    const ownProps = useMenuItem(rest, ref);
    return {
        ...ownProps,
        isChecked,
        'aria-checked': isChecked
    };
}
function useMenuOptionGroup(props = {}) {
    const { children, type = 'radio', value: valueProp, defaultValue, onChange: onChangeProp, ...htmlProps } = props;
    const isRadio = type === 'radio';
    const fallback = isRadio ? '' : [];
    const [value, setValue] = useControllableState({
        defaultValue: defaultValue ?? fallback,
        value: valueProp,
        onChange: onChangeProp
    });
    const onChange = useCallback((selectedValue) => {
        if (type === 'radio' && typeof value === 'string') {
            setValue(selectedValue);
        }
        if (type === 'checkbox' && Array.isArray(value)) {
            const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
            setValue(nextValue);
        }
    }, [value, setValue, type]);
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
        const onClick = (event) => {
            onChange(child.props.value);
            child.props.onClick?.(event);
        };
        const childValue = JSON.stringify(child.props.value);
        const valueStr = JSON.stringify(value);
        const isChecked = type === 'radio' ? childValue === valueStr : valueStr.includes(childValue);
        return cloneElement(child, {
            type,
            onClick,
            isChecked
        });
    });
    return {
        ...htmlProps,
        children: clones
    };
}
function useMenuState() {
    const { isOpen, onClose } = useMenuContext();
    return { isOpen, onClose };
}

export { MenuDescendantsProvider, useMenu, useMenuButton, useMenuDescendant, useMenuDescendants, useMenuDescendantsContext, useMenuItem, useMenuList, useMenuOption, useMenuOptionGroup, useMenuState };
