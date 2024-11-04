import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useTRow } from './use-table.js';

const UITr = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = useTRow(props);
    return (jsx("tr", { ref: ref, ...rest, className: `${className} group-data-[compress=true]:block group-data-[compress=true]:rounded-lg group-data-[compress=true]:bg-walentine-400 group-data-[compress=true]:p-4 dark:group-data-[compress=true]:bg-yuri-100`, children: children }));
});
UITr.displayName = 'UITr';

export { UITr };
