import { ECountries } from '../enums/countries.js';

const definitionsPhoneNumbers = {
    [ECountries.russia]: {
        '#': /[123459]/
    },
    [ECountries.kazakhstan]: {
        '#': /[678]/
    }
};

export { definitionsPhoneNumbers };
