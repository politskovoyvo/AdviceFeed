import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MenuBurgerIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5ZM2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3C2.44772 11 2 11.4477 2 12ZM2 19C2 19.5523 2.44772 20 3 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H3C2.44772 18 2 18.4477 2 19Z", fill: "currentColor" }) }));
});
MenuBurgerIcon.displayName = 'MenuBurgerIcon';

export { MenuBurgerIcon };
