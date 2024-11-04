import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DownloadIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M11.7419 3.56006V14.0864", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M16.2471 10.2758L11.6865 14.3562L7.12598 10.2758", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M3.72266 16.4514C8.12104 20.3868 15.249 20.3868 19.6474 16.4514", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
DownloadIcon.displayName = 'UIDownloadIcon';

export { DownloadIcon };
