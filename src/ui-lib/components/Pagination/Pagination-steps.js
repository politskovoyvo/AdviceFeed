import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { DownIcon } from '../../icons/directions/down.icon.js';
import { PaginationStep } from './Pagination-step.js';
import { PaginationStepDirection } from './Pagination-step-direction.js';
import { usePaginationSteps } from './use-pagination.js';

const UIPaginationSteps = forwardRef((props, ref) => {
    const { disableState, disabled, decrease, increase, chooseStep, step, stepsView, htmlProps } = usePaginationSteps(props);
    const { className = '', ...rest } = htmlProps;
    return (jsxs("div", { ref: ref, className: `flex items-center ${className}`, ...rest, children: [jsx(PaginationStepDirection, { onClick: decrease, disabled: disabled || disableState.decrease, children: jsx(DownIcon, { className: 'rotate-90' }) }), stepsView.map((s) => (jsx(PaginationStep, { "aria-selected": s === step, onClick: () => chooseStep(s), children: s }, s))), jsx(PaginationStepDirection, { onClick: increase, disabled: disabled || disableState.increase, children: jsx(DownIcon, { className: '-rotate-90' }) })] }));
});
UIPaginationSteps.displayName = 'UIPaginationSteps';

export { UIPaginationSteps };
