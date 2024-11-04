import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { DownIcon } from '../../icons/directions/down.icon.js';
import { TinyCrossIcon } from '../../icons/suggested/tiny-cross.icon.js';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { UIButton } from '../Button/Button.js';
import { useSelectContext } from './Select-context.js';
import { SelectCoverage } from './Select-coverage.js';
import { SelectMultiplyValue } from './Select-multiply-value.js';
import { SelectSearch } from './Select-search.js';
import { SelectValue } from './Select-value.js';
import { SelectColorsLabel, SelectColorsInput } from './tailwind-variations/colors.js';
import { SelectSizesLabel } from './tailwind-variations/sizes.js';

const SelectLabel = forwardRef(({ selectedTemplate, compress, insideOverlay, fieldSize, theme, placeholder, coveragePlaceholder, coveragePostfix, className = '', onClick }, ref) => {
    const { searchable, inputRef, disabled, selected, multiply, disclosure, removeAll, loading } = useSelectContext();
    const [isMd] = useMediaQuery(MediaScreens.md);
    const id = uniqueId('select');
    const iconClasses = `cursor-pointer transition ml-auto text-rus-100 ${fieldSize === 'small' ? 'text-i-20' : 'text-i-24'} ${compress ? 'opacity-0 w-0 h-0' : ''}`;
    // TODO: на рефаче убрать !important
    const labelClassNames = `${SelectColorsLabel[theme]} ${SelectColorsInput[theme]} ${SelectSizesLabel[fieldSize]} ${className} ${compress ? '!w-10' : ''}`;
    const handleClickWrap = () => {
        if (disabled)
            return;
        if (searchable) {
            inputRef.current?.focus();
        }
    };
    const handleClickRemove = (event) => {
        event.stopPropagation();
        removeAll();
    };
    return (jsxs("div", { ref: ref, tabIndex: 0, "aria-expanded": disclosure.isOpen, "aria-disabled": disabled || loading, "aria-selected": disclosure.isOpen && isMd, onClick: callAllHandlers(onClick, handleClickWrap), className: `relative box-border flex items-center gap-1 rounded transition-background transition-border-color cursor-pointer aria-disabled:cursor-not-allowed ${labelClassNames}`, children: [!multiply && jsx(SelectValue, { selectedTemplate: selectedTemplate, theme: theme, fieldSize: fieldSize }), multiply && jsx(SelectMultiplyValue, { theme: theme, fieldSize: fieldSize, placeholder: placeholder }), jsx(SelectSearch, { ref: inputRef, id: id, fieldSize: fieldSize, theme: theme, disabled: disabled || loading, placeholder: placeholder, insideOverlay: insideOverlay }), loading && (jsx(UIButton, { theme: 'icon', type: 'button', className: iconClasses, children: jsx(LoadingIcon, {}) })), !loading && searchable && !!selected.length && (jsx(UIButton, { theme: 'icon', type: 'button', className: iconClasses, onClick: handleClickRemove, children: jsx(TinyCrossIcon, {}) })), !loading && !searchable && (jsx(UIButton, { disabled: disabled, theme: 'icon', type: 'button', className: `${iconClasses} ${disclosure.isOpen ? 'rotate-180' : ''}`, children: jsx(DownIcon, {}) })), jsx(SelectCoverage, { compress: compress, coveragePlaceholder: coveragePlaceholder, coveragePostfix: coveragePostfix })] }));
});
SelectLabel.displayName = 'SelectLabel';

export { SelectLabel };
