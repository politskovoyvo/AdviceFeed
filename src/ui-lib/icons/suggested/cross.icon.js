import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CrossIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: props.width ?? '1em', height: props.height ?? '1em', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
CrossIcon.displayName = 'UICrossIcon';

export { CrossIcon };
