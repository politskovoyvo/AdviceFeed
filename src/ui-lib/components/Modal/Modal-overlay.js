import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';
import { useSafeZoneClassNames } from '../../utils/methods/use-safe-zone-class-names.js';
import { useModalContext } from './modal-context.js';

const ModalOverlay = forwardRef((props, ref) => {
    const { modal = {} } = useConfigContext();
    const { overlayClassName } = modal;
    const { className = overlayClassName } = props;
    const { isOpen, overlayClosable, overlayExist, handleClose, safe } = useModalContext();
    const safeZone = useSafeZoneClassNames(safe);
    const handleClick = () => {
        if (overlayClosable) {
            handleClose();
        }
    };
    return (jsx(Transition, { appear: true, show: isOpen && overlayExist, children: jsx("div", { className: `
      ${safeZone} ${className ?? 'bg-yuri-1000/50'} 
      ease-linery pointer-events-auto fixed bottom-0 opacity-100 transition-opacity duration-150 data-[closed]:opacity-0
      `, onClick: handleClick, ref: ref }) }));
});
ModalOverlay.displayName = 'ModalOverlay';

export { ModalOverlay };
