import { jsx, jsxs } from 'react/jsx-runtime';
import { TransitionChild } from '@headlessui/react';
import { CrossIcon } from '../../icons/suggested/cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { useModalContext } from './modal-context.js';
import { ModalPosition } from './tailwind-variations/position.js';

const ModalComponent = (props) => {
    const { handleClose, refModal, closable } = useModalContext();
    const { children, noneStyles = false, centered = 'true' } = props;
    let { className = '' } = props;
    const positionClassName = ModalPosition[centered ? 'center' : 'top'];
    className += noneStyles ? '' : ' py-3 mx-1 md:py-6 md:mx-2 overflow-hidden';
    return (jsx(TransitionChild, { children: jsxs("section", { ref: refModal, "aria-modal": "true", role: "dialog", className: `
          ${className} ${positionClassName}
          ease-linery pointer-events-auto absolute flex max-h-modal origin-top scale-100 flex-col rounded-xl bg-walentine-100 opacity-100 shadow-black-around transition-all duration-150
          data-[closed]:scale-50 data-[closed]:opacity-10 dark:bg-yuri-100
          `, children: [closable && (jsx("div", { className: 'absolute right-0 top-0 z-1', children: jsx(UIButton, { onClick: handleClose, className: 'group/button flex h-14 w-14 items-center justify-center text-i-24 text-rus-400 md:h-18 md:w-18', theme: 'empty', children: jsx(CrossIcon, { className: 'rounded transition-background group-hover/button:bg-walentine-300 group-active/button:bg-walentine-500' }) }) })), children] }) }));
};

export { ModalComponent };
