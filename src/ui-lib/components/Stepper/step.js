import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { StepContext } from './step-context.js';
import { StepIndicator } from './step-indicator.js';
import { stepStatusFontClasses } from './tailwind-variations/status.js';

const Step = forwardRef(({ title, description }, ref) => {
    const { status } = useContext(StepContext);
    return (jsxs("div", { className: 'flex items-center gap-2.5', ref: ref, children: [jsx(StepIndicator, {}), jsxs("div", { className: `hidden flex-col transition-opacity md:flex ${stepStatusFontClasses[status]}`, children: [title && jsx("span", { className: 'text-base font-normal text-yuri-400 ', children: title }), description && jsx("span", { className: 'text-sm font-normal text-rus-400', children: description })] })] }));
});
Step.displayName = 'UIStep';

export { Step };
