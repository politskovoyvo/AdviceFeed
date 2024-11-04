var ECountriesAlpha3;
(function (ECountriesAlpha3) {
    ECountriesAlpha3["russia"] = "RUS";
    ECountriesAlpha3["belarus"] = "BLR";
    ECountriesAlpha3["kazakhstan"] = "KAZ";
    ECountriesAlpha3["kyrgyzstan"] = "KGZ";
    ECountriesAlpha3["armenia"] = "ARM";
    ECountriesAlpha3["uzbekistan"] = "UZB";
})(ECountriesAlpha3 || (ECountriesAlpha3 = {}));
const CountriesAlpha3Map = new Map([
    [ECountriesAlpha3.russia, 'russia'],
    [ECountriesAlpha3.belarus, 'belarus'],
    [ECountriesAlpha3.kazakhstan, 'kazakhstan'],
    [ECountriesAlpha3.kyrgyzstan, 'kyrgyzstan'],
    [ECountriesAlpha3.armenia, 'armenia'],
    [ECountriesAlpha3.uzbekistan, 'uzbekistan']
]);

export { CountriesAlpha3Map, ECountriesAlpha3 };
