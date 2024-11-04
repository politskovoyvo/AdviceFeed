import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { TabsContext } from './tabs-context.js';
import { useTabs, TabsDescendantsProvider } from './use-tabs.js';

const UITabs = forwardRef(({ children, ...rest }, ref) => {
    const { htmlProps, descendants, ...ctx } = useTabs(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(TabsDescendantsProvider, { value: descendants, children: jsx(TabsContext.Provider, { value: context, children: jsx("div", { ref: ref, ...htmlProps, children: children }) }) }));
});
UITabs.displayName = 'UITabs';

export { UITabs };
