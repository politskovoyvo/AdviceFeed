const setInputValueNative = (input, text) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(input, text);
};
const callInputNativeInputEvent = (input) => {
    const event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
};

export { callInputNativeInputEvent, setInputValueNative };
