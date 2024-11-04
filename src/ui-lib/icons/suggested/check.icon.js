import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CheckIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M14.5 7.5L9.50372 12.5L6.5 9.50125", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
});
CheckIcon.displayName = 'UICheckIcon';

export { CheckIcon };
