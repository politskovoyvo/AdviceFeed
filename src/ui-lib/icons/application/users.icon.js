import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UsersIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { cx: "9.75", cy: "7.5", r: "3", fill: "currentColor" }), jsx("ellipse", { cx: "9.75", cy: "15.7507", rx: "5.25", ry: "3", fill: "currentColor" }), jsx("path", { d: "M18.7494 15.7505C18.7494 16.9932 17.2227 18.0005 15.3587 18.0005C15.9079 17.4003 16.2855 16.6468 16.2855 15.7516C16.2855 14.8553 15.907 14.1011 15.3568 13.5006C17.2208 13.5006 18.7494 14.5079 18.7494 15.7505Z", fill: "currentColor" }), jsx("path", { d: "M16.4994 7.50073C16.4994 8.74337 15.492 9.75073 14.2494 9.75073C13.9784 9.75073 13.7186 9.70283 13.478 9.61504C13.8328 8.99097 14.0355 8.2691 14.0355 7.4999C14.0355 6.73126 13.8331 6.00989 13.4788 5.38613C13.7192 5.29852 13.9787 5.25073 14.2494 5.25073C15.492 5.25073 16.4994 6.25809 16.4994 7.50073Z", fill: "currentColor" })] }));
});
UsersIcon.displayName = 'UIUsersIcon';

export { UsersIcon };
