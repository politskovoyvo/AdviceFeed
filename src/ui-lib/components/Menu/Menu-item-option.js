import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import './menu-context.js';
import { useMenuOption } from './use-menu.js';
import './Menu-divider.js';
import './Menu-group.js';
import { UIMenuItem } from './Menu-item.js';
import './Menu-list.js';
import './Menu-trigger.js';

const UIMenuItemOption = forwardRef((props, ref) => {
    const optionProps = useMenuOption(props, ref);
    return jsx(UIMenuItem, { ...optionProps });
});
UIMenuItemOption.displayName = 'UIMenuItemOption';
