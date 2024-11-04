import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { MinusIcon } from '../../icons/suggested/minus.icon.js';
import { PlusIcon } from '../../icons/suggested/plus.icon.js';
import { buttonSize } from './tailwind-variations/sizes.js';
import { useCounter } from './use-counter.js';

const UICounter = forwardRef((props, ref) => {
    const { className = '', fieldSize = 'large', ...rest } = props;
    const buttonClasses = `${buttonSize[fieldSize]} flex items-center justify-center rounded-full border border-rus-100 bg-walentine-100 text-yuri-400 transition-all hover:bg-walentine-400 active:bg-walentine-200 disabled:cursor-not-allowed disabled:bg-walentine-400 disabled:text-rus-100 dark:border-rus-100 dark:disabled:border-yuri-200 dark:bg-yuri-400 dark:enabled:hover:border-primary-700 dark:text-walentine-200 dark:disabled:text-rus-300`;
    const { inputProps, disabledState, increase, decrease } = useCounter(rest);
    return (jsxs("div", { className: `flex items-center ${className}`, ref: ref, children: [jsx("button", { className: buttonClasses, disabled: disabledState.current.decrease, onClick: decrease, type: "button", children: jsx(MinusIcon, {}) }), jsx("input", { className: "h-full w-14 bg-transparent text-center text-yuri-400 outline-0 disabled:border-0 disabled:bg-transparent aria-invalid:text-red-500 dark:text-walentine-100", ...inputProps }), jsx("button", { className: buttonClasses, disabled: disabledState.current.increase, onClick: increase, type: "button", children: jsx(PlusIcon, {}) })] }));
});
UICounter.displayName = 'UICounter';

export { UICounter };
