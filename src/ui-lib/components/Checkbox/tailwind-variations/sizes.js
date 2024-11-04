import { InputSizesLabel } from '../../Input/tailwind-variations/sizes.js';

const CheckboxSize = {
    large: '',
    medium: 'h-5 w-5 border text-i-10',
    small: ''
};
const CheckboxLabelSize = {
    large: 'md:test-base text-sm font-normal',
    medium: 'md:test-base text-sm font-normal',
    small: 'md:test-base text-sm font-normal'
};
const CheckboxButtonSize = {
    large: `${InputSizesLabel.large}`,
    medium: `${InputSizesLabel.medium}`,
    small: `${InputSizesLabel.small}`
};
const CheckboxButtonCheckSize = {
    large: 'text-i-24',
    medium: 'text-i-24',
    small: 'text-i-20'
};

export { CheckboxButtonCheckSize, CheckboxButtonSize, CheckboxLabelSize, CheckboxSize };
