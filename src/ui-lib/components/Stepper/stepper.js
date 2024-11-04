import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, Children } from 'react';
import { UIProgressCircular } from '../Progress/Progress-circular.js';
import '../Progress/Progress-line.js';
import { StepContext, defaultValue } from './step-context.js';
import { StepSeparator } from './step-separator.js';
import { getStatus } from './step-utils.js';

const Stepper = forwardRef(({ statusActive = defaultValue.statusActive, statusIncomplete = defaultValue.statusIncomplete, statusComplete = defaultValue.statusComplete, orientation = defaultValue.orientation, size = defaultValue.fieldSize, index: indexProp, children }, ref) => {
    const stepElements = Children.toArray(children);
    const stepCount = stepElements.length;
    const stepsValues = stepElements.map((step) => step.props);
    return (jsxs("div", { ref: ref, className: 'flex flex-col gap-2', children: [jsx("div", { className: 'hidden items-center justify-between gap-4 md:flex', children: stepElements.map((child, index) => (jsxs(StepContext.Provider, { value: {
                        statusComplete,
                        statusIncomplete,
                        statusActive,
                        orientation,
                        fieldSize: size,
                        index: indexProp,
                        count: stepCount,
                        status: getStatus(index, indexProp),
                        isFirst: index === 0,
                        isLast: index === stepCount - 1
                    }, children: [index > 0 && jsx(StepSeparator, {}), child] }, index))) }), jsxs("div", { className: 'flex items-center text-sm md:hidden', children: [indexProp < stepCount && (jsxs("div", { className: 'flex items-center gap-4 font-medium text-yuri-400', children: [jsx(UIProgressCircular, { progress: indexProp + 1, max: stepCount, className: 'w-13', children: jsx("span", { className: 'block whitespace-nowrap text-2xs', children: indexProp + 1 + ' из ' + stepCount }) }), jsx("span", { className: 'text-xl', children: stepsValues[indexProp].title })] })), indexProp >= stepCount && jsx("span", { className: 'font-normal text-rus-400', children: "\u0412\u0441\u0435 \u0448\u0430\u0433\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B " })] })] }));
});
Stepper.displayName = 'UIStepper';

export { Stepper };
