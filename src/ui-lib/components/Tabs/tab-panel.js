import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { useTabPanel } from './use-tabs.js';

const UITabPanel = forwardRef((props, ref) => {
    const { className = '', ...rest } = props;
    const { getPanelProps, getTransitionProps } = useTabPanel(rest);
    return (jsx(Transition, { ...getTransitionProps(), children: jsx("div", { ...getPanelProps({ className: `h-full w-full focus:outline-none focus-visible:outline-none ${className}` }, ref) }) }));
});
UITabPanel.displayName = 'UITabPanel';

export { UITabPanel };
