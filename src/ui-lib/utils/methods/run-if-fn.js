const isFunction = (value) => typeof value === 'function';
function runIfFn(valueOrFn, ...args) {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export { runIfFn };