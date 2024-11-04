import { jsx } from 'react/jsx-runtime';

const UIModalContent = (props) => {
    const { children, noneStyles = false, className = '' } = props;
    const fixedClassNames = noneStyles ? '' : 'overflow-auto px-4 md:px-8';
    return jsx("div", { className: `${className} ${fixedClassNames}`, children: children });
};
UIModalContent.displayName = 'UIModalContent';

export { UIModalContent };
