import { jsx } from 'react/jsx-runtime';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import '../Drawer/Drawer.js';
import { UIDrawerContent } from '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import '../Drawer/Drawer-footer.js';
import '../Drawer/Drawer-header.js';
import 'react';
import { useMobileDrawerContext } from './mobile-drawer-context.js';

const UIMobileDrawerContent = (props) => {
    const { isDragging, expanded } = useMobileDrawerContext();
    const { noneStyles, children, className = '', ...rest } = props;
    const fixedClassNames = noneStyles ? '' : 'overflow-auto px-4 flex-1';
    return (jsx(UIDrawerContent, { ...rest, className: ` ${fixedClassNames} ${className}`, noneStyles: true, children: runIfFn(children, { isDragging, expanded }) }));
};
UIMobileDrawerContent.displayName = 'UIMobileDrawerContent';

export { UIMobileDrawerContent };
