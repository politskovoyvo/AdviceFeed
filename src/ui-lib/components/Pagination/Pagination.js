import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { PaginationProvider } from './pagination-context.js';
import { usePagination } from './use-pagination.js';

const UIPagination = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    const { htmlProps, ...ctx } = usePagination(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(PaginationProvider, { value: context, children: jsx("section", { ref: ref, ...htmlProps, children: children }) }));
});
UIPagination.displayName = 'UIPagination';

export { UIPagination };
