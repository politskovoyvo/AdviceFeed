import { jsx } from 'react/jsx-runtime';
import { createContext } from 'react';
import { StepActive } from './step-active.js';
import { StepComplete } from './step-complete.js';
import { StepInactive } from './step-inactive.js';

const defaultValue = {
    isFirst: false,
    isLast: false,
    count: 0,
    index: 0,
    fieldSize: 'medium',
    orientation: 'horizontal',
    status: 'active',
    statusActive: jsx(StepActive, {}),
    statusComplete: jsx(StepComplete, {}),
    statusIncomplete: jsx(StepInactive, {})
};
const StepContext = createContext(defaultValue);

export { StepContext, defaultValue };
