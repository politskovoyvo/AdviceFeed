import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UITh = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = props;
    return (jsx("th", { ...rest, ref: ref, className: `${className} whitespace-nowrap bg-walentine-400 px-5 py-4 dark:bg-yuri-100`, children: children }));
});
UITh.displayName = 'UITh';

export { UITh };
