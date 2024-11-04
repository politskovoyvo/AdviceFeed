import { jsx, jsxs } from 'react/jsx-runtime';
import { memo } from 'react';
import { UITooltip } from '../Tooltip/Tooltip.js';
import { ClipboardIcon } from '../../icons/application/clipboard.icon.js';
import { useClipboard } from './use-clipboard.js';

const UIClipboard = memo((props) => {
    const { custom = false, showIcon = true, children, className = '', ...rest } = props;
    const { tooltipProp, buttonProps } = useClipboard(rest);
    const classNames = custom ? '' : 'flex items-center gap-2';
    return (jsx(UITooltip, { ...tooltipProp, children: jsxs("button", { type: "button", className: `${classNames} ${className}`, ...buttonProps, children: [children, showIcon && jsx(ClipboardIcon, { className: "text-i-20 text-rus-100" })] }) }));
});
UIClipboard.displayName = 'UIClipboard';

export { UIClipboard };
