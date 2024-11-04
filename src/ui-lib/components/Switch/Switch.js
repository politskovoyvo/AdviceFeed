import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { SwitchTrackColor } from './tailwind-variations/color.js';
import { SwitchTrackSize, SwitchThumbSize } from './tailwind-variations/size.js';
import { useSwitch } from './use-switch.js';

const UISwitch = forwardRef((props, ref) => {
    const { fieldSize = 'medium', label, className = '', color = 'primary', ...rest } = props;
    const { id, inputProps } = useSwitch(rest, ref);
    const trackClassName = `${SwitchTrackSize[fieldSize]} ${SwitchTrackColor[color]}`;
    const thumbClassName = `${SwitchThumbSize[fieldSize]}`;
    return (jsxs("label", { "aria-disabled": inputProps.disabled, className: `group/label flex w-fit cursor-pointer items-center gap-2 disabled:cursor-not-allowed ${className}`, htmlFor: id, children: [jsx("input", { ...inputProps, className: 'peer/checkbox hidden', id: id, type: "checkbox" }), jsx("div", { className: `${trackClassName} rounded-2xl bg-rus-200 p-0.5 transition-all`, children: jsx("span", { "aria-checked": inputProps.checked, className: `${thumbClassName} relative left-0 block rounded-full bg-walentine-100 transition-all aria-checked:left-full aria-checked:-translate-x-full` }) }), label && jsx("span", { children: label })] }));
});
UISwitch.displayName = 'UISwitch';

export { UISwitch };
