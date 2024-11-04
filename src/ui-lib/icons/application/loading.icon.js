import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LoadingIcon = forwardRef((props, ref) => {
    const { className = '', ...rest } = props;
    return (jsxs("svg", { ref: ref, ...rest, className: `${className} animate-spin`, width: "1em", height: "1em", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }));
});
LoadingIcon.displayName = 'UILoadingIcon';

export { LoadingIcon };
