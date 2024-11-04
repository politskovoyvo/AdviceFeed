function addDomEvent(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    return () => {
        target.removeEventListener(type, listener, options);
    };
}

export { addDomEvent };
