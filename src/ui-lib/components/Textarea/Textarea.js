import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef, useLayoutEffect } from 'react';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { TextareaSizesInput } from './tailwind-variations/size.js';
import { TextareaColorsInput } from './tailwind-variations/theme.js';

const UITextArea = forwardRef(({ className = '', theme = 'default', fieldSize = 'medium', maxRows, rows, id, disabled, onKeyDown: onKeyDownProp, preventEnter = false, ...props }, refProp) => {
    const textAreaRef = useRef(null);
    const ref = mergeRefs(refProp, textAreaRef);
    const inputClasses = `${TextareaSizesInput[fieldSize]} ${TextareaColorsInput[theme]}`;
    const handleInput = () => {
        if (textAreaRef.current && maxRows) {
            textAreaRef.current.style.height = '0px';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 2}px`; // + 2 - border
            if (textAreaRef.current.selectionStart === textAreaRef.current.value.length) {
                textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
            }
        }
    };
    const onKeyDown = (event) => {
        if (preventEnter && event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
        }
        onKeyDownProp?.(event);
    };
    useLayoutEffect(() => {
        if (textAreaRef.current && maxRows) {
            const { paddingBottom, paddingTop, lineHeight } = window.getComputedStyle(textAreaRef.current);
            const [pb, pt, lh] = [paddingBottom, paddingTop, lineHeight].map((style) => Number(style.replace('px', '')));
            textAreaRef.current.style.maxHeight = `${pt + pb + lh * maxRows + 2}px`; // + 2 - border
        }
    }, [fieldSize, maxRows]);
    return (jsx("textarea", { ...props, onInput: handleInput, onKeyDown: onKeyDown, rows: rows, id: id, ref: ref, disabled: disabled, className: `focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-100 ${inputClasses} ${className}` }));
});
UITextArea.displayName = 'UITextArea';

export { UITextArea };
