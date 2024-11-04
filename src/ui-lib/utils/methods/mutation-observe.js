function mutationObserve(element, callback, options) {
    if (!element) {
        return callback(undefined);
    }
    callback(element);
    const win = element.ownerDocument.defaultView ?? window;
    const observer = new win.MutationObserver((entries) => {
        if (!Array.isArray(entries) || !entries.length)
            return;
        callback(element);
    });
    observer.observe(element, options);
    return () => observer.disconnect();
}

export { mutationObserve };
