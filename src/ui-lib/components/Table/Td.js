import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UITd = forwardRef((props, ref) => {
    const { children, className = '', ...rest } = props;
    return (jsx("td", { ref: ref, ...rest, className: `${className} justify-between whitespace-nowrap before:font-medium group-data-[compress=true]:flex group-data-[compress=false]:px-5 group-data-[compress=false]:py-4 group-data-[compress=true]:before:ml-0.5 group-data-[compress=true]:before:mr-2 group-data-[compress=true]:before:content-[attr(data-label)]`, children: children }));
});
UITd.displayName = 'UITd';

export { UITd };
