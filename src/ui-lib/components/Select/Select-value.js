import { jsx, Fragment } from 'react/jsx-runtime';
import { createElement } from 'react';
import { useSelectContext } from './Select-context.js';
import { SelectSizesValue } from './tailwind-variations/sizes.js';

const SelectValue = ({ fieldSize, theme, selectedTemplate }) => {
    const { disabled, selected, disclosure, searchable } = useSelectContext();
    return (jsx(Fragment, { children: !(disclosure.isOpen && searchable) &&
            selected.map((option, i) => (jsx("span", { "aria-disabled": disabled, className: `${SelectSizesValue[fieldSize]} inline-block w-full overflow-hidden overflow-ellipsis whitespace-nowrap aria-disabled:text-rus-200`, children: selectedTemplate ? createElement(selectedTemplate, option) : option.label }, i))) }));
};

export { SelectValue };
