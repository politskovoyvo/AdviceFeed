import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useId } from 'react';

const MapPinIcon = forwardRef((props, ref) => {
    const id = useId();
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 17.1402C6 9.32042 12.4065 3 20.1557 3C27.9269 3 34.3333 9.32042 34.3333 17.1402C34.3333 21.0807 32.9283 24.739 30.6158 27.8397C28.0647 31.26 24.9203 34.24 21.3809 36.5791C20.5709 37.1197 19.8398 37.1605 18.9507 36.5791C15.3912 34.24 12.2468 31.26 9.7175 27.8397C7.40331 24.739 6 21.0807 6 17.1402ZM14.667 17.5325C14.667 20.5658 17.1319 22.9515 20.1541 22.9515C23.1784 22.9515 25.667 20.5658 25.667 17.5325C25.667 14.5227 23.1784 12.0209 20.1541 12.0209C17.1319 12.0209 14.667 14.5227 14.667 17.5325Z", fill: `url(#paint0_linear_${id})` }), jsx("defs", { children: jsxs("linearGradient", { id: `paint0_linear_${id}`, x1: "6.70833", y1: "8.66667", x2: "40.0543", y2: "30.6066", gradientUnits: "userSpaceOnUse", children: [jsx("stop", { stopColor: "#943AFD" }), jsx("stop", { offset: "0.702447", stopColor: "#B039EC" })] }) })] }));
});
MapPinIcon.displayName = 'UIMapPinIcon';

export { MapPinIcon };
