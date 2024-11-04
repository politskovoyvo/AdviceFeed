import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { AlertProvider } from './alert-context.js';
import { AlertColor } from './tailwind-variations/color.js';

const UIAlert = forwardRef((props, ref) => {
    const { status, className = '', children, ...rest } = props;
    const classNames = `${className} ${AlertColor[status]} flex gap-2 rounded-lg px-3 py-2 md:px-4 md:py-3 md:gap-3`;
    return (jsx(AlertProvider, { value: { status }, children: jsx("div", { ref: ref, ...rest, className: classNames, children: children }) }));
});
UIAlert.displayName = 'UIAlert';

export { UIAlert };
