import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UIMenuGroup = forwardRef((props, ref) => {
    const { title, children, className = '', ...rest } = props;
    return (jsxs("div", { ref: ref, className: `${className}`, ...rest, children: [title && jsx("span", { className: 'my-2 block pl-5 text-sm font-semibold text-yuri-200', children: title }), children] }));
});
UIMenuGroup.displayName = 'UIMenuGroup';

export { UIMenuGroup };
