import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PaginationStepDirection = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (jsx("button", { ref: ref, className: 'flex size-10 cursor-pointer items-center justify-center rounded-lg text-i-16 text-yuri-400 transition-background hover:bg-walentine-400 active:bg-walentine-500 disabled:cursor-not-allowed disabled:text-rus-200 disabled:hover:bg-transparent', ...rest, children: children }));
});
PaginationStepDirection.displayName = 'PaginationStepDirection';

export { PaginationStepDirection };
