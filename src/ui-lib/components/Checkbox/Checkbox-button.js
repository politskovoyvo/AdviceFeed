import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { LargeCheckIcon } from '../../icons/suggested/large-check.icon.js';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { CheckboxButtonSize, CheckboxButtonCheckSize } from './tailwind-variations/sizes.js';
import { CheckboxButtonTheme, CheckboxButtonCheckTheme } from './tailwind-variations/themes.js';
import { useCheckbox } from './use-checkbox.js';

const UICheckboxButton = forwardRef((props, ref) => {
    const { fieldSize = 'medium', id = uniqueId('checkbox-button'), theme = 'default', children, view = 'default', className = '', ...rest } = props;
    const { state, getInputProps } = useCheckbox(rest);
    const labelClassName = `${CheckboxButtonSize[fieldSize]} ${CheckboxButtonTheme[theme]} ${className}`;
    const checkboxClasses = `${CheckboxButtonCheckSize[fieldSize]} ${CheckboxButtonCheckTheme[theme]}`;
    return (jsxs("label", { "aria-checked": state.checked, "aria-disabled": state.disabled, className: `group flex items-center gap-2 px-4 transition-all ${labelClassName}`, htmlFor: id, children: [jsx("input", { id: id, className: 'hidden', ...getInputProps(ref) }), view === 'own' && runIfFn(children, { checked: state.checked }), view === 'default' && (jsxs("div", { className: 'flex w-full items-center justify-between', children: [jsx("span", { "aria-disabled": state.disabled, className: 'text-sm font-normal text-yuri-400 aria-disabled:text-rus-400', children: runIfFn(children, { checked: state.checked, disabled: state.disabled }) }), jsx(LargeCheckIcon, { "aria-checked": state.checked, "aria-disabled": state.disabled, className: `${checkboxClasses} transition-all` })] }))] }));
});
UICheckboxButton.displayName = 'UICheckboxButton';

export { UICheckboxButton };
