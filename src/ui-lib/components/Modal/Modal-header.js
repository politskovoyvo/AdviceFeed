import { jsx } from 'react/jsx-runtime';

const UIModalHeader = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles
        ? ''
        : 'sticky top-0 mb-2 bg-walentine-100 pr-12 pl-4 text-lg font-bold text-yuri-400 dark:bg-yuri-100 dark:text-walentine-100 md:mb-4 md:pr-20 md:pl-8 md:text-2xl';
    return jsx("header", { className: `${className} ${fixedClassNames}`, children: children });
};
UIModalHeader.displayName = 'UIModalHeader';

export { UIModalHeader };
