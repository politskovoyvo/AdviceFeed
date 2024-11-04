import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { RateContext } from './rate-context.js';
import { RateItem } from './Rate-item.js';
import { useRate } from './use-rate.js';

const UIRate = forwardRef((props, ref) => {
    const { count = 5, ...rest } = props;
    const { htmlProps, ...ctx } = useRate(rest);
    const context = useMemo(() => ctx, [ctx]);
    const items = useMemo(() => Array.from(Array(count)).map((c, i) => jsx(RateItem, { value: i + 1 }, i)), [count]);
    return (jsx(RateContext.Provider, { value: context, children: jsx("div", { ...htmlProps, ref: ref, children: items }) }));
});
UIRate.displayName = 'UIRate';

export { UIRate };
