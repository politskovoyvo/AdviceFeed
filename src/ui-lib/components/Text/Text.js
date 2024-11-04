import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { UITooltip } from '../Tooltip/Tooltip.js';
import { TextColor } from './tailwind-variations/color.js';
import { TextSize } from './tailwind-variations/size.js';

const UIText = forwardRef((props, ref) => {
    const { as: As = 'span', children, size = 'base', color = 'default', disabled = false, className = '', tooltip, ...rest } = props; // as TTextProps - некая проблема TS всплыла, надо будет потом глянуть и убить
    const classNames = `${TextSize[size]} ${TextColor[color]}`;
    const Component = (jsx(As, { ref: ref, ...rest, className: `${className} ${classNames} aria-disabled:text-rus-400 aria-disabled:dark:text-rus-100`, "aria-disabled": disabled, children: children }));
    if (tooltip) {
        return (jsx(UITooltip, { isDisabled: disabled, label: tooltip, children: Component }));
    }
    return Component;
});
UIText.displayName = 'UIText';

export { UIText };
