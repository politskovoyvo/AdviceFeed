import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useRadioContext } from './Radio-context.js';
import { RadioButtonSize, RadioLabelSize } from './tailwind-variations/size.js';
import { RadioButtonTheme } from './tailwind-variations/theme.js';
import { useRadio } from './use-radio.js';

const UIRadioButton = forwardRef(({ fieldSize = 'medium', theme = 'primary', children, id = uniqueId('radio'), className = '', ...rest }, ref) => {
    const context = useRadioContext();
    const { checked, disabled, ...htmlProps } = useRadio({ context, ...rest });
    const labelClassNames = `${RadioButtonSize[fieldSize]} ${RadioButtonTheme[theme]} ${className}`;
    const childrenClassNames = `${RadioLabelSize[fieldSize]}`;
    return (jsxs("label", { "aria-checked": checked, "aria-disabled": disabled, className: `group-label flex w-full items-center px-4 text-center transition-all ${labelClassNames}`, htmlFor: id, children: [jsx("input", { className: 'peer/radio hidden', type: "radio", id: id, ref: ref, checked: checked, disabled: disabled, ...htmlProps }), jsx("span", { "aria-disabled": disabled, className: `${childrenClassNames} w-full text-yuri-400 aria-disabled:text-rus-400 dark:text-walentine-100`, children: children })] }));
});
UIRadioButton.displayName = 'UIRadioButton';

export { UIRadioButton };
