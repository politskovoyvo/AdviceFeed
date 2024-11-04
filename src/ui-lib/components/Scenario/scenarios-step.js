import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Step } from '../Stepper/step.js';
import '../Stepper/stepper.js';
import { useScenarioStep } from './use-scenarios.js';

const UIScenariosStep = forwardRef(({ ...rest }, ref) => {
    const { panelIndex, ...props } = useScenarioStep({ ref });
    return (jsx("div", { ...props, children: jsx(Step, { ...rest }) }));
});
UIScenariosStep.displayName = 'UIScenariosStep';

export { UIScenariosStep };
