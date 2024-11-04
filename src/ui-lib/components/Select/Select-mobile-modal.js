import { jsxs, jsx } from 'react/jsx-runtime';
import { UIButton } from '../Button/Button.js';
import { useSelectContext } from './Select-context.js';
import { SelectLabel } from './Select-label.js';
import { SelectList } from './Select-list.js';

const SelectMobileModal = ({ selectedTemplate, className, theme, optionTemplate, fieldSize, placeholder, dropdownTitle }) => {
    const { disclosure, clearInput, onCancel } = useSelectContext();
    const handleClick = () => {
        disclosure.close();
        clearInput();
        if (onCancel) {
            onCancel();
        }
    };
    return (jsxs("div", { className: 'flex h-viewport flex-col transition-height delay-75 duration-75', children: [jsxs("div", { className: 'flex items-center gap-2 px-4 py-2', children: [jsx(SelectLabel, { insideOverlay: true, placeholder: placeholder, fieldSize: fieldSize, theme: theme, className: `w-full ${className}`, selectedTemplate: selectedTemplate }), jsx(UIButton, { theme: 'transparent', onClick: handleClick, children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" })] }), jsx("hr", {}), jsx("div", { className: 'flex flex-col gap-2 overflow-y-auto px-2 py-4', children: jsx(SelectList, { optionTemplate: optionTemplate, fieldSize: fieldSize, maxOptionsOverflow: 999 }) })] }));
};

export { SelectMobileModal };
