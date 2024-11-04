import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SendIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M6.90088 20.215L15.6131 18.3084C16.391 18.1384 16.391 17.8616 15.6131 17.6916L6.90088 15.785C6.38194 15.6717 5.87654 15.1182 5.77294 14.5509L4.03041 5.01867C3.87454 4.167 4.33327 3.77129 5.05428 4.13534L31.6399 17.5604C32.1201 17.8029 32.1201 18.1971 31.6399 18.4396L5.05428 31.8647C4.33327 32.2287 3.87454 31.833 4.03041 30.9813L5.77294 21.4491C5.87654 20.8818 6.38194 20.3283 6.90088 20.215Z", fill: "currentColor" }) }));
});
SendIcon.displayName = 'UISendIcon';

export { SendIcon };
