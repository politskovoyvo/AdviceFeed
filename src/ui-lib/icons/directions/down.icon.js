import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DownIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M8.67725 10L12.6772 14L16.6772 10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
});
DownIcon.displayName = 'UIDownIcon';

export { DownIcon };
