import { jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';
import { useSafeZoneClassNames } from '../../utils/methods/use-safe-zone-class-names.js';
import { useDrawerContext } from './drawer-context.js';

const DrawerOverlay = forwardRef((props, ref) => {
    const { drawer = {} } = useConfigContext();
    const { overlayClassName } = drawer;
    const { className = overlayClassName } = props;
    const { isOpen, overlayClosable, overlayExist, handleClose, safe } = useDrawerContext();
    const safeZone = useSafeZoneClassNames(safe);
    const handleClick = () => {
        if (overlayClosable) {
            handleClose();
        }
    };
    return (jsx(Transition, { appear: true, show: isOpen && overlayExist, children: jsx("div", { ref: ref, className: `ease-linery pointer-events-auto fixed opacity-100 transition-opacity duration-150 data-[closed]:opacity-0
          ${safeZone} ${className ?? 'bg-yuri-1000/50'}
          `, onClick: handleClick }) }));
});
DrawerOverlay.displayName = 'DrawerOverlay';

export { DrawerOverlay };
