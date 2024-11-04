import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef, useState } from 'react';
import { useSelectContext } from './Select-context.js';
import { SelectColorsInput } from './tailwind-variations/colors.js';
import { SelectSizesValue, SelectPlaceholderSizes } from './tailwind-variations/sizes.js';

const SelectSearch = forwardRef(({ theme, fieldSize, placeholder, id, insideOverlay, disabled }, ref) => {
    const { searchable, selected, search, disclosure, charsCount, inputRef } = useSelectContext();
    const [size, setSize] = useState(insideOverlay ? 0 : 1);
    const className = `${SelectColorsInput[theme]} ${!selected.length && !!charsCount ? '' : 'w-0 opacity-0 focus:w-auto focus:opacity-100'} ${searchable ? 'max-w-full' : 'h-0 w-0 min-w-0'} ${disclosure.isOpen ? 'cursor-text' : 'cursor-pointer'} ${insideOverlay ? 'w-full' : ''}`;
    const placeholderClasses = `${SelectPlaceholderSizes[fieldSize]}`;
    const inputHandle = (event) => {
        const inputValue = event.target.value;
        search(inputValue);
        if (!insideOverlay) {
            setSize(Math.max(inputValue.length, 1));
        }
    };
    return (jsxs(Fragment, { children: [placeholder && !charsCount && !selected.length && (jsx("span", { className: `${SelectSizesValue[fieldSize]} pointer-events-none absolute overflow-hidden overflow-ellipsis whitespace-nowrap text-rus-300 dark:text-rus-400 ${placeholderClasses}`, children: placeholder })), jsx("input", { ref: ref, id: id, readOnly: !searchable, disabled: disabled, size: size, className: `${SelectSizesValue[fieldSize]} bg-transparent focus:outline-none focus-visible:outline-none ${className}`, inputMode: "text", onChange: inputHandle })] }));
});
SelectSearch.displayName = 'SelectSearch';

export { SelectSearch };
