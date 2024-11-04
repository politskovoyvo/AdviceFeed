import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CheckFillIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ...props, ref: ref, width: "1em", height: "1em", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("rect", { width: "28", height: "28", rx: "14", fill: "currentColor" }), jsx("path", { d: "M19.6 10.5L12.6052 17.5L8.39999 13.3017", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
CheckFillIcon.displayName = 'UICheckFillIcon';

export { CheckFillIcon };
