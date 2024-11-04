import { InputColorsLabel, InputColorsInput } from '../../Input/tailwind-variations/colors.js';

const CharInputTheme = {
    transparent: `${InputColorsLabel.transparent} ${InputColorsInput.transparent}`,
    default: `${InputColorsLabel.default} ${InputColorsInput.default} dark:focus:bg-transparent focus:bg-transparent`,
    outline: `${InputColorsLabel.outline} ${InputColorsInput.outline}`
};

export { CharInputTheme };
