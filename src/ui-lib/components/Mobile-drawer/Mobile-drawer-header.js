import { jsx } from 'react/jsx-runtime';
import '../Drawer/Drawer.js';
import '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import '../Drawer/Drawer-footer.js';
import { UIDrawerHeader } from '../Drawer/Drawer-header.js';
import 'react';

const UIMobileDrawerHeader = (props) => {
    const { noneStyles, children, className = '', ...rest } = props;
    const fixedClassNames = noneStyles
        ? ''
        : 'sticky top-0 pb-3 bg-walentine-100 pr-8 pl-4 text-xl font-semibold text-yuri-400 dark:bg-yuri-100 dark:text-walentine-100';
    return (jsx(UIDrawerHeader, { ...rest, className: `${fixedClassNames} ${className}`, noneStyles: true, children: children }));
};
UIMobileDrawerHeader.displayName = 'UIMobileDrawerHeader';

export { UIMobileDrawerHeader };
