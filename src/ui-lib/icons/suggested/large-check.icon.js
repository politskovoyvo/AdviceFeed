import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LargeCheckIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ...props, ref: ref, width: "1em", height: "1em", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M20.3545 6.5L9.35449 17.5L4.35449 12.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
});
LargeCheckIcon.displayName = 'UILargeCheckIcon';

export { LargeCheckIcon };
