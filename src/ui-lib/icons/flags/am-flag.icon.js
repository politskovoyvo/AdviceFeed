import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AmFlagIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 29 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("rect", { x: "0.354492", width: "28", height: "20", rx: "2", fill: "white" }), jsx("mask", { id: "mask0_380_24580", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "29", height: "20", children: jsx("rect", { x: "0.354492", width: "28", height: "20", rx: "2", fill: "white" }) }), jsxs("g", { mask: "url(#mask0_380_24580)", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.354492 13.3346H28.3545V6.66797H0.354492V13.3346Z", fill: "#1047B9" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.354492 6.66667H28.3545V0H0.354492V6.66667Z", fill: "#F01C31" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.354492 19.9987H28.3545V13.332H0.354492V19.9987Z", fill: "#FECB2F" })] })] }));
});
AmFlagIcon.displayName = 'UIAmFlagIcon';

export { AmFlagIcon };
