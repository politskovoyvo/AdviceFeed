import { jsx } from 'react/jsx-runtime';
import '../Drawer/Drawer.js';
import '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import { UIDrawerFooter } from '../Drawer/Drawer-footer.js';
import '../Drawer/Drawer-header.js';
import 'react';

const UIMobileDrawerFooter = (props) => {
    const { noneStyles, children, className = '', ...rest } = props;
    const fixedClassNames = noneStyles ? '' : 'sticky bottom-0 flex w-full flex-col-reverse gap-2 pt-4 px-4';
    return (jsx(UIDrawerFooter, { ...rest, className: ` ${fixedClassNames} ${className}`, noneStyles: true, children: children }));
};
UIMobileDrawerFooter.displayName = 'UIMobileDrawerFooter';

export { UIMobileDrawerFooter };
