import { jsx, jsxs } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { memo, useMemo } from 'react';
import { useSafeZoneClassNames } from '../../utils/methods/use-safe-zone-class-names.js';
import { UIPortal } from '../Portal/Portal.js';
import { DrawerComponent } from './Drawer-component.js';
import { DrawerProvider } from './drawer-context.js';
import { DrawerOverlay } from './Drawer-overlay.js';
import { useDrawer } from './use-drawer.js';

const UIDrawer = memo((props) => {
    const { afterClose, afterOpen, overlayClassName, noneStyles, className, style, children, position, ...rest } = props;
    const { htmlProps, ...ctx } = useDrawer(rest);
    const context = useMemo(() => ctx, [ctx]);
    const safeZone = useSafeZoneClassNames(context.safe);
    return (jsx(DrawerProvider, { value: context, children: jsx(UIPortal, { children: jsx(Transition, { show: context.isOpen, unmount: true, afterEnter: afterOpen, afterLeave: afterClose, children: jsxs("div", { id: context.id, className: `pointer-events-none fixed z-20 ${safeZone}`, children: [jsx(DrawerOverlay, { className: overlayClassName }), jsx(DrawerComponent, { ...htmlProps, noneStyles: noneStyles, className: className, style: style, position: position, children: children })] }) }) }) }));
});
UIDrawer.displayName = 'UIDrawer';

export { UIDrawer };
