import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { TableContext } from './table-context.js';
import { useTable } from './use-table.js';

const UITable = forwardRef((props, refProp) => {
    const { children, wrapClassName = '', className = '', ...rest } = props;
    const { tableRef, ref, ...ctx } = useTable(props, refProp);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(TableContext.Provider, { value: context, children: jsx("div", { ref: ref, "data-compress": context.compress, className: `${wrapClassName} max-w-full data-[compress=false]:overflow-x-auto data-[compress=false]:rounded-xl`, children: jsx("table", { ...rest, ref: tableRef, "data-compress": context.compress, className: `${className} group overflow-hidden text-yuri-400 data-[compress=false]:border-separate data-[compress=false]:border-spacing-0 data-[compress=false]:rounded-xl data-[compress=false]:border data-[compress=false]:border-walentine-400 dark:text-walentine-100 dark:data-[compress=false]:border-yuri-100`, children: children }) }) }));
});
UITable.displayName = 'UITable';

export { UITable };
