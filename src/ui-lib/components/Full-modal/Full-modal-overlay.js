import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { useFullModalContext } from './full-modal-context.js';

const FullModalOverlay = (props) => {
    const { className } = props;
    const { isOpen, handleClose } = useFullModalContext();
    return (jsx(Transition, { appear: true, show: isOpen, children: jsx("div", { className: `
          ease-linery pointer-events-auto fixed bottom-0 left-0 right-0 top-0 opacity-100 transition-opacity duration-150 data-[closed]:opacity-0 
          ${className ?? 'bg-walentine-100/50 dark:bg-yuri-1000/50'}
          `, onClick: handleClose }) }));
};

export { FullModalOverlay };
