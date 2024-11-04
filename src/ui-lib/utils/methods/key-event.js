function keyEvent(keys, callback) {
    return (event) => {
        if (keys.includes(event.key)) {
            callback(event);
        }
    };
}

export { keyEvent };
