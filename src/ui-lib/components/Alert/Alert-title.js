import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UIAlertTitle = forwardRef((props, ref) => {
    const { className = '', children, ...rest } = props;
    const classNames = `${className} text-sm font-semibold text-yuri-400 md:text-base`;
    return (jsx("span", { ref: ref, ...rest, className: classNames, children: children }));
});
UIAlertTitle.displayName = 'UIAlertTitle';

export { UIAlertTitle };
