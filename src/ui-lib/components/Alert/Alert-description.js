import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UIAlertDescription = forwardRef((props, ref) => {
    const { className = '', children, ...rest } = props;
    const classNames = `${className} text-sm text-yuri-400 md:text-base`;
    return (jsx("span", { ref: ref, ...rest, className: classNames, children: children }));
});
UIAlertDescription.displayName = 'UIAlertDescription';

export { UIAlertDescription };
