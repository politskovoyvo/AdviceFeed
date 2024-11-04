import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import './menu-context.js';
import { useMenuOptionGroup } from './use-menu.js';
import './Menu-divider.js';
import { UIMenuGroup } from './Menu-group.js';
import './Menu-item.js';
import './Menu-list.js';
import './Menu-trigger.js';

const UIMenuOptionGroup = forwardRef((props, ref) => {
    const { className = '', title, ...rest } = props;
    const ownProps = useMenuOptionGroup(rest);
    return jsx(UIMenuGroup, { ref: ref, title: title, className: `${className}`, ...ownProps });
});
UIMenuOptionGroup.displayName = 'UIMenuOptionGroup';
