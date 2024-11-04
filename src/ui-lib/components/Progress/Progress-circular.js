import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';

const UIProgressCircular = forwardRef((props, ref) => {
    const { children, progress, max = 100, className = '', classNameLabel = '', colorTrack = '#F4F4F4', colorFilledTrack = '#8F46DB', trackWidth = 1.5, hasProgressNumber = false } = props;
    const size = 20; // viewbox
    const halfSize = size / 2;
    const [circularState, setCircularState] = useState({ radius: 0, circumference: 0 });
    const [dashoffset, setDashOffset] = useState(0);
    useEffect(() => {
        const radius = halfSize - Math.ceil(trackWidth / 2);
        const circumference = 2 * Math.PI * radius;
        setCircularState({ circumference, radius });
    }, []);
    useEffect(() => {
        setDashOffset(circularState.circumference * (1 - progress / max));
    }, [progress, circularState]);
    return (jsxs("div", { ref: ref, className: `relative rounded-full text-base text-yuri-400 ${className}`, children: [jsxs("svg", { className: 'h-full w-full rotate-90', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { strokeWidth: trackWidth, stroke: colorTrack, cx: "10", cy: "10", r: circularState.radius }), jsx("circle", { className: 'duration-300', strokeLinecap: "round", stroke: colorFilledTrack, strokeWidth: trackWidth, cx: "10", cy: "10", r: circularState.radius, strokeDasharray: circularState.circumference, strokeDashoffset: dashoffset })] }), (hasProgressNumber || children) && (jsx("span", { className: `${classNameLabel} absolute left-1/2 top-1/2 block -translate-x-2/4 -translate-y-1/2`, children: children ? children : `${progress}%` }))] }));
});
UIProgressCircular.displayName = 'UIProgressCircular';

export { UIProgressCircular };
