import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LoupeIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { cx: "11.0585", cy: "11.0589", r: "7.06194", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M20.0034 20.0033L16.0518 16.0516", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
LoupeIcon.displayName = 'UILoupeIcon';

export { LoupeIcon };
