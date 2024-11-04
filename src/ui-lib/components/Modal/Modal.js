import { jsx, jsxs } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { memo, useMemo } from 'react';
import { useSafeZoneClassNames } from '../../utils/methods/use-safe-zone-class-names.js';
import { UIPortal } from '../Portal/Portal.js';
import { ModalComponent } from './Modal-component.js';
import { ModalProvider } from './modal-context.js';
import { ModalOverlay } from './Modal-overlay.js';
import { useModal } from './use-modal.js';

const UIModal = memo((props) => {
    const { afterClose, afterOpen, overlayClassName, noneStyles, className, children, centered, ...rest } = props;
    const ctx = useModal(rest);
    const context = useMemo(() => ctx, [ctx]);
    const safeZone = useSafeZoneClassNames(context.safe);
    return (jsx(ModalProvider, { value: context, children: jsx(UIPortal, { children: jsx(Transition, { show: context.isOpen, appear: true, afterEnter: afterOpen, afterLeave: afterClose, children: jsxs("div", { id: context.id, className: `pointer-events-none fixed z-20 flex justify-center ${safeZone}`, children: [jsx(ModalOverlay, { className: overlayClassName }), jsx(ModalComponent, { noneStyles: noneStyles, className: className, centered: centered, children: children })] }) }) }) }));
});
UIModal.displayName = 'UIModal';

export { UIModal };
