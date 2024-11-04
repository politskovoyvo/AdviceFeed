import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { useState, useEffect, createElement } from 'react';
import { TinyCrossIcon } from '../../icons/suggested/tiny-cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { useSelectContext } from './Select-context.js';

const SelectCoverage = (props) => {
    const { coveragePlaceholder = '', coveragePostfix, selectedTemplate, compress } = props;
    const { selected, inputRef, isAllowClear, removeAll, multiply, disclosure } = useSelectContext();
    const [title, setTitle] = useState('');
    const [haveValue, setHaveValue] = useState(false);
    const handleRemoveClick = (event) => {
        removeAll();
        event.stopPropagation();
    };
    const handleClick = (event) => {
        inputRef.current?.focus();
    };
    useEffect(() => {
        setHaveValue(!!selected.length);
        if (!selected.length) {
            return setTitle(coveragePlaceholder);
        }
        const labels = selected.map((s) => s.label).join(', ');
        if (multiply) {
            setTitle(labels);
        }
        else {
            const label = selectedTemplate ? createElement(selectedTemplate, selected[0]) : labels;
            setTitle(label);
        }
    }, [selected]);
    return (jsx(Fragment, { children: (coveragePlaceholder || coveragePostfix) && (jsx(Transition, { show: !disclosure.isOpen, children: jsx("div", { onClick: handleClick, className: "opacity-100 transition-opacity duration-75 ease-in data-[closed]:opacity-0", children: jsxs("div", { className: `${compress ? 'justify-center px-0' : 'justify-between px-4'} ${selected.length ? 'cursor-default' : 'cursor-pointer'}  absolute bottom-0 left-0 right-0 top-0 flex items-center gap-3 rounded-lg bg-walentine-500`, children: [jsxs("div", { className: `${compress ? 'gap-0' : 'gap-2'} flex items-center overflow-hidden`, children: [coveragePostfix && (jsx(TransitionChild, { children: jsx("span", { className: `
                        translate-x-0 text-i-24 opacity-100 transition-all
                        duration-75 ease-in data-[closed]:-translate-x-full data-[closed]:opacity-0
                        ${haveValue ? 'text-primary-700' : 'text-yuri-400'}`, children: coveragePostfix }) })), title && (jsx(TransitionChild, { children: jsx("div", { className: `
                    translate-x-0 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal text-yuri-400 opacity-100 transition-all 
                    duration-75 ease-in 
                    ${coveragePostfix ? 'data-[closed]:-translate-x-8 data-[closed]:opacity-0' : 'data-[closed]:opacity-0'}`, children: jsx("p", { className: compress ? 'w-0 opacity-0' : 'w-auto opacity-100', children: title }) }) }))] }), jsx(Transition, { show: isAllowClear && haveValue, appear: true, children: jsx("div", { className: `absolute -right-3 scale-100 opacity-100 transition-all 
                    data-[closed]:scale-75 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-75 data-[enter]:ease-in data-[leave]:ease-out`, children: jsx(UIButton, { className: 'rounded-full border border-walentine-100 bg-rus-400 text-i-20 text-walentine-100', onClick: handleRemoveClick, theme: 'empty', children: jsx(TinyCrossIcon, {}) }) }) })] }) }) })) }));
};

export { SelectCoverage };
