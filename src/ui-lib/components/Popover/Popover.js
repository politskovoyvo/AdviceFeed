import { jsx } from 'react/jsx-runtime';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { PopoverProvider } from './Popover-context.js';
import { usePopover } from './use-popover.js';

const UIPopover = ({ children, ...props }) => {
    const context = usePopover(props);
    return (jsx(PopoverProvider, { value: context, children: runIfFn(children, {
            isOpen: context.isOpen,
            close: context.close,
            forceUpdate: context.forceUpdate
        }) }));
};

export { UIPopover };
