import { jsx } from 'react/jsx-runtime';

const UIDrawerContent = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles ? '' : 'overflow-auto px-4 py-5 md:px-8 flex-1';
    return jsx("div", { className: `${className} ${fixedClassNames}`, children: children });
};
UIDrawerContent.displayName = 'UIDrawerContent';

export { UIDrawerContent };
