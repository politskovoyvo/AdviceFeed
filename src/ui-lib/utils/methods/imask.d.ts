import type { TailDetails } from 'imask/core/tail-details';
import MaskedDynamic from 'imask/esm/masked/dynamic';
import { FactoryArg } from 'imask/esm/masked/factory';
import Masked, { type AppendFlags } from 'imask/masked/base';
import { ECountries } from '../enums/countries';
import { ECountryPhoneCode } from '../enums/phone-masks/country-code.enum';
import { EPhoneMasks } from '../enums/phone-masks/masks.enum';
export interface IPhoneMask {
    mask: EPhoneMasks;
    startsWith: ECountryPhoneCode;
    lazy: boolean;
    country: string;
    key: ECountries;
}
export type TDispatchedMasked = IPhoneMask & Masked;
export type TMaskOptions = ReturnType<typeof getCountryMask>;
export declare const getCountryMask: (countryCode: ECountries, isEmptyMask?: boolean) => {
    mask: EPhoneMasks;
    startsWith: ECountryPhoneCode;
    definitions: import("imask/esm/index").Definitions | undefined;
    lazy: boolean;
    country: "russia" | "belarus" | "kazakhstan" | "kyrgyzstan" | "armenia" | "uzbekistan";
    key: ECountries;
};
/**
 * Получаем полный список с масками на все страны
 */
export declare const getFullCountriesMaskList: () => IPhoneMask[];
/**
 * Выборка масски в зависимости от ввода
 * @param appended
 * @param masked
 * @param flags
 * @param tail
 */
export declare function dispatch(appended: string, masked: MaskedDynamic, flags: AppendFlags, tail: string | String | TailDetails): Masked | undefined;
export declare function createPhoneMaskPipe<T extends TMaskOptions>(mask: FactoryArg): (value: number | string) => T;
export declare function createMaskDisplayPipe(mask: FactoryArg): (value: number | string) => string;
