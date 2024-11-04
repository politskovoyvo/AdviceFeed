var CurrencyCodeEnum;
(function (CurrencyCodeEnum) {
    CurrencyCodeEnum["RU"] = "810";
    CurrencyCodeEnum["BY"] = "933";
    CurrencyCodeEnum["KZ"] = "398";
    CurrencyCodeEnum["KG"] = "417";
    CurrencyCodeEnum["AM"] = "051";
    CurrencyCodeEnum["UZ"] = "860";
})(CurrencyCodeEnum || (CurrencyCodeEnum = {}));
const CurrencyCodeMap = new Map([
    [CurrencyCodeEnum.RU, 'RU'],
    [CurrencyCodeEnum.BY, 'BY'],
    [CurrencyCodeEnum.KZ, 'KZ'],
    [CurrencyCodeEnum.KG, 'KG'],
    [CurrencyCodeEnum.AM, 'AM'],
    [CurrencyCodeEnum.UZ, 'UZ']
]);

export { CurrencyCodeEnum, CurrencyCodeMap };
