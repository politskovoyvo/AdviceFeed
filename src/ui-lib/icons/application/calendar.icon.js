import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CalendarIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M20 13.679V12.0988C20 11.4358 20 10.8466 19.9897 10.321H4.01032C4 10.8466 4 11.4358 4 12.0988V13.679C4 16.6588 4 18.1486 4.93726 19.0743C5.87452 20 7.38301 20 10.4 20H13.6C16.617 20 18.1255 20 19.0627 19.0743C20 18.1486 20 16.6588 20 13.679Z", fill: "currentColor" }), jsx("path", { d: "M8.6 4.59259C8.6 4.26531 8.33137 4 8 4C7.66863 4 7.4 4.26531 7.4 4.59259V5.8404C6.24854 5.93147 5.49262 6.15496 4.93726 6.70346C4.3819 7.25197 4.15561 7.99855 4.06341 9.1358H19.9366C19.8444 7.99855 19.6181 7.25197 19.0627 6.70346C18.5074 6.15496 17.7515 5.93147 16.6 5.8404V4.59259C16.6 4.26531 16.3314 4 16 4C15.6686 4 15.4 4.26531 15.4 4.59259V5.78797C14.8678 5.77778 14.2712 5.77778 13.6 5.77778H10.4C9.72877 5.77778 9.13221 5.77778 8.6 5.78797V4.59259Z", fill: "currentColor" })] }));
});
CalendarIcon.displayName = 'UICalendarIcon';

export { CalendarIcon };
