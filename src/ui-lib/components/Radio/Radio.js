import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useRadioContext } from './Radio-context.js';
import { RadioSizeBody, RadioSizeDot } from './tailwind-variations/size.js';
import { RadioThemeBody, RadioThemeDot } from './tailwind-variations/theme.js';
import { useRadio } from './use-radio.js';

const UIRadio = forwardRef(({ fieldSize = 'medium', theme = 'primary', children, id = uniqueId('radio'), className = '', ...rest }, ref) => {
    const context = useRadioContext();
    const { checked, disabled, ...htmlProps } = useRadio({ context, ...rest });
    const bodyClasses = `${RadioThemeBody[theme]} ${RadioSizeBody[fieldSize]}`;
    const dotClasses = `${RadioThemeDot[theme]} ${RadioSizeDot[fieldSize]}`;
    return (jsxs("label", { className: `group-label flex w-fit items-center ${className}`, htmlFor: id, children: [jsx("input", { className: 'peer/radio hidden', type: "radio", id: id, ref: ref, checked: checked, disabled: disabled, ...htmlProps }), jsx("div", { className: `${bodyClasses} flex cursor-pointer items-center justify-center overflow-hidden rounded-full border transition-all duration-150 ease-in-out peer-enabled/radio:cursor-pointer peer-enabled/radio:border-rus-300 peer-disabled/radio:cursor-not-allowed peer-disabled/radio:border-rus-100 peer-disabled/radio:bg-walentine-400 peer-disabled/radio:dark:border-rus-100`, children: jsx("span", { "aria-checked": checked, "aria-disabled": disabled, className: `${dotClasses} rounded-full bg-transparent transition-all duration-300 ease-out aria-disabled:bg-rus-100 aria-disabled:dark:bg-rus-100` }) }), children && (jsx("span", { className: 'ml-2 cursor-pointer text-sm font-normal text-yuri-400 peer-enabled/radio:cursor-pointer peer-disabled/radio:cursor-not-allowed dark:text-walentine-100', children: children }))] }));
});
UIRadio.displayName = 'UIRadio';

export { UIRadio };
