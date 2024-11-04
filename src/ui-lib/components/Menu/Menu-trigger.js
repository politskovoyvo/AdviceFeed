import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useMenuButton } from './use-menu.js';

const UIMenuTrigger = forwardRef((props, ref) => {
    const { className = '', ...rest } = useMenuButton(props, ref);
    return jsx("button", { className: `relative ${className}`, ...rest, type: 'button' });
});
UIMenuTrigger.displayName = 'UIMenuTrigger';

export { UIMenuTrigger };
