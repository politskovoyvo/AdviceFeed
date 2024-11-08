function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function') && !Array.isArray(value);
}

export { isObject };
