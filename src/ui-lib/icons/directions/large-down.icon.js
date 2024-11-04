import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LargeDownIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.8369 10.2445C20.5934 9.95093 20.1658 9.91693 19.8817 10.1685L14 15.3781L8.11828 10.1685C7.83423 9.91693 7.40657 9.95093 7.1631 10.2445C6.91961 10.538 6.95252 10.9799 7.23658 11.2315L13.5591 16.8315C13.8128 17.0562 14.1872 17.0562 14.4408 16.8315L20.7634 11.2315C21.0475 10.9799 21.0804 10.538 20.8369 10.2445Z", fill: "currentColor" }) }));
});
LargeDownIcon.displayName = 'LargeDownIcon';

export { LargeDownIcon };
