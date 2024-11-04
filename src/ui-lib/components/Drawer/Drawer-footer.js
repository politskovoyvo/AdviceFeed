import { jsx } from 'react/jsx-runtime';

const UIDrawerFooter = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles
        ? ''
        : 'mx-4 flex items-center justify-end gap-1.5 border-t border-rus-100 px-0 pt-2.5 md:gap-3 md:pt-5';
    return jsx("footer", { className: `${className} ${fixedClassNames}`, children: children });
};
UIDrawerFooter.displayName = 'UIDrawerFooter';

export { UIDrawerFooter };
