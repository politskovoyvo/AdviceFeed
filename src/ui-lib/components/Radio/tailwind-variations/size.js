import { InputSizesLabel } from '../../Input/tailwind-variations/sizes.js';

const RadioSizeBody = {
    medium: 'h-5 w-5'
};
const RadioSizeDot = {
    medium: 'h-8 w-8 aria-checked:h-2 aria-checked:w-2'
};
const RadioButtonSize = {
    large: `${InputSizesLabel.large}`,
    medium: `${InputSizesLabel.medium}`,
    small: `${InputSizesLabel.small}`
};
const RadioLabelSize = {
    large: 'md:text-base text-sm font-normal',
    medium: 'md:text-base text-sm font-normal',
    small: 'md:text-base text-sm font-normal'
};

export { RadioButtonSize, RadioLabelSize, RadioSizeBody, RadioSizeDot };
