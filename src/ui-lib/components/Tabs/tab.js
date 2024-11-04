import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import { useTab } from './use-tabs.js';

const UITab = forwardRef((props, ref) => {
    const { className, children, count, isDisabled, isShowLeftDivider, isSelected, ...tabProps } = useTab({ ...props, ref });
    return (jsxs("button", { ...tabProps, className: `flex h-12 items-center gap-2 whitespace-nowrap text-base font-normal text-yuri-400 disabled:cursor-not-allowed disabled:text-rus-200 dark:text-walentine-100 ${className}`, children: [children, count !== undefined && (jsx(UIBadge, { shape: 'circle', color: isDisabled ? 'disabled' : isSelected ? 'primary' : 'light', children: count }))] }));
});
UITab.displayName = 'UITab';

export { UITab };
