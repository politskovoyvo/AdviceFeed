import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { InputAppendix } from './input-appendix.js';
import { InputColorsInput, InputColorsLabel } from './tailwind-variations/colors.js';
import { InputSizesInput, InputSizesLabelPadding, InputSizesLabel } from './tailwind-variations/sizes.js';

const UIInput = forwardRef((props, ref) => {
    const { className = '', inputClassName = '', labelClassName = '', theme = 'default', fieldSize = 'medium', fieldPrefix, fieldPostfix, loadingProgress, errors, disabled, invalid, labelRef, id = uniqueId('input'), ...rest } = props;
    const { fieldValidation } = useConfigContext();
    const validation = errors ? fieldValidation?.(errors, props) : undefined;
    let position;
    switch (true) {
        case !!fieldPrefix && !!fieldPostfix:
            position = 'both';
            break;
        case !!fieldPrefix:
            position = 'left';
            break;
        case !!fieldPostfix:
            position = 'right';
            break;
        default:
            position = 'default';
    }
    const labelClasses = `${InputSizesLabel[fieldSize]} ${InputColorsLabel[theme]}`;
    const inputClasses = `${InputSizesInput[fieldSize]} ${InputColorsInput[theme]} ${InputSizesLabelPadding[fieldSize][position]}`;
    return (jsxs("div", { className: className, children: [jsxs("label", { ref: labelRef, htmlFor: id, className: `peer relative box-border flex cursor-text items-center overflow-hidden rounded transition has-[:disabled]:cursor-not-allowed has-[[aria-invalid="true"]]:border-red-500 focus-within:has-[[aria-invalid="true"]]:border-red-500 ${labelClassName} ${labelClasses}`, children: [!!fieldPrefix && jsx(InputAppendix, { position: 'left', fieldSize: fieldSize, theme: theme, content: fieldPrefix, disabled: disabled }), jsx("input", { id: id, ref: ref, "aria-invalid": invalid || validation?.invalid, disabled: disabled, className: `w-full bg-transparent focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed ${inputClasses} ${inputClassName}`, ...rest }), !!fieldPostfix && (jsx(InputAppendix, { position: 'right', fieldSize: fieldSize, theme: theme, content: fieldPostfix, disabled: disabled })), jsx("div", { style: { width: `${loadingProgress ?? 0}%` }, className: 'absolute bottom-0 left-0 h-0.5 bg-primary-500 shadow-purpleUp duration-150 ease-in dark:bg-primary-500' })] }), validation?.message && (jsx("p", { className: 'mt-1 hidden text-xs text-red-500 peer-has-[[aria-invalid="true"]]:block', children: validation?.message }))] }));
});
UIInput.displayName = 'UIInput';

export { UIInput };
