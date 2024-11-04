import { jsx } from 'react/jsx-runtime';
import { DndContext } from '@dnd-kit/core';
import { memo } from 'react';
import { MobileDrawerComponent } from './Mobile-drawer-component.js';
import { useMobileDrawer } from './use-mobile-drawer.js';

const UIMobileDrawer = memo((props) => {
    const { sensors, modifiers, handleDragEnd, handleDragMove, children, ...rest } = useMobileDrawer(props);
    return (jsx(DndContext, { autoScroll: false, sensors: sensors, modifiers: modifiers, onDragMove: handleDragMove, onDragEnd: handleDragEnd, children: jsx(MobileDrawerComponent, { ...rest, children: children }) }));
});
UIMobileDrawer.displayName = 'UIMobileDrawer';

export { UIMobileDrawer };
