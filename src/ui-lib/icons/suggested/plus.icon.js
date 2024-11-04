import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PlusIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M15.9997 10.6668V21.3335", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M21.3337 15.9998H10.667", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
PlusIcon.displayName = 'UIPlusIcon';

export { PlusIcon };
