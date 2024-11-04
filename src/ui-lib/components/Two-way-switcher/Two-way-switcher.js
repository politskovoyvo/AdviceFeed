import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { SwitchTrackSize, SwitchThumbSize } from '../Switch/tailwind-variations/size.js';
import { SwitchTrackColor } from './tailwind-variations/color.js';
import { useTwoWaySwitcher } from './use-two-way-switcher.js';

const UITwoWaySwitcher = forwardRef((props, ref) => {
    const { className = '', fieldSize = 'medium', color = 'primary', ...rest } = props;
    const { firstWay, secondWay, inputProps, getTrackProps } = useTwoWaySwitcher(rest);
    const trackStyleClassName = `${SwitchTrackSize[fieldSize]} ${SwitchTrackColor[color]}`;
    const thumbClassName = `${SwitchThumbSize[fieldSize]}`;
    const trackClassName = `${trackStyleClassName} group/label relative flex h-fit rounded-2xl p-0.5 ring ring-transparent ring-offset-0 transition-all aria-disabled:bg-rus-200 aria-disabled:cursor-not-allowed focus-within:ring-primary-400`;
    return (jsxs("div", { ref: ref, className: `${className} flex space-x-5`, children: [firstWay, jsxs("label", { ...getTrackProps({ className: trackClassName }), children: [jsx("input", { ...inputProps, className: 'peer/checkbox absolute left-0 top-0 h-px w-px overflow-hidden outline-0', type: "checkbox" }), jsx("span", { className: `${thumbClassName} relative left-0 block rounded-full bg-walentine-100 transition-all peer-checked/checkbox:left-full peer-checked/checkbox:-translate-x-full group-aria-disabled/label:bg-walentine-200` })] }), secondWay] }));
});
UITwoWaySwitcher.displayName = 'UITwoWaySwitcher';

export { UITwoWaySwitcher };
