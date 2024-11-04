import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { MinusIcon } from '../../icons/suggested/minus.icon.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { CheckboxCheck } from './checkbox-check.js';
import { CheckboxShape } from './tailwind-variations/shape.js';
import { CheckboxSize, CheckboxLabelSize } from './tailwind-variations/sizes.js';
import { CheckboxTheme, CheckboxLabelTheme } from './tailwind-variations/themes.js';

const UICheckbox = forwardRef((props, ref) => {
    const { children, label, className, theme = 'primary', shape = 'square', fieldSize = 'medium', indeterminate, ...rest } = props;
    const id = uniqueId('checkbox');
    const checkboxClasses = `${CheckboxSize[fieldSize]} ${CheckboxShape[shape]} ${CheckboxTheme[theme]}`;
    const labelClasses = `${CheckboxLabelSize[fieldSize]} ${CheckboxLabelTheme[theme]}`;
    return (jsxs("label", { className: `group/checkbox flex w-fit items-center gap-2 ${className}`, htmlFor: id, children: [jsx("input", { "aria-checked": indeterminate ? 'mixed' : undefined, className: 'peer/checkbox hidden', id: id, type: "checkbox", ref: ref, ...rest }), jsxs("div", { className: `flex items-center shrink-0 justify-center transition-all duration-150 ease-linear peer-enabled/checkbox:cursor-pointer peer-disabled/checkbox:cursor-not-allowed ${checkboxClasses}`, children: [indeterminate && jsx(MinusIcon, { className: 'ease-[cubic-bezier(0.46, 0.31, 0.9, 0.19)] text-i-18 transition-all duration-300' }), !indeterminate && jsx(CheckboxCheck, { className: 'ease-[cubic-bezier(0.46, 0.31, 0.9, 0.19)] transition-all duration-300' })] }), jsx("span", { className: `peer-enabled/checkbox:cursor-pointer peer-disabled/checkbox:cursor-not-allowed ${labelClasses}`, children: children || label })] }));
});
UICheckbox.displayName = 'UICheckbox';

export { UICheckbox };
