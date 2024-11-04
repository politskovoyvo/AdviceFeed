import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const BackIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M8 5L5 8L8 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5 8H14C17.314 8 20 10.462 20 13.5V13.5C20 16.538 17.314 19 14 19H6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
BackIcon.displayName = 'UIBackIcon';

export { BackIcon };
