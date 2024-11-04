import { IMask } from 'react-imask';
import { definitionsPhoneNumbers } from '../consts/definitions-phone-numbers.js';
import { CountriesMap, ECountries } from '../enums/countries.js';
import { ECountryPhoneCode } from '../enums/phone-masks/country-code.enum.js';
import { EPhoneMasks } from '../enums/phone-masks/masks.enum.js';

/**
 * Заменяем маску телефона с кодом на пустую, чтобы она динамически менялась в зависимости от ввода пользователя
 * @param country Страна типа ECountries
 */
const getEmptyMask = (country) => {
    const maskWithCode = EPhoneMasks[country];
    const code = ECountryPhoneCode[country];
    const emptyZeroes = '0'.repeat(code.length);
    return maskWithCode.replace(`{${code}}`, emptyZeroes);
};
const getCountryMask = (countryCode, isEmptyMask = true) => ({
    mask: isEmptyMask ? getEmptyMask(countryCode) : EPhoneMasks[countryCode],
    startsWith: ECountryPhoneCode[countryCode],
    definitions: definitionsPhoneNumbers[countryCode],
    lazy: false,
    country: CountriesMap.get(countryCode),
    key: countryCode
});
/**
 * Получаем полный список с масками на все страны
 */
const getFullCountriesMaskList = () => Object.values(ECountries).reduce((acc, country) => {
    acc.push(getCountryMask(country));
    return acc;
}, []);
/**
 * Выборка масски в зависимости от ввода
 * @param appended
 * @param masked
 * @param flags
 * @param tail
 */
function dispatch(appended, masked, flags, 
// eslint-disable-next-line
tail) {
    const definitionRegExp = new RegExp(/\/(.*?)\//);
    const inputNumber = (masked.value + appended).replace(/\D/g, '');
    const list = masked.compiledMasks;
    return list.find((m) => {
        const definition = definitionsPhoneNumbers[m.key];
        if (definition && '#' in definition) {
            const regexpString = definition['#'];
            const value = definitionRegExp.exec(regexpString);
            if (value && value[1]) {
                const requirement = `^${m.startsWith}${value[1]}${inputNumber.length <= m.startsWith.length ? '?' : ''}`;
                const regexp = new RegExp(requirement, 'g');
                return inputNumber.match(regexp);
            }
        }
        return inputNumber.indexOf(m.startsWith.slice(0, inputNumber.length)) === 0;
    });
}
function createPhoneMaskPipe(mask) {
    const masked = IMask.createMask(mask);
    return (value) => masked.runIsolated((m) => {
        m.value = String(value);
        return m.currentMask;
    });
}
function createMaskDisplayPipe(mask) {
    const masked = IMask.createMask(mask);
    return (value) => masked.runIsolated((m) => {
        m.value = String(value);
        return m.displayValue;
    });
}

export { createMaskDisplayPipe, createPhoneMaskPipe, dispatch, getCountryMask, getFullCountriesMaskList };
