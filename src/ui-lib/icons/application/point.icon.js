import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PointIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { cx: "10", cy: "10", r: "6", fill: "white", opacity: "0.44", stroke: "currentColor", strokeWidth: "2" }), jsx("circle", { cx: "10", cy: "10", r: "4", fill: "white", stroke: "currentColor", strokeWidth: "2" })] }));
});
PointIcon.displayName = 'PointIcon';

export { PointIcon };
