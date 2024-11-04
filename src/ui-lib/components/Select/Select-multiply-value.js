import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { UIBadge } from '../Badge/Badge.js';
import '../Badge/Badge-notice.js';
import { UIText } from '../Text/Text.js';
import { useSelectContext } from './Select-context.js';
import { SelectSizesValue } from './tailwind-variations/sizes.js';

const SelectMultiplyValue = ({ fieldSize, placeholder }) => {
    const { selected, disabled, disclosure, searchable } = useSelectContext();
    return (jsx(Fragment, { children: !(disclosure.isOpen && searchable) && (jsx("div", { "aria-disabled": disabled, className: `${SelectSizesValue[fieldSize]} w-full truncate whitespace-nowrap aria-disabled:text-rus-200`, children: !!selected.length && (jsxs("div", { className: "flex items-center gap-2", children: [placeholder && (jsx(UIText, { size: "sm", className: "max-w-11/12 truncate", children: placeholder })), jsx(UIBadge, { shape: "circle", theme: "solid", children: selected.length })] })) })) }));
};

export { SelectMultiplyValue };
