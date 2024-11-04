import { jsx, jsxs } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { forwardRef, useState, useLayoutEffect } from 'react';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { MessageAppendix } from '../../icons/application/message-appendix.js';
import { ExclamationTriangleIcon } from '../../icons/suggested/exclamation-triangle.icon.js';
import { ExclamationIcon } from '../../icons/suggested/exclamation.icon.js';
import { toDate } from '../../utils/methods/date.js';
import { MessageWrapStatus, MessageAppendixStatus, MessageAuthorStatus } from './tailwind-variations/status.js';

const ChatMessage = forwardRef((props, ref) => {
    const { message, status = 'usual', date, sender, isAuthor, error, loading } = props;
    const [show, setShow] = useState(!loading);
    const realDate = toDate(date);
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const timeFormatter = new Intl.DateTimeFormat('ru', timeOptions);
    const wrapClasses = isAuthor ? 'bg-walentine-400' : MessageWrapStatus[status];
    const appendixClasses = isAuthor ? 'text-walentine-400' : `-scale-x-100 ${MessageAppendixStatus[status]}`;
    const iconClasses = `${wrapClasses} rounded-full p-0.5 text-i-12`;
    const authorClasses = MessageAuthorStatus[status];
    useLayoutEffect(() => {
        setShow(true);
    }, []);
    return (jsx(Transition, { show: show, appear: true, children: jsx("li", { ref: ref, className: `
          mt-3 max-h-full max-w-7/10 transition-all duration-300 ease-linear
          data-[closed]:mt-0 data-[closed]:max-h-0 ${isAuthor ? 'self-end' : ''}`, children: jsx(TransitionChild, { children: jsxs("div", { className: `
              relative z-1 translate-y-0 transform rounded-2xl px-4 py-3 transition-all duration-300 ease-linear 
              data-[closed]:translate-y-full ${wrapClasses}`, children: [jsxs("div", { className: 'flex items-center justify-between', children: [jsx("b", { className: `text-sm font-medium ${authorClasses}`, children: sender }), status === 'warning' && jsx(ExclamationTriangleIcon, { className: 'text-i-24 text-orange-300' })] }), jsx("p", { className: 'break-words text-base font-normal text-yuri-400', children: message }), jsxs("div", { className: 'mt-2 flex items-center justify-between gap-2', children: [jsx("sub", { className: `${isAuthor ? 'order-last' : ''} bottom-0 whitespace-nowrap text-xs text-rus-500`, children: timeFormatter.format(realDate) }), jsxs("div", { className: 'h-fit w-4 self-end', children: [loading && (jsx("div", { className: `text-rus-200 ${iconClasses}`, children: jsx(LoadingIcon, {}) })), error && (jsx("div", { className: `text-red-800 ${iconClasses}`, children: jsx(ExclamationIcon, {}) })), jsx(MessageAppendix, { style: { bottom: '-0.188rem', [isAuthor ? 'right' : 'left']: '-0.563rem' }, className: `absolute text-i-20 ${appendixClasses}` })] })] })] }) }) }) }));
});
ChatMessage.displayName = 'UIChatMessage';

export { ChatMessage };
