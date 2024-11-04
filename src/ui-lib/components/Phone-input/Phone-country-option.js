import { jsxs, jsx } from 'react/jsx-runtime';
import { CountriesIconsEnum } from '../../utils/enums/countries-icons.enum.js';
import { ECountriesRu } from '../../utils/enums/countries-ru.enum.js';

const PhoneCountryOption = ({ value, extra }) => {
    return (jsxs("div", { className: 'flex items-center', children: [jsx("span", { className: 'mr-3 text-i-22', children: CountriesIconsEnum[value] }), jsx("span", { className: 'mr-1 text-sm font-normal text-yuri-400 dark:text-walentine-100 group-hover:dark:text-yuri-400', children: ECountriesRu[value] }), jsxs("span", { className: 'text-sm font-normal text-rus-500', children: ["+", extra] })] }));
};

export { PhoneCountryOption };
