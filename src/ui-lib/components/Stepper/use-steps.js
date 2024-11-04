import { useState } from 'react';
import { getStatus } from './step-utils.js';

function useSteps({ index = 0, count }) {
    const [activeStep, setActiveStep] = useState(index);
    const maxStep = typeof count === 'number' ? count - 1 : 0;
    const activePercent = activeStep / maxStep;
    return {
        activeStep,
        setActiveStep,
        activePercent,
        isActiveStep(step) {
            return step === activeStep;
        },
        isCompleteStep(step) {
            return step < activeStep;
        },
        isIncompleteStep(step) {
            return step > activeStep;
        },
        getStatus(step) {
            return getStatus(step, activeStep);
        },
        next() {
            setActiveStep((step) => {
                return typeof count === 'number' ? Math.min(count, step + 1) : step + 1;
            });
        },
        previous() {
            setActiveStep((step) => {
                return Math.max(0, step - 1);
            });
        }
    };
}

export { useSteps };
