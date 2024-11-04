import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MobileDrawerHandle = forwardRef((props, ref) => {
    return (jsx("div", { ref: ref, ...props, className: 'group absolute left-0 right-0 top-0 z-1 flex h-16 justify-center pt-3 outline-0', children: jsx("div", { className: 'pointer-events-none h-1 w-16 rounded-lg bg-rus-100 transition-background group-aria-pressed:bg-walentine-500 dark:bg-yuri-300 dark:group-aria-pressed:bg-yuri-200' }) }));
});
MobileDrawerHandle.displayName = 'MobileDrawerHandle';

export { MobileDrawerHandle };
