import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExclamationIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M12 12.6879L12 3.56258", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M12.001 19.0718C12.139 19.0718 12.251 19.2762 12.25 19.528C12.25 19.7799 12.138 19.9843 12 19.9843C11.862 19.9843 11.75 19.7799 11.75 19.528C11.75 19.2762 11.862 19.0718 12.001 19.0718", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
ExclamationIcon.displayName = 'UIExclamationIcon';

export { ExclamationIcon };
