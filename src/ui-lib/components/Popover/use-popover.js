import { useRef, useCallback, useEffect } from 'react';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useOutsideParentClick } from '../../utils/hooks/use-outside-parent-click.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { debounce } from '../../utils/methods/debounce.js';
import { lazyDisclosure } from '../../utils/methods/lazy.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useOverlay } from '../Overlay/use-overlay.js';
import { OverlayTransitions } from '../Overlay/tailwind-variations/overlay-transition.js';
import { EPopoverTrigger } from './models/enums/popover-trigger.enum.js';

function getRelatedTarget(event) {
    const activeEl = event.currentTarget.ownerDocument.activeElement;
    return (event.relatedTarget ?? activeEl);
}
function contains(parent, child) {
    return parent === child || parent?.contains(child);
}
function usePopover(props = {}) {
    const { id, trigger = EPopoverTrigger.click, openDelay = 100, closeDelay = 100, isLazy, toggleShow = true, lazyBehavior = 'unmount', isIgnoreTouches = false, ...popperProps } = props;
    const { isOpen, close, open, toggle } = useDisclosure(popperProps);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);
    const isHoveringRef = useRef(false);
    const hasBeenOpened = useRef(false);
    if (isOpen) {
        hasBeenOpened.current = true;
    }
    const uid = id ?? uniqueId('popover');
    const [triggerId, popoverId] = ['popover-trigger', 'popover-content'].map((block) => `${block}-${uid}`);
    const { referenceRef, getOverlayProps, forceUpdate } = useOverlay({
        ...popperProps,
        enabled: isOpen
    });
    const shouldRenderChildren = lazyDisclosure({
        wasSelected: hasBeenOpened.current,
        enabled: isLazy,
        mode: lazyBehavior,
        isSelected: isOpen
    });
    const clickRef = useOutsideParentClick({
        enabled: isOpen,
        callback: close,
        parent: triggerRef,
        isIgnoreTouches
    });
    const getTransitionProps = useCallback(() => ({
        show: isOpen,
        beforeEnter: debounce(forceUpdate, 1)
    }), [forceUpdate, isOpen]);
    const getPopoverProps = useCallback((_props = {}, _ref = null) => {
        const popoverProps = {
            ..._props,
            ref: mergeRefs(popoverRef, _ref, clickRef),
            children: shouldRenderChildren ? _props.children : null,
            id: popoverId,
            className: `${_props.className} ${OverlayTransitions[props.placement ?? 'bottom-start']}`
        };
        if (trigger === EPopoverTrigger.hover) {
            popoverProps.role = 'tooltip';
            popoverProps.onMouseEnter = callAllHandlers(_props.onMouseEnter, () => {
                isHoveringRef.current = true;
            });
            popoverProps.onMouseLeave = callAllHandlers(_props.onMouseLeave, (event) => {
                // https://stackoverflow.com/questions/46831247/select-triggers-mouseleave-event-on-parent-element-in-mozilla-firefox
                if (event.nativeEvent.relatedTarget === null) {
                    return;
                }
                isHoveringRef.current = false;
                setTimeout(() => close(), closeDelay);
            });
        }
        return popoverProps;
    }, [clickRef, shouldRenderChildren, popoverId, props.placement, trigger, closeDelay, close]);
    const getPopoverPositionerProps = useCallback((_props = {}, forwardedRef = null) => getOverlayProps({
        ..._props,
        style: {
            zIndex: 10,
            ..._props.style
        }
    }, forwardedRef), [isOpen, getOverlayProps]);
    const openTimeout = useRef();
    const closeTimeout = useRef();
    const getTriggerProps = useCallback((_props = {}, _ref = null, targetRefName = 'ref') => {
        const triggerProps = {
            ..._props,
            [targetRefName]: mergeRefs(triggerRef, _ref, referenceRef),
            id: triggerId
        };
        if (trigger === EPopoverTrigger.click) {
            triggerProps.onClick = callAllHandlers(_props.onClick, () => {
                if (toggleShow) {
                    toggle();
                }
                else {
                    if (!isOpen) {
                        open();
                    }
                }
            });
        }
        if (trigger === EPopoverTrigger.hover) {
            triggerProps.onFocus = callAllHandlers(_props.onFocus, () => {
                if (openTimeout.current === undefined) {
                    open();
                }
            });
            triggerProps.onBlur = callAllHandlers(_props.onBlur, (event) => {
                const relatedTarget = getRelatedTarget(event);
                const isValidBlur = !contains(popoverRef.current, relatedTarget);
                if (isOpen && isValidBlur) {
                    close();
                }
            });
            triggerProps.onMouseEnter = callAllHandlers(_props.onMouseEnter, () => {
                isHoveringRef.current = true;
                openTimeout.current = window.setTimeout(() => open(), openDelay);
            });
            triggerProps.onMouseLeave = callAllHandlers(_props.onMouseLeave, () => {
                isHoveringRef.current = false;
                if (openTimeout.current) {
                    clearTimeout(openTimeout.current);
                    openTimeout.current = undefined;
                }
                closeTimeout.current = window.setTimeout(() => {
                    if (!isHoveringRef.current) {
                        close();
                    }
                }, closeDelay);
            });
        }
        return triggerProps;
    }, [triggerId, isOpen, popoverId, trigger, toggle, open, close, openDelay, closeDelay]);
    useEffect(() => {
        return () => {
            if (openTimeout.current) {
                clearTimeout(openTimeout.current);
            }
            if (closeTimeout.current) {
                clearTimeout(closeTimeout.current);
            }
        };
    }, []);
    return {
        forceUpdate,
        isOpen,
        close,
        getPopoverPositionerProps,
        getTransitionProps,
        getPopoverProps,
        getTriggerProps
    };
}

export { usePopover };
