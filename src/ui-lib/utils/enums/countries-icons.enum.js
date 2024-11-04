import { jsx } from 'react/jsx-runtime';
import { AmFlagIcon } from '../../icons/flags/am-flag.icon.js';
import { BuFlagIcon } from '../../icons/flags/bu-flag.icon.js';
import { KgFlagIcon } from '../../icons/flags/kg-flag.icon.js';
import { KzFlagIcon } from '../../icons/flags/kz-flag.icon.js';
import { RuFlagIcon } from '../../icons/flags/ru-flag.icon.js';
import { UzFlagIcon } from '../../icons/flags/uz-flag.icon.js';
import { ECountries } from './countries.js';

const CountriesIconsEnum = {
    [ECountries.armenia]: jsx(AmFlagIcon, {}),
    [ECountries.belarus]: jsx(BuFlagIcon, {}),
    [ECountries.kyrgyzstan]: jsx(KgFlagIcon, {}),
    [ECountries.kazakhstan]: jsx(KzFlagIcon, {}),
    [ECountries.russia]: jsx(RuFlagIcon, {}),
    [ECountries.uzbekistan]: jsx(UzFlagIcon, {})
};

export { CountriesIconsEnum };
