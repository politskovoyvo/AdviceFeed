import { jsx, jsxs } from 'react/jsx-runtime';
import { TransitionChild } from '@headlessui/react';
import { CrossIcon } from '../../icons/suggested/cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { useDrawerContext } from './drawer-context.js';
import { drawerPosition, drawerTransition } from './tailwind-variations/drawer-transition.js';

const DrawerComponent = (props) => {
    const { handleClose, refDrawer, closable } = useDrawerContext();
    const { children, noneStyles = false, position = 'right', style } = props;
    let { className = '' } = props;
    className += noneStyles ? '' : ' py-3 md:py-6 border-walentine-500 overflow-hidden';
    return (jsx(TransitionChild, { children: jsxs("section", { ref: refDrawer, "aria-modal": "true", role: "dialog", style: style, className: `
          ${className} ${drawerPosition[position]} ${drawerTransition[position]}
          pointer-events-auto absolute flex flex-col border bg-walentine-100 transition-all duration-150
          data-[enter]:ease-in data-[leave]:ease-out dark:bg-yuri-100
          `, children: [closable && (jsx("div", { className: 'absolute right-0 top-0 z-10', children: jsx(UIButton, { onClick: handleClose, className: 'group/button flex h-14 w-14 items-center justify-center text-i-24 text-rus-400 md:h-18 md:w-18', theme: 'empty', children: jsx(CrossIcon, { className: 'rounded transition-background group-hover/button:bg-walentine-300 group-active/button:bg-walentine-500' }) }) })), children] }) }));
};

export { DrawerComponent };
