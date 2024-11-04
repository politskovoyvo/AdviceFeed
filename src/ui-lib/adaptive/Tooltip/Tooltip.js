import { jsx } from 'react/jsx-runtime';
import { forwardRef, Children, cloneElement } from 'react';
import { UITooltip as UITooltip$1 } from '../../components/Tooltip/Tooltip.js';
import { useTooltip } from './use-tooltip.js';

const UITooltip = forwardRef((props, ref) => {
    const { children } = props;
    const { label, getChildrenProps, ...rest } = useTooltip(props);
    const child = Children.only(children);
    const trigger = cloneElement(child, getChildrenProps(child.props));
    return (jsx(UITooltip$1, { ref: ref, label: label, ...rest, children: trigger }));
});
UITooltip.displayName = 'UITooltip';

export { UITooltip };
