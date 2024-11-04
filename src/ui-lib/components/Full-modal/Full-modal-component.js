import { jsx, jsxs } from 'react/jsx-runtime';
import { TransitionChild } from '@headlessui/react';
import { CrossIcon } from '../../icons/suggested/cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { useFullModalContext } from './full-modal-context.js';

const FullModalComponent = (props) => {
    let { className = '' } = props;
    const { children, noneStyles = false } = props;
    const { refModal, closable, handleClose } = useFullModalContext();
    className += noneStyles ? ' p-2 md:p-4' : '';
    return (jsx(TransitionChild, { children: jsxs("section", { ref: refModal, "aria-modal": "true", role: "dialog", className: `
          ${className}
          ease-linery pointer-events-auto absolute bottom-3 left-3 right-3 top-3 scale-100 opacity-100 shadow-black-around transition-all duration-150
          data-[closed]:scale-50 data-[closed]:opacity-0 dark:shadow-yuri-100 md:bottom-5 md:left-5 md:right-5 md:top-5`, children: [closable && (jsx("div", { className: 'absolute right-0 top-0 z-1', children: jsx(UIButton, { onClick: handleClose, className: 'group/button flex h-14 w-14 items-center justify-center text-i-24 text-rus-400 md:h-18 md:w-18', theme: 'empty', children: jsx(CrossIcon, { className: 'rounded transition-background group-hover/button:bg-walentine-300 group-active/button:bg-walentine-500' }) }) })), children] }) }));
};

export { FullModalComponent };
