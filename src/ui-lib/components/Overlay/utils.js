const defaultEventListeners = {
    scroll: true,
    resize: true
};
function getEventListenerOptions(value) {
    let eventListeners;
    if (typeof value === 'object') {
        eventListeners = {
            enabled: true,
            options: { ...defaultEventListeners, ...value }
        };
    }
    else {
        eventListeners = {
            enabled: value,
            options: defaultEventListeners
        };
    }
    return eventListeners;
}

export { getEventListenerOptions };
