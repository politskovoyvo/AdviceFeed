import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CheckboxCheck = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M9 3L4.00372 8L1 5.00125", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
});
CheckboxCheck.displayName = 'CheckboxCheck';

export { CheckboxCheck };
