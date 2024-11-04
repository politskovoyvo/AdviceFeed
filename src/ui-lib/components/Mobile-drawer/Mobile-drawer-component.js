import { jsx, jsxs } from 'react/jsx-runtime';
import { memo } from 'react';
import { UIDrawer } from '../Drawer/Drawer.js';
import '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import '../Drawer/Drawer-footer.js';
import '../Drawer/Drawer-header.js';
import { MobileDrawerProvider } from './mobile-drawer-context.js';
import { MobileDrawerHandle } from './Mobile-drawer-handle.js';
import { useMobileDrawerComponent } from './use-mobile-drawer.js';

const MobileDrawerComponent = memo((props) => {
    const { children, className = '', noneStyles = false, ...rest } = props;
    const { draggable, expanded, isDragging, setNodeRef, containerRef, observingContainerRef, drawerProps, attributes, listeners } = useMobileDrawerComponent(rest);
    const fixedClassNames = noneStyles ? '' : 'rounded-t-2xl border-transparent pb-4 pt-6';
    return (jsx(MobileDrawerProvider, { value: { expanded, isDragging }, children: jsxs(UIDrawer, { ...drawerProps, className: `transform-gpu overflow-hidden ${fixedClassNames} ${className}`, noneStyles: true, position: 'bottom', children: [draggable && (jsx(MobileDrawerHandle, { ref: setNodeRef, ...attributes, ...listeners, style: { cursor: isDragging ? 'grabbing' : 'grab' } })), jsx("div", { className: 'overflow-auto', ref: containerRef, children: jsx("div", { ref: observingContainerRef, children: children }) })] }) }));
});
MobileDrawerComponent.displayName = 'MobileDrawerComponent';

export { MobileDrawerComponent };
