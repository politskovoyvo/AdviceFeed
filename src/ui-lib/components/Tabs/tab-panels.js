import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useTabPanels } from './use-tabs.js';

const UITabPanels = forwardRef((props, ref) => {
    const { className = '', ...panelsProps } = useTabPanels(props);
    return jsx("div", { ref: ref, className: `flex w-full overflow-x-hidden ${className}`, ...panelsProps });
});
UITabPanels.displayName = 'UITabPanels';

export { UITabPanels };
