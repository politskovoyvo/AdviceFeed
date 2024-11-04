import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EmptyIcon = forwardRef((props, ref) => {
    return jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" });
});
EmptyIcon.displayName = 'UICaretDownIcon';

export { EmptyIcon };
