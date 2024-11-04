import { jsx } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { memo, useState, useEffect } from 'react';
import { useTimeout } from '../../utils/hooks/use-timeout.js';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { ToastTransitions } from './tailwind-variations/toast-transitions.js';

const UIToast = memo(({ message, onRequestRemove, id, position, duration = 5000, onClosed, onClose }) => {
    const [delay, setDelay] = useState(duration);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setDelay(duration);
        setShow(true);
    }, [duration]);
    const onMouseEnter = () => setDelay(null);
    const onMouseLeave = () => setDelay(duration);
    const closeToast = () => {
        setShow(false);
    };
    const afterLeaveHandle = () => {
        onRequestRemove();
        onClosed?.();
    };
    useTimeout(closeToast, delay);
    return (jsx(Transition, { show: show, beforeLeave: onClose, afterLeave: afterLeaveHandle, children: jsx("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, className: `
          mb-4 grid max-h-56 transition-all ease-linear
          data-[closed]:mb-0
          data-[enter]:data-[closed]:max-h-0 data-[leave]:data-[closed]:grid-rows-[0fr]
          data-[leave]:grid-rows-[1fr] data-[leave]:delay-150 data-[leave]:duration-150`, children: jsx(TransitionChild, { children: jsx("div", { className: `
              pointer-events-auto relative w-[20.5rem] translate-y-0 transform overflow-hidden rounded-lg bg-yuri-400 px-4 py-3 opacity-100 transition-all 
              data-[closed]:-translate-y-6 data-[closed]:scale-0 data-[closed]:py-0 data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300 data-[enter]:ease-in-out data-[leave]:ease-linear dark:bg-yuri-100 md:shadow-md2 md:shadow-walentine-500 ${ToastTransitions[position]}`, children: runIfFn(message, { id, onClose: closeToast }) }) }) }) }));
});
UIToast.displayName = 'UIToast';

export { UIToast };
