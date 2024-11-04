import { jsxs, jsx } from 'react/jsx-runtime';
import '../../icons/directions/arrow-down.icon.js';
import '../../icons/directions/caret-down.icon.js';
import '../../icons/directions/double-down.icon.js';
import { DownIcon } from '../../icons/directions/down.icon.js';
import '../../icons/directions/large-down.icon.js';
import { UIButton } from '../Button/Button.js';
import { useCarouselContext } from './carousel-context.js';

const UICarouselButtons = (props) => {
    const { children, className, previousButtonClass, nextButtonClass } = props;
    const { next, previous } = useCarouselContext();
    return (jsxs("div", { className: `relative flex h-full w-full items-center gap-8 ${className}`, children: [children, jsxs("div", { className: `absolute left-0 top-1/2 flex  w-full -translate-y-1/2 items-center ${className}`, children: [jsx(UIButton, { onClick: previous, theme: 'empty', className: `left-4 h-12 w-12 rounded-full bg-walentine-100 text-i-18 text-yuri-1000 shadow dark:bg-yuri-400 dark:text-rus-200 dark:hover:bg-rus-500 dark:hover:text-walentine-500 ${previousButtonClass}`, children: jsx(DownIcon, { className: 'h-7 w-7 rotate-90' }) }), jsx(UIButton, { onClick: next, theme: 'empty', className: `right-4 ml-auto h-12 w-12 rounded-full bg-walentine-100 text-i-18 text-yuri-1000 shadow dark:bg-yuri-400 dark:text-rus-200 dark:hover:bg-rus-500 dark:hover:text-walentine-500 ${nextButtonClass}}`, children: jsx(DownIcon, { className: 'h-7 w-7 -rotate-90' }) })] })] }));
};
UICarouselButtons.displayName = 'UICarouselButtons';

export { UICarouselButtons };
