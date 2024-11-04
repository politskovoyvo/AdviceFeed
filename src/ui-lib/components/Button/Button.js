import { jsxs, jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { buttonSize, fontSize } from './tailwind-variations/size.js';
import { buttonTheme, fontTheme } from './tailwind-variations/theme.js';

const UIButton = forwardRef((props, ref) => {
    const { theme = 'primary', fieldSize = 'medium', type = 'button', loading = false, className, children, onClick, ...rest } = props;
    const noneSizesThemes = ['icon', 'empty', 'link'];
    const doesThemeIncludes = noneSizesThemes.includes(theme);
    const buttonClasses = `${buttonTheme[theme]} ${!doesThemeIncludes && buttonSize[fieldSize]}`;
    const colorClasses = `${fontTheme[theme]} ${!doesThemeIncludes && fontSize[fieldSize]}`;
    const loaderClasses = fontTheme[theme];
    return (jsxs("button", { ref: ref, onClick: onClick, "aria-pressed": !!onClick || type === 'submit', type: type, className: `group relative flex cursor-default items-center justify-center outline-0 transition-all disabled:cursor-not-allowed disabled:aria-pressed:cursor-not-allowed ${buttonClasses} ${className ?? ''} ${loading ? 'cursor-progress' : 'aria-pressed:cursor-pointer'}`, ...rest, children: [jsx("span", { className: `flex items-center whitespace-nowrap duration-150 ease-in-out ${colorClasses} ${loading ? 'opacity-0' : ''}`, children: children }), jsx(Transition, { show: loading, children: jsx("div", { className: `
            absolute bottom-0 left-0 right-0 top-0 flex
            items-center justify-center text-yuri-500 opacity-100 
            transition-opacity data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-75 data-[enter]:ease-in data-[leave]:ease-out ${loaderClasses}
        `, children: jsx(LoadingIcon, {}) }) })] }));
});
UIButton.displayName = 'UIButton';

export { UIButton };
