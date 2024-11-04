import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Stepper/step.js';
import { Stepper } from '../Stepper/stepper.js';
import { useScenariosStepper } from './use-scenarios.js';

const UIScenariosStepper = forwardRef(({ children, className = '', ...rest }, ref) => {
    const { selectedIndex, ...props } = useScenariosStepper();
    return (jsx("div", { ref: ref, ...props, className: `w-full md:w-fit ${className}`, children: jsx(Stepper, { index: selectedIndex, children: children }) }));
});
UIScenariosStepper.displayName = 'UIScenariosStepper';

export { UIScenariosStepper };
