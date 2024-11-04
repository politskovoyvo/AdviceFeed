import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UITfoot = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (jsx("tfoot", { ...rest, ref: ref, children: children }));
});
UITfoot.displayName = 'UITfoot';

export { UITfoot };
