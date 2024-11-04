import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { UIMobileDrawer } from '../Mobile-drawer/Mobile-drawer.js';
import { UIMobileDrawerContent } from '../Mobile-drawer/Mobile-drawer-content.js';
import '../Mobile-drawer/mobile-drawer-context.js';
import '../Mobile-drawer/Mobile-drawer-footer.js';
import '../Mobile-drawer/Mobile-drawer-header.js';
import { useMenuContext } from './menu-context.js';
import { useMenuList } from './use-menu.js';

const UIMenuList = forwardRef((props, ref) => {
    const { onOpen, onClose } = useMenuContext();
    const [isMd] = useMediaQuery(MediaScreens.md);
    const { htmlProps, overlayProps, children, show, animation } = useMenuList(props, ref);
    const { className = '', ...rest } = htmlProps;
    return (jsxs(Fragment, { children: [jsx("div", { ...overlayProps, children: jsx(Transition, { show: show && isMd, children: jsx("div", { ...rest, className: `
              flex transform flex-col items-stretch rounded-lg bg-walentine-100 py-1 shadow-md2 shadow-walentine-500 transition duration-150
              data-[enter]:ease-in data-[leave]:ease-out dark:bg-yuri-100 ${htmlProps.className} ${animation}
              `, children: children }) }) }), jsx(UIMobileDrawer, { isOpen: show && !isMd, open: onOpen, close: onClose, children: jsx(UIMobileDrawerContent, { noneStyles: true, children: children }) })] }));
});
UIMenuList.displayName = 'UIMenuList';

export { UIMenuList };
