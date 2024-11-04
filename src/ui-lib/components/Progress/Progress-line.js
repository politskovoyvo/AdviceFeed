import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UIProgressLine = forwardRef((props, ref) => {
    const { progress = 0, className, classNameFilledTrack } = props;
    return (jsx("div", { ref: ref, className: `${className} relative h-1 w-full bg-walentine-400`, children: jsx("div", { style: { width: `${progress}%` }, className: `${classNameFilledTrack} absolute bottom-0 top-0 h-full rounded-r-lg bg-gradient-to-r from-primary-700 to-primary-700 duration-300 ease-linear` }) }));
});
UIProgressLine.displayName = 'UIProgressLine';

export { UIProgressLine };
