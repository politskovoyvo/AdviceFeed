import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExclamationCircleFillIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C18.628 0 24 5.372 24 12C24 18.628 18.628 24 12 24C5.372 24 0 18.628 0 12C0 5.372 5.372 0 12 0Z", fill: "currentColor" }), jsx("path", { d: "M12 12.3586V7.55859", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M11.999 15.7166C11.861 15.7166 11.749 15.8241 11.75 15.9566C11.75 16.089 11.862 16.1966 12 16.1966C12.138 16.1966 12.25 16.089 12.25 15.9566C12.25 15.8241 12.138 15.7166 11.999 15.7166", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
ExclamationCircleFillIcon.displayName = 'UIExclamationCircleFillIcon';

export { ExclamationCircleFillIcon };
