import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CheckListIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M7.99849 4.99731H5.99766C4.89263 4.99731 3.99683 5.89312 3.99683 6.99815V19.0031C3.99683 20.1082 4.89263 21.004 5.99766 21.004H10.9997", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("rect", { x: "7.99854", y: "2.99634", width: "8.00333", height: "4.00167", rx: "1", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M16.0017 4.99731H18.0025C19.1076 4.99731 20.0034 5.89312 20.0034 6.99815V9.9994", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M17.5024 13.0005C19.9887 13.0005 22.0042 15.016 22.0042 17.5024C22.0042 19.9887 19.9887 22.0042 17.5024 22.0042C15.016 22.0042 13.0005 19.9887 13.0005 17.5024C13.0005 15.016 15.016 13.0005 17.5024 13.0005", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M19.033 16.7146L17.1197 18.6279L15.9695 17.481", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
CheckListIcon.displayName = 'UICheckListIcon';

export { CheckListIcon };
