var ECountries;
(function (ECountries) {
    ECountries["russia"] = "RU";
    ECountries["belarus"] = "BY";
    ECountries["kazakhstan"] = "KZ";
    ECountries["kyrgyzstan"] = "KG";
    ECountries["armenia"] = "AM";
    ECountries["uzbekistan"] = "UZ";
})(ECountries || (ECountries = {}));
const CountriesMap = new Map([
    [ECountries.russia, 'russia'],
    [ECountries.belarus, 'belarus'],
    [ECountries.kazakhstan, 'kazakhstan'],
    [ECountries.kyrgyzstan, 'kyrgyzstan'],
    [ECountries.armenia, 'armenia'],
    [ECountries.uzbekistan, 'uzbekistan']
]);

export { CountriesMap, ECountries };
