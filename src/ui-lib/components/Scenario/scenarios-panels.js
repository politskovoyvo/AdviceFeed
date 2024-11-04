import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { useScenarioPanels } from './use-scenarios.js';

const UIScenariosPanels = forwardRef(({ children, className = '', ...rest }, ref) => {
    const panelProps = useScenarioPanels({ children, ...rest });
    return jsx("div", { className: `flex w-full overflow-x-hidden ${className}`, ref: ref, ...panelProps });
});
UIScenariosPanels.displayName = 'UIScenariosPanels';

export { UIScenariosPanels };
