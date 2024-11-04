import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ScanAccept = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.1887 3.74722C9.1887 3.33438 8.8477 3 8.4277 3H8.4267L6.7977 3.00098C4.6067 3.00294 2.8237 4.75331 2.8237 6.90279V8.76201C2.8237 9.17386 3.1647 9.50923 3.5847 9.50923C4.0047 9.50923 4.3467 9.17386 4.3467 8.76201V6.90279C4.3467 5.57604 5.4467 4.4964 6.7987 4.49444L8.4277 4.49345C8.8487 4.49345 9.1887 4.15907 9.1887 3.74722ZM14.7625 6.74266H9.2385C7.9745 6.75541 6.9585 7.76837 6.9695 9.00883V10.2542C6.9725 10.3993 7.0915 10.518 7.2395 10.5229H16.7595C16.9085 10.5189 17.0275 10.4003 17.0325 10.2542V9.00883C17.0335 8.40968 16.7975 7.83407 16.3715 7.40554C15.9485 6.98094 15.3675 6.74266 14.7625 6.74266ZM1.762 12.0412H22.239C22.659 12.0412 23 12.3756 23 12.7885C23 13.2003 22.659 13.5337 22.239 13.5337H21.177V17.0933C21.177 19.2486 19.39 21 17.194 21H15.601C15.18 21 14.839 20.6656 14.839 20.2528C14.839 19.8409 15.18 19.5065 15.601 19.5065H17.194C18.551 19.5065 19.655 18.4249 19.655 17.0933V13.5337H17.032V14.5251C17.042 15.7656 16.027 16.7795 14.762 16.7913H9.238C7.974 16.7795 6.959 15.7656 6.969 14.5251V13.5337H4.346V17.0972C4.346 18.424 5.447 19.5036 6.8 19.5056L8.428 19.5065C8.848 19.5065 9.189 19.8409 9.189 20.2528C9.188 20.6656 8.848 21 8.427 21L6.798 20.999C4.607 20.9971 2.823 19.2467 2.823 17.0972V13.5337H1.762C1.342 13.5337 1 13.2003 1 12.7885C1 12.3756 1.342 12.0412 1.762 12.0412Z", fill: "currentColor" }), jsx("path", { d: "M17.6762 6.31464C17.4829 6.3166 17.2896 6.246 17.1406 6.10283L15.2248 4.25929C14.9278 3.97394 14.9248 3.50913 15.2177 3.21985C15.5117 2.93058 15.9889 2.92763 16.2859 3.21299L17.6651 4.53877L21.0336 1.21844C21.3266 0.929161 21.8048 0.9272 22.1018 1.21256C22.3978 1.49791 22.4008 1.96272 22.1078 2.252L18.2087 6.09597C18.0618 6.2411 17.8695 6.31366 17.6762 6.31464", fill: "currentColor" })] }));
});
ScanAccept.displayName = 'UIScanAccept';

export { ScanAccept };
