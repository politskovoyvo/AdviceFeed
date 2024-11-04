import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UILoadingDotsIcon = forwardRef((props, ref) => {
    const { className = '' } = props;
    const mainStyles = 'relative inline-block h-4 w-4 animate-[loader_2s_ease-in-out_infinite_-160ms] rounded-full text-yuri-1000';
    const afterStyles = 'after:content-[""] ' +
        'after:absolute ' +
        'after:h-4 ' +
        'after:w-4 ' +
        'after:top-0 ' +
        'after:left-6 ' +
        'after:animate-[loader_2s_ease-in-out_infinite] ' +
        'after:rounded-full';
    const beforeStyles = 'before:content-[""] ' +
        'before:absolute ' +
        'before:h-4 ' +
        'before:w-4 ' +
        'before:top-0 ' +
        'before:-left-6 ' +
        'before:animate-[loader_2s_ease-in-out_infinite_-320ms] ' +
        'before:rounded-full';
    return (jsx("div", { className: 'flex w-16 items-center justify-center', children: jsx("div", { ref: ref, className: `${mainStyles} ${afterStyles} ${beforeStyles} ${className}` }) }));
});
UILoadingDotsIcon.displayName = 'UILoadingDotsIcon';

export { UILoadingDotsIcon };
