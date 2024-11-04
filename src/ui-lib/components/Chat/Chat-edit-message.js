import { jsxs, jsx } from 'react/jsx-runtime';
import { EditWithDotsIcon } from '../../icons/editor/edit-with-dots.icon.js';
import { ChatSystemMessageLayout } from './Chat-system-message-layout.js';

const ChatEditMessage = (props) => {
    const { sender, message, title } = props;
    return (jsxs(ChatSystemMessageLayout, { message: props, children: [jsxs("div", { className: 'flex items-center gap-1 pb-3 text-sm text-primary-700 md:gap-2', children: [jsx(EditWithDotsIcon, { className: 'text-i-20' }), title] }), jsx("div", { className: 'mb-1 text-sm font-medium text-primary-700', children: sender }), jsx("div", { className: 'whitespace-pre-line break-words text-yuri-400', children: message })] }));
};
ChatEditMessage.displayName = 'ChatEditMessage';

export { ChatEditMessage };
