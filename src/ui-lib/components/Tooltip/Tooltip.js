import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo, Children, cloneElement } from 'react';
import { TooltipComponent } from './Tooltip-component.js';
import { TooltipProvider } from './Tooltip-context.js';
import { useTooltip } from './use-tooltip.js';

// #!! Захочешь стрелку то делай как мастер шишу по красоте, тут примерчик https://popper.js.org/docs/v2/modifiers/arrow/
const UITooltip = forwardRef((props, ref) => {
    const { children, className, noneStyles, label, ...rest } = props;
    const { getTriggerProps, ...ctx } = useTooltip(rest);
    const context = useMemo(() => ctx, [ctx]);
    const child = Children.only(children);
    const trigger = cloneElement(child, getTriggerProps(child.props, child.ref));
    return (jsxs(TooltipProvider, { value: context, children: [trigger, jsx(TooltipComponent, { className: className, noneStyles: noneStyles, ref: ref, children: label })] }));
});
UITooltip.displayName = 'UITooltip';

export { UITooltip };
