import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ClipboardIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("rect", { width: "12", height: "12", rx: "1", transform: "matrix(-1 0 0 1 14.5 5.5)", fill: "currentColor" }), jsx("path", { d: "M17.5 12.5V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H7.5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
ClipboardIcon.displayName = 'UIClipboardIcon';

export { ClipboardIcon };
