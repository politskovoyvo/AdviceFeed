import { jsx } from 'react/jsx-runtime';

const UIModalFooter = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles
        ? ''
        : 'flex h-full w-full px-4 items-center justify-end flex-nowrap gap-1.5 pt-2.5 md:gap-3 md:px-8 md:pt-5';
    return jsx("footer", { className: `${className} ${fixedClassNames}`, children: children });
};
UIModalFooter.displayName = 'UIModalFooter';

export { UIModalFooter };
