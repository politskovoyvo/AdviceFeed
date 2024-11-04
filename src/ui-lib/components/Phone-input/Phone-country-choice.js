import { jsx } from 'react/jsx-runtime';
import { CountriesIconsEnum } from '../../utils/enums/countries-icons.enum.js';

const PhoneCountryChoice = ({ value }) => {
    return jsx("div", { className: 'h-5 text-i-22', children: CountriesIconsEnum[value] });
};

export { PhoneCountryChoice };
