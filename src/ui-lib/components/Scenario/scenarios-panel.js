import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { useScenarioPanel } from './use-scenarios.js';

const UIScenariosPanel = forwardRef((props, ref) => {
    const { className, selected, transitionDirection, ...rest } = useScenarioPanel({ ...props, ref });
    return (jsx(Transition, { show: selected, children: jsx("div", { ...rest, className: `h-full w-full transition-all duration-150 ${className} ${transitionDirection}` }) }));
});
UIScenariosPanel.displayName = 'UIScenariosPanel';

export { UIScenariosPanel };
