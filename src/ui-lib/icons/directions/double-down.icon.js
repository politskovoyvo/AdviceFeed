import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DoubleDownIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M8 13L12 17L16 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M8 8L12 12L16 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
DoubleDownIcon.displayName = 'DoubleDownIcon';

export { DoubleDownIcon };
