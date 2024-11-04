import { jsxs, jsx } from 'react/jsx-runtime';
import { memo, forwardRef, useRef, useState, useEffect } from 'react';
import { ECountries } from '../../utils/enums/countries.js';
import { ECountryPhoneCode } from '../../utils/enums/phone-masks/country-code.enum.js';
import { useSize } from '../../utils/hooks/use-size.js';
import { getCountryMask, createPhoneMaskPipe, getFullCountriesMaskList, dispatch } from '../../utils/methods/imask.js';
import { setInputValueNative, callInputNativeInputEvent } from '../../utils/methods/input-native-methods.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import 'react-imask';
import '../Input/Input.js';
import { UIInputMask } from '../Input/input-mask.js';
import { UISelect } from '../Select/Select.js';
import { PhoneCountryChoice } from './Phone-country-choice.js';
import { PhoneCountryOption } from './Phone-country-option.js';

const UIPhoneInput = memo(forwardRef(({ theme = 'default', fieldSize = 'medium', wrapClassName = '', countries = Object.values(ECountries), name, strategy, autoFocus, value = '', disabled, ...rest }, ref) => {
    const countryList = Object.keys(ECountries)
        .filter((c) => countries.includes(ECountries[c]))
        .map((c) => ({
        label: ECountries[c],
        value: ECountries[c],
        extra: ECountryPhoneCode[ECountries[c]]
    }));
    const inputRef = useRef(null);
    const mergedRefs = mergeRefs(inputRef, ref);
    const [opts, setOpts] = useState(() => getCountryMask(ECountries.russia, false));
    const [country, setCountry] = useState(ECountries.russia);
    const wrapRef = useRef(null);
    const wrapSize = useSize(wrapRef);
    useEffect(() => {
        if (value) {
            const maskPipe = createPhoneMaskPipe({ mask: getFullCountriesMaskList(), dispatch });
            const mask = maskPipe(String(value));
            setOpts(getCountryMask(mask.key, false));
            setCountry(mask.key);
        }
    }, []);
    const handleChangeCountry = (options) => {
        const optionsCountry = options;
        setOpts(getCountryMask(optionsCountry, false));
        if (inputRef.current) {
            setInputValueNative(inputRef.current, '');
            callInputNativeInputEvent(inputRef.current);
            // TODO: Фокус на элементе еще не введенного значения в маске
            setTimeout(() => inputRef.current.focus(), 10);
        }
    };
    return (jsxs("div", { className: `relative flex ${wrapClassName}`, ref: wrapRef, children: [jsx(UISelect, { className: 'peer/label static translate-x-0.25 flex-nowrap rounded-r-none pl-5 pr-4 hover:z-1', dropdownTitle: 'Страна', theme: theme, strategy: strategy, fieldSize: fieldSize, list: countryList, value: country, disabled: disabled, optionTemplate: PhoneCountryOption, selectedTemplate: PhoneCountryChoice, dropdownInnerStyle: { minWidth: `${wrapSize.width}px` }, maxOptionsOverflow: countryList.length, onChange: handleChangeCountry }), jsx(UIInputMask, { ref: mergedRefs, mask: opts, labelClassName: 'rounded-l-none', className: 'w-full flex-1', theme: theme, type: 'tel', name: name, unmask: true, onlyComplete: true, fieldSize: fieldSize, autoFocus: autoFocus, value: value, disabled: disabled, ...rest })] }));
}));
UIPhoneInput.displayName = 'UIPhoneInput';

export { UIPhoneInput };
