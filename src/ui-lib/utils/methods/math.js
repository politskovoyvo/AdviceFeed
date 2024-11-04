function countDecimalPlaces(value) {
    if (!Number.isFinite(value))
        return 0;
    let decimal = 1;
    let precision = 0;
    while (Math.round(value * decimal) / decimal !== value) {
        decimal *= 10;
        precision += 1;
    }
    return precision;
}
function toPrecision(value, precision) {
    const scaleFactor = 10 ** (precision ?? 10);
    const nextValue = Math.round(value * scaleFactor) / scaleFactor;
    return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
function roundValueToStep(value, from, step) {
    const nextValue = Math.round((value - from) / step) * step + from;
    const precision = countDecimalPlaces(step);
    return toPrecision(nextValue, precision);
}
function clampValue(value, min, max) {
    if (value == null)
        return value;
    if (max < min) {
        console.warn('Значение max не может быть меньше значения min');
    }
    return Math.min(Math.max(value, min), max);
}
function valueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min);
}
function percentToValue(percent, min, max) {
    return (max - min) * percent + min;
}

export { clampValue, countDecimalPlaces, percentToValue, roundValueToStep, toPrecision, valueToPercent };
