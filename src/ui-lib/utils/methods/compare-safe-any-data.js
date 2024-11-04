const getStringifyValue = (value) => {
    return JSON.stringify(value);
};
const compareSafeAnyData = (a, b) => {
    const valueA = a !== undefined ? getStringifyValue(a) : undefined;
    const valueB = b !== undefined ? getStringifyValue(b) : undefined;
    return valueA === valueB;
};

export { compareSafeAnyData };
