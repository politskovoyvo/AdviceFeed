import { jsx } from 'react/jsx-runtime';

const UIDrawerHeader = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles
        ? ''
        : 'sticky top-0 mx-4 border-b border-rus-100 bg-walentine-100 pb-2 pl-0 pr-8 text-lg font-bold text-yuri-400 dark:bg-yuri-100 dark:text-walentine-100 md:pb-4 md:pl-4 md:pr-16 md:text-2xl';
    return jsx("header", { className: `${className} ${fixedClassNames}`, children: children });
};
UIDrawerHeader.displayName = 'UIDrawerHeader';

export { UIDrawerHeader };
