import { useState, useEffect, useCallback, createElement, useRef, useLayoutEffect } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { useWindowDimensions } from '../../utils/hooks/use-window-dimensions.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { debounce } from '../../utils/methods/debounce.js';
import { lazyDisclosure } from '../../utils/methods/lazy.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { createDescendantContext } from '../Descendants/use-descendant.js';
import { useTabsContext, TabPanelContext, useTabPanelContext } from './tabs-context.js';
import { transitionsPanel } from './tailwind-variations/transitions.js';

function makeTabId(id, index) {
    return `${id}--tab-${index}`;
}
function makeTabPanelId(id, index) {
    return `${id}--tabpanel-${index}`;
}
const [TabsDescendantsProvider, useTabsDescendantsContext, useTabsDescendants, useTabsDescendant] = createDescendantContext();
function useTabs(props) {
    const { defaultIndex, onChange, index, isLazy, lazyBehavior = 'unmount', ...htmlProps } = props;
    const [focusedIndex, setFocusedIndex] = useState(defaultIndex ?? 0);
    const [selectedIndex, setSelectedIndex] = useControllableState({
        defaultValue: defaultIndex ?? 0,
        value: index,
        onChange
    });
    const [previousSelect, setPreviousSelect] = useState(selectedIndex);
    useEffect(() => {
        if (index != null) {
            setFocusedIndex(index);
        }
    }, [index]);
    const descendants = useTabsDescendants();
    const id = props.id ? `tabs-${props.id}` : uniqueId('tabs');
    return {
        id,
        selectedIndex,
        focusedIndex,
        previousSelect,
        setPreviousSelect,
        setSelectedIndex,
        setFocusedIndex,
        isLazy,
        lazyBehavior,
        descendants,
        htmlProps
    };
}
function useTabList(props) {
    const { focusedIndex } = useTabsContext();
    const descendants = useTabsDescendantsContext();
    const onKeyDown = useCallback((event) => {
        const nextTab = () => {
            const next = descendants.nextEnabled(focusedIndex);
            if (next)
                next.node?.focus();
        };
        const prevTab = () => {
            const prev = descendants.prevEnabled(focusedIndex);
            if (prev)
                prev.node?.focus();
        };
        const firstTab = () => {
            const first = descendants.firstEnabled();
            if (first)
                first.node?.focus();
        };
        const lastTab = () => {
            const last = descendants.lastEnabled();
            if (last)
                last.node?.focus();
        };
        const eventKey = event.key;
        const keyMap = {
            ArrowLeft: () => prevTab(),
            ArrowRight: () => nextTab(),
            ArrowDown: () => nextTab(),
            ArrowUp: () => prevTab(),
            Home: firstTab,
            End: lastTab
        };
        const action = keyMap[eventKey];
        if (action) {
            event.preventDefault();
            action(event);
        }
    }, [descendants, focusedIndex]);
    return {
        ...props,
        role: 'tablist',
        onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
    };
}
function useTab(props) {
    const { isDisabled, isFocusable, ...htmlProps } = props;
    const { setSelectedIndex, id, setFocusedIndex, selectedIndex, setPreviousSelect } = useTabsContext();
    const { index, register } = useTabsDescendant({
        disabled: isDisabled && !isFocusable
    });
    const isSelected = index === selectedIndex;
    const isShowLeftDivider = !isSelected && index - 1 !== selectedIndex;
    const onClick = () => {
        setPreviousSelect(selectedIndex);
        setSelectedIndex(index);
    };
    const onFocus = () => {
        setFocusedIndex(index);
    };
    const type = 'button';
    return {
        ...htmlProps,
        index: index,
        ref: mergeRefs(register, props.ref),
        onClick: callAllHandlers(props.onClick, onClick),
        disabled: isDisabled,
        isDisabled,
        'aria-disabled': isDisabled,
        id: makeTabId(id, index),
        type,
        isSelected,
        isShowLeftDivider,
        'aria-selected': isSelected,
        'aria-controls': makeTabPanelId(id, index),
        onFocus: isDisabled ? undefined : callAllHandlers(props.onFocus, onFocus)
    };
}
function useTabPanels(props) {
    const context = useTabsContext();
    const { id, selectedIndex } = context;
    const validChildren = getValidChildren(props.children);
    const children = validChildren.map((child, index) => createElement(TabPanelContext.Provider, {
        key: index,
        value: {
            index,
            isSelected: index === selectedIndex,
            id: makeTabPanelId(id, index),
            tabId: makeTabId(id, index),
            selectedIndex
        }
    }, child));
    return { ...props, children };
}
function useTabPanel(props) {
    const { children, ...htmlProps } = props;
    const { isLazy, lazyBehavior, previousSelect, selectedIndex } = useTabsContext();
    const { isSelected, id, tabId, index } = useTabPanelContext();
    const [leaved, setLeaved] = useState(!isSelected);
    const afterLeave = () => {
        setLeaved(true);
    };
    const afterEnter = () => {
        setLeaved(false);
    };
    const hasBeenSelected = useRef(false);
    if (isSelected) {
        hasBeenSelected.current = true;
    }
    const shouldRenderChildren = lazyDisclosure({
        wasSelected: hasBeenSelected.current,
        isSelected: isSelected || !leaved,
        enabled: isLazy,
        mode: lazyBehavior
    });
    let transitionDirection = 'left-inside';
    if (isSelected) {
        transitionDirection = index < previousSelect ? 'left-inside' : 'right-inside';
    }
    if (index === previousSelect) {
        transitionDirection = index < selectedIndex ? 'left-outside' : 'right-outside';
    }
    const getPanelProps = useCallback((_props = {}, _ref) => ({
        ...htmlProps,
        ref: _ref,
        tabIndex: 0,
        children: shouldRenderChildren ? children : null,
        role: 'tabpanel',
        'aria-labelledby': tabId,
        className: `${_props.className} ${transitionsPanel[transitionDirection]}`,
        id
    }), [children, htmlProps, id, shouldRenderChildren, tabId, transitionDirection]);
    const getTransitionProps = useCallback(() => ({
        show: isSelected,
        afterLeave,
        afterEnter
    }), [isSelected]);
    return {
        getPanelProps,
        getTransitionProps
    };
}
function useTabIndicator() {
    const context = useTabsContext();
    const { width } = useWindowDimensions();
    const descendants = useTabsDescendantsContext();
    const { selectedIndex } = context;
    const [rect, setRect] = useState(() => ({ '--left': '0px', '--top': '0px', '--width': '0px', '--height': '0px' }));
    const identifyPosition = debounce(() => {
        if (selectedIndex == null)
            return;
        const tab = descendants.item(selectedIndex);
        if (tab == null)
            return;
        setRect({
            '--left': `${tab.node.offsetLeft}px`,
            '--width': `${tab.node.offsetWidth}px`,
            '--height': `${tab.node.offsetHeight}px`,
            '--top': `${tab.node.offsetTop}px`
        });
    }, 2);
    useLayoutEffect(identifyPosition, [selectedIndex, width, descendants]);
    return rect;
}

export { TabsDescendantsProvider, useTab, useTabIndicator, useTabList, useTabPanel, useTabPanels, useTabs, useTabsDescendant, useTabsDescendants, useTabsDescendantsContext };
