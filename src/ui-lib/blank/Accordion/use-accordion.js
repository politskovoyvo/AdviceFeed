import { useState, useEffect, useRef, useCallback } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useAccordionDescendants, useAccordionContext, useAccordionDescendant } from './accordion-context.js';

function useAccordion(props) {
    const { defaultIndexes = [], indexes: indexesProp, toggle = true, multiple = true, onChange: onChangeProp, ...htmlProps } = props;
    const descendants = useAccordionDescendants();
    const [focusedIndex, setFocusedIndex] = useState(-1);
    useEffect(() => {
        return () => {
            setFocusedIndex(-1);
        };
    }, []);
    const [indexes, setIndexes] = useControllableState({
        value: indexesProp,
        defaultValue: defaultIndexes,
        onChange: onChangeProp
    });
    const getAccordionItemProps = (idx) => {
        let isOpen = false;
        if (idx !== null) {
            isOpen = indexes.includes(idx);
        }
        const onChange = (state) => {
            if (idx === null)
                return;
            if (multiple) {
                const nextState = state ? indexes.concat(idx) : indexes.filter((i) => i !== idx);
                setIndexes(nextState);
            }
            else if (state) {
                setIndexes([idx]);
            }
            else if (toggle) {
                setIndexes([-1]);
            }
        };
        return { isOpen, onChange };
    };
    return {
        descendants,
        focusedIndex,
        getAccordionItemProps,
        htmlProps,
        indexes,
        setFocusedIndex,
        setIndexes
    };
}
function useAccordionItem(props) {
    const { disabled = false, ...htmlProps } = props;
    const buttonRef = useRef(null);
    const buttonId = uniqueId('accordion-button');
    const contentRef = useRef(null);
    const contentId = uniqueId('accordion-content');
    const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
    const { register, index, descendants } = useAccordionDescendant({ disabled });
    const { isOpen, onChange } = getAccordionItemProps(index === -1 ? null : index);
    const onOpen = () => onChange?.(true);
    const onClose = () => onChange?.(false);
    const onClick = useCallback(() => {
        onChange?.(!isOpen);
        setFocusedIndex(index);
    }, [index, setFocusedIndex, isOpen, onChange]);
    const onKeyDown = useCallback((event) => {
        const keyMap = {
            ArrowDown: () => {
                const next = descendants.nextEnabled(index);
                next?.node.focus();
            },
            ArrowUp: () => {
                const prev = descendants.prevEnabled(index);
                prev?.node.focus();
            }
        };
        const action = keyMap[event.key];
        if (action) {
            event.preventDefault();
            action(event);
        }
    }, [descendants, index]);
    const onFocus = useCallback(() => {
        setFocusedIndex(index);
    }, [setFocusedIndex, index]);
    const getButtonProps = useCallback(function getButtonProps(buttonProps = {}, ref = null) {
        return {
            ...buttonProps,
            type: 'button',
            ref: mergeRefs(register, buttonRef, ref),
            id: buttonId,
            disabled,
            'aria-expanded': isOpen,
            'aria-disabled': disabled,
            onClick: callAllHandlers(buttonProps.onClick, onClick),
            onFocus: callAllHandlers(buttonProps.onFocus, onFocus),
            onKeyDown: callAllHandlers(buttonProps.onKeyDown, onKeyDown)
        };
    }, [buttonId, disabled, isOpen, onClick, onFocus, onKeyDown, contentId, register]);
    const getContentProps = useCallback(function getPanelProps(contentProps = {}, ref = null) {
        const contentHeight = contentRef.current?.scrollHeight || 99999;
        return {
            ...contentProps,
            'aria-expanded': isOpen,
            style: { maxHeight: isOpen ? contentHeight + 50 : 0, opacity: isOpen ? 100 : 0 },
            ref: mergeRefs(contentRef, ref),
            id: contentId
        };
    }, [isOpen, contentId]);
    return {
        buttonRef,
        contentRef,
        disabled,
        getButtonProps,
        getContentProps,
        htmlProps,
        isOpen,
        onClose,
        onOpen
    };
}

export { useAccordion, useAccordionItem };
