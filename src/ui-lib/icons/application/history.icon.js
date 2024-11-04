import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HistoryIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M6.375 12L4.125 14.25L1.875 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M4.12469 12C4.12469 12.694 4.21069 13.366 4.35969 14.015", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M22.125 12C22.125 7.029 18.096 3 13.125 3C8.154 3 4.125 7.029 4.125 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M13.125 21C18.096 21 22.125 16.971 22.125 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5.75391 17.155C7.38091 19.478 10.0729 21 13.1249 21", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M16.4957 14.871L12.8438 12.698V7.98499", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
HistoryIcon.displayName = 'UIHistoryIcon';

export { HistoryIcon };
