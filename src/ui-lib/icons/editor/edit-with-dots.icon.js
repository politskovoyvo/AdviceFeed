import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EditWithDotsIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.6736 9.47085L12.4173 8.72718C13.1474 7.99704 13.1474 6.81326 12.4173 6.08312C11.6872 5.35299 10.5034 5.35299 9.77325 6.08312L9.01323 6.84314C9.61254 7.96214 10.5384 8.881 11.6736 9.47085ZM7.55165 8.30473L3.35847 12.4979C2.93341 12.923 2.72088 13.1355 2.58115 13.3966C2.44141 13.6577 2.38247 13.9524 2.26458 14.5419L1.98817 15.9239C1.92165 16.2565 1.88839 16.4228 1.98299 16.5174C2.0776 16.612 2.24391 16.5788 2.57652 16.5123L3.95857 16.2359C4.54802 16.118 4.84275 16.059 5.10384 15.9193C5.36494 15.7795 5.57747 15.567 6.00253 15.142L10.2078 10.9367C9.13176 10.2704 8.22414 9.36865 7.55165 8.30473Z", fill: "currentColor" }), jsx("circle", { cx: "10.9", cy: "15.9", r: "0.9", fill: "currentColor" }), jsx("circle", { cx: "13.7", cy: "15.9", r: "0.9", fill: "currentColor" }), jsx("circle", { cx: "16.5001", cy: "15.9", r: "0.9", fill: "currentColor" })] }));
});
EditWithDotsIcon.displayName = 'EditWithDotsIcon';

export { EditWithDotsIcon };
