import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { forwardRef, useMemo, Fragment } from 'react';
import { MessageIcon } from '../../icons/application/message.icon.js';
import { SendIcon } from '../../icons/application/send.icon.js';
import { UIButton } from '../Button/Button.js';
import { UITextArea } from '../Textarea/Textarea.js';
import { ChatEditMessage } from './Chat-edit-message.js';
import { ChatHistoryMessage } from './Chat-history-message.js';
import { ChatMessage } from './Chat-message.js';
import { useChat } from './use-chat.js';

const UIChat = forwardRef((props, ref) => {
    const { disabled = false, empty = false, readOnly = false, className = '', ...rest } = props;
    const { messages, handleSubmit, handleTextAreaChange, textAreaRef, handleKeyDown, message } = useChat(rest);
    const chatMessageComponent = (m) => {
        let mes = jsx(Fragment$1, {});
        switch (m.status) {
            case 'history-message':
                mes = jsx(ChatHistoryMessage, { ...m });
                break;
            case 'edit-message':
                mes = jsx(ChatEditMessage, { ...m });
                break;
            default:
                mes = jsx(ChatMessage, { ...m });
                break;
        }
        return mes;
    };
    const messageComponent = useMemo(() => {
        return messages.map((m, index) => (jsxs(Fragment, { children: [((messages[index - 1] && messages[index - 1].startOfDay !== m.startOfDay) || !index) && (jsxs("div", { className: 'mt-3 flex items-center gap-6', children: [jsx("hr", { className: 'w-full' }), jsx("strong", { className: 'whitespace-nowrap text-xs font-medium text-rus-300', children: m.dateLabel }), jsx("hr", { className: 'w-full' })] })), chatMessageComponent(m)] }, m.id)));
    }, [messages]);
    return (jsxs("section", { ref: ref, className: `flex flex-col ${empty ? '' : 'max-h-full rounded-xl border border-rus-100'}  ${className}`, children: [jsx("div", { className: 'relative flex w-full flex-1 overflow-hidden', children: jsxs("div", { className: 'flex w-full flex-col-reverse overflow-y-auto', children: [!messages.length && (jsxs("div", { className: 'absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center', children: [jsx(MessageIcon, { className: 'mb-5 text-i-70 text-primary-400' }), jsx("span", { className: 'text-sm text-yuri-300', children: "\u041D\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439" })] })), jsx("ol", { style: { transform: 'translateZ(0)' }, className: 'flex flex-col p-4', children: messageComponent })] }) }), !readOnly && (jsxs("form", { onSubmit: handleSubmit, className: `flex items-center ${empty ? '' : 'rounded-b-xl'} bg-walentine-400 py-1 pl-5 pr-1`, children: [jsx(UITextArea, { ref: textAreaRef, placeholder: 'Написать сообщение', theme: 'outline', fieldSize: 'small', className: 'flex-1 resize-none whitespace-pre-line bg-walentine-100', rows: 1, maxRows: 7, preventEnter: true, disabled: disabled, onChange: handleTextAreaChange, onKeyDown: handleKeyDown }), jsx(UIButton, { type: 'submit', theme: 'icon', disabled: disabled || !message, className: 'p-4 text-i-36 text-primary-700 disabled:text-rus-400', children: jsx(SendIcon, {}) })] }))] }));
});
UIChat.displayName = 'UIChat';

export { UIChat };
