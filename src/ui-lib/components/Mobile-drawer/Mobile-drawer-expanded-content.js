import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { useMobileDrawerContext } from './mobile-drawer-context.js';

const UIMobileDrawerExpandedContent = forwardRef((props, ref) => {
    const { children } = props;
    const { expanded, isDragging } = useMobileDrawerContext();
    return (jsx(Transition, { ref: ref, show: expanded || isDragging, children: children }));
});
UIMobileDrawerExpandedContent.displayName = 'UIMobileDrawerExpandedContent';

export { UIMobileDrawerExpandedContent };
