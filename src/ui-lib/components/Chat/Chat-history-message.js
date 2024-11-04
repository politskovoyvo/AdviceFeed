import { jsxs, jsx } from 'react/jsx-runtime';
import { PointIcon } from '../../icons/application/point.icon.js';
import { ArrowDownIcon } from '../../icons/directions/arrow-down.icon.js';
import { ChatSystemMessageLayout } from './Chat-system-message-layout.js';

const ChatHistoryMessage = (props) => {
    const { title, sender, newValue, oldValue, comment } = props;
    return (jsxs(ChatSystemMessageLayout, { message: props, children: [jsxs("div", { className: 'flex items-center gap-1 pb-3 text-sm text-primary-700 md:gap-2', children: [jsx(PointIcon, { className: 'text-i-20' }), title] }), jsx("div", { className: 'text-sm font-medium text-primary-700', children: sender }), comment && jsx("div", { className: 'mt-1 whitespace-pre-line break-words text-yuri-400', children: comment }), jsxs("div", { className: 'mt-3 flex flex-wrap items-center gap-0.5', children: [oldValue, " ", jsx(ArrowDownIcon, { className: '-rotate-90 text-orange-800' }), " ", newValue] })] }));
};
ChatHistoryMessage.displayName = 'ChatHistoryMessage';

export { ChatHistoryMessage };
