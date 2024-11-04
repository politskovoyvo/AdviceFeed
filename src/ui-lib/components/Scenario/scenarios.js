import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { ScenarioContext } from './scenario-context.js';
import { useScenariosComponent, ScenarioDescendantsProvider } from './use-scenarios.js';

const UIScenarios = forwardRef(({ children, ...prop }, ref) => {
    const { descendants, htmlProps, ...rest } = useScenariosComponent(prop);
    const context = useMemo(() => rest, [rest]);
    return (jsx(ScenarioDescendantsProvider, { value: descendants, children: jsx(ScenarioContext.Provider, { value: context, children: jsx("div", { ref: ref, ...htmlProps, children: children }) }) }));
});
UIScenarios.displayName = 'UIScenarios';

export { UIScenarios };
