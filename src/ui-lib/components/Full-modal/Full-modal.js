import { jsx, jsxs } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { memo, useMemo } from 'react';
import { UIPortal } from '../Portal/Portal.js';
import { FullModalComponent } from './Full-modal-component.js';
import { FullModalProvider } from './full-modal-context.js';
import { FullModalOverlay } from './Full-modal-overlay.js';
import { useFullModal } from './use-full-modal.js';

const UIFullModal = memo((props) => {
    const { children, className, overlayClassName, afterClose, afterOpen, noneStyles, ...rest } = props;
    const ctx = useFullModal(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(FullModalProvider, { value: context, children: jsx(UIPortal, { children: jsx(Transition, { show: context.isOpen, appear: true, afterEnter: afterOpen, afterLeave: afterClose, children: jsxs("div", { id: context.id, className: 'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center', children: [jsx(FullModalOverlay, { className: overlayClassName }), jsx(FullModalComponent, { className: className, noneStyles: noneStyles, children: children })] }) }) }) }));
});
UIFullModal.displayName = 'UIFullModal';

export { UIFullModal };
