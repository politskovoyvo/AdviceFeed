import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TableBodyContext } from './table-context.js';
import { useTBody } from './use-table.js';

const UITbody = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = props;
    const context = useTBody();
    return (jsx(TableBodyContext.Provider, { value: context, children: jsx("tbody", { ...rest, ref: ref, className: `${className} group-data-[compress=true]:flex group-data-[compress=true]:flex-col group-data-[compress=true]:gap-2`, children: (!context.existCustom || !(context.existCustom && context.compress)) && children }) }));
});
UITbody.displayName = 'UITbody';

export { UITbody };
