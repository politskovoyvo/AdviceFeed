import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const RuFlagIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 29 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("rect", { x: "0.927246", y: "0.25", width: "27.5", height: "19.5", rx: "1.75", fill: "white", stroke: "#F5F5F5", strokeWidth: "0.5" }), jsx("mask", { id: "mask0_380_24973", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "29", height: "20", children: jsx("rect", { x: "0.927246", y: "0.25", width: "27.5", height: "19.5", rx: "1.75", fill: "white", stroke: "white", strokeWidth: "0.5" }) }), jsxs("g", { mask: "url(#mask0_380_24973)", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.677246 13.3346H28.6772V6.66797H0.677246V13.3346Z", fill: "#0C47B7" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.677246 19.9987H28.6772V13.332H0.677246V19.9987Z", fill: "#E53B35" })] })] }));
});
RuFlagIcon.displayName = 'UIRuFlagIcon';

export { RuFlagIcon };
