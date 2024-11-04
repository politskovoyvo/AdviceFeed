import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { isValidElement } from 'react';
import { UIButton } from '../Button/Button.js';
import { InputColorsIcon } from './tailwind-variations/colors.js';
import { InputSizesIcon } from './tailwind-variations/sizes.js';

const InputAppendix = ({ content, fieldSize, theme, position, disabled }) => {
    const iconsClasses = `${InputSizesIcon[fieldSize]} ${InputColorsIcon[theme]}`;
    return (jsxs(Fragment, { children: [isValidElement(content) && (jsx(UIButton, { disabled: disabled, theme: 'icon', type: 'button', className: 'mr-1', children: content && content })), !isValidElement(content) && (jsxs("div", { className: `flex h-full items-center ${iconsClasses}`, children: [position === 'right' && jsx("hr", { className: 'mx-1 h-6 w-0.25 border-0 bg-rus-300 dark:bg-yuri-100' }), jsx(UIButton, { className: 'h-full border-transparent px-3 transition enabled:hover:scale-105 enabled:active:scale-100 disabled:text-rus-300', onClick: content?.onClick, theme: 'empty', type: 'button', disabled: content.disabled || disabled, children: content.label }), position === 'left' && jsx("hr", { className: 'mx-1 h-6 w-0.25 border-0 bg-rus-300 dark:bg-yuri-100' })] }))] }));
};

export { InputAppendix };
