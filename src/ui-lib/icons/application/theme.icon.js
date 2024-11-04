import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ThemeIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, className: "sun-and-moon", "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 24 24", children: [jsxs("mask", { className: "moon", id: "moon-mask", children: [jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "white" }), jsx("circle", { cx: "24", cy: "10", r: "6", fill: "black" })] }), jsx("circle", { className: "sun", cx: "12", cy: "12", r: "6", mask: "url(#moon-mask)", fill: "currentColor" }), jsxs("g", { className: "sun-beams", stroke: "currentColor", children: [jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })] })] }));
});
ThemeIcon.displayName = 'UIThemeIcon';

export { ThemeIcon };
