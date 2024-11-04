import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UIMenuDivider = forwardRef((props, ref) => {
    const { className = '', noneStyles = false, ...rest } = props;
    const classNames = noneStyles ? '' : 'mx-4 my-0.25 h-0.25 bg-walentine-500 dark:bg-yuri-100';
    return jsx("hr", { ref: ref, className: `border-0 ${classNames} ${className}`, ...rest });
});
UIMenuDivider.displayName = 'UIMenuDivider';

export { UIMenuDivider };
