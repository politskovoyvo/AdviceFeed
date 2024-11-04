import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MinusIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M21.3337 15.9998H10.667", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
});
MinusIcon.displayName = 'UIMinusIcon';

export { MinusIcon };
