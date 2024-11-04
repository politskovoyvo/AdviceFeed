import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TableHeadContext } from './table-context.js';
import { useTHead } from './use-table.js';

const UIThead = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = props;
    const context = useTHead();
    return (jsx(TableHeadContext.Provider, { value: context, children: jsx("thead", { ...rest, ref: ref, className: `${className} group-data-[compress=true]:hidden`, children: children }) }));
});
UIThead.displayName = 'UIThead';

export { UIThead };
