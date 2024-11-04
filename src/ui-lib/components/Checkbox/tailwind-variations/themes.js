import { InputColorsLabel } from '../../Input/tailwind-variations/colors.js';

const CheckboxTheme = {
    green: '',
    outline: '',
    primary: 'border-rus-200 peer-checked/checkbox:show-arrow peer-aria-indeterminate/checkbox:show-arrow hide-arrow peer-checked/checkbox:bg-primary-700 peer-aria-indeterminate/checkbox:bg-primary-700 peer-checked/checkbox:border-primary-700 peer-aria-indeterminate/checkbox:border-primary-700 group-hover/checkbox:peer-enabled/checkbox:border-primary-700 peer-enabled/checkbox:hover:border-primary-700 peer-disabled/checkbox:border-rus-200 peer-disabled/checkbox:bg-walentine-400 dark:peer-disabled/checkbox:border-yuri-400 peer-enabled/checkbox:text-walentine-100 dark:peer-enabled/checkbox:text-yuri-300 dark:peer-disabled/checkbox:bg-yuri-100 dark:peer-disabled/checkbox:text-rus-500 dark:peer-disabled/checkbox:border-rus-500 peer-disabled/checkbox:text-rus-300',
    red: '',
    transparent: ''
};
const CheckboxLabelTheme = {
    green: '',
    outline: '',
    primary: 'peer-enabled/checkbox:text-yuri-1000 peer-disabled/checkbox:text-rus-200 dark:peer-disabled/checkbox:text-rus-400 dark:peer-enabled/checkbox:text-walentine-100',
    red: '',
    transparent: ''
};
const CheckboxButtonTheme = {
    default: `${InputColorsLabel.default}`,
    outline: 'border-walentine-500 cursor-pointer bg-walentine-500 md:hover:border-yuri-400 md:hover:bg-transparent aria-checked:border-primary-700 md:aria-checked:hover:border-yuri-400 aria-checked:bg-transparent aria-disabled:hover:border-walentine-500 aria-disabled:hover:bg-walentine-500 aria-disabled:cursor-not-allowed',
    transparent: `${InputColorsLabel.transparent}`
};
const CheckboxButtonCheckTheme = {
    default: '',
    outline: 'text-rus-100 aria-checked:text-primary-700',
    transparent: ''
};

export { CheckboxButtonCheckTheme, CheckboxButtonTheme, CheckboxLabelTheme, CheckboxTheme };
