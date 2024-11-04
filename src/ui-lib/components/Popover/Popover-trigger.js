import { Children, cloneElement } from 'react';
import { usePopoverContext } from './Popover-context.js';

function UIPopoverTrigger(props) {
    const child = Children.only(props.children);
    const { getTriggerProps } = usePopoverContext();
    return cloneElement(child, getTriggerProps(child.props, child.ref, props.targetRefName));
}

export { UIPopoverTrigger };
