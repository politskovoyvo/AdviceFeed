import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import { StepContext } from './step-context.js';
import { stepSizeClasses } from './tailwind-variations/size.js';
import { stepStatusClasses } from './tailwind-variations/status.js';

const StepIndicator = () => {
    const { fieldSize, status, statusActive, statusComplete, statusIncomplete } = useContext(StepContext);
    const classes = `${stepSizeClasses[fieldSize]} ${stepStatusClasses[status]}`;
    let render = null;
    switch (status) {
        case 'active':
            render = statusActive;
            break;
        case 'complete':
            render = statusComplete;
            break;
        case 'incomplete':
            render = statusIncomplete;
            break;
    }
    return jsx("div", { className: `flex items-center justify-center rounded-full border transition-all ${classes}`, children: render });
};

export { StepIndicator };
