import { InputSizesLabel, InputSizesIcon, InputSizesInput } from '../../Input/tailwind-variations/sizes.js';

const SelectSizesLabel = {
    large: `${InputSizesLabel.large} py-1 px-5`,
    medium: `${InputSizesLabel.medium} py-1 px-4`,
    small: `${InputSizesLabel.small} py-1 px-3`
};
const SelectSizesIcon = {
    large: `${InputSizesIcon.large}`,
    medium: `${InputSizesIcon.medium}`,
    small: `${InputSizesIcon.small}`
};
const SelectSizesDropDown = {
    large: 'p-2 gap-2 text-base font-medium',
    medium: 'p-2 gap-2 text-base font-medium',
    small: 'p-1 gap-0.5 text-sm font-medium'
};
const SelectSizesListItem = {
    large: 'text-base font-medium py-2.5 gap-1 px-2',
    medium: 'text-base font-medium py-2.5 gap-1 px-2',
    small: 'text-sm font-medium py-2 gap-1 px-2'
};
const SelectSizesListIcon = {
    large: 'text-i-24',
    medium: 'text-i-24',
    small: 'text-i-20'
};
const SelectSizesValue = {
    large: `${InputSizesInput.large}`,
    medium: `${InputSizesInput.medium}`,
    small: `${InputSizesInput.small}`
};
const SelectPlaceholderSizes = {
    large: 'left-5 right-5',
    medium: 'left-4 right-4',
    small: 'left-3 right-3'
};
const SelectMaxGapHeightPercent = {
    large: 0.5,
    medium: 0.5,
    small: 0.125 // gap-0.5 - 2px
};
const SelectMaxPaddingHeightPercent = {
    large: 0.5,
    medium: 0.5,
    small: 0.25 // gap-1 - 4px
};

export { SelectMaxGapHeightPercent, SelectMaxPaddingHeightPercent, SelectPlaceholderSizes, SelectSizesDropDown, SelectSizesIcon, SelectSizesLabel, SelectSizesListIcon, SelectSizesListItem, SelectSizesValue };
