import { jsx } from 'react/jsx-runtime';

const UINavigationGroup = (props) => {
    const { children } = props;
    return (jsx("li", { className: "mb-5 last-of-type:mb-0", children: jsx("ul", { className: "space-y-1.5", children: children }) }));
};

export { UINavigationGroup };
