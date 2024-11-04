function callAllHandlers(...fns) {
    return function func(event) {
        fns.some((fn) => {
            fn?.(event);
            return event?.defaultPrevented;
        });
    };
}

export { callAllHandlers };
