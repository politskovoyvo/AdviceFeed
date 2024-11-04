import { jsx, jsxs } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { forwardRef } from 'react';
import { toDate } from '../../utils/methods/date.js';

const ChatSystemMessageLayout = forwardRef((props, ref) => {
    const { children, message } = props;
    const realDate = toDate(message.date);
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const timeFormatter = new Intl.DateTimeFormat('ru', timeOptions);
    return (jsx(Transition, { show: true, appear: true, children: jsx("li", { ref: ref, className: `
          mt-3 max-h-full max-w-full transition-all duration-300 ease-linear 
          data-[closed]:mt-0 data-[closed]:max-h-0`, children: jsx(TransitionChild, { children: jsxs("div", { className: `
            relative z-1 translate-y-0 transform overflow-hidden rounded-2xl bg-primary-200
            px-4 py-3 transition-all duration-300 ease-linear
            data-[closed]:translate-y-full 
            `, children: [jsx("div", { className: 'absolute left-0 top-1 h-[calc(100%-0.5rem)] w-1 bg-primary-400' }), children, jsx("sub", { className: 'bottom-0 whitespace-nowrap text-xs text-rus-500', children: timeFormatter.format(realDate) })] }) }) }) }));
});
ChatSystemMessageLayout.displayName = 'ChatSystemMessageLayout';

export { ChatSystemMessageLayout };
