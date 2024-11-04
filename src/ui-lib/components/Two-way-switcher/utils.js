const getInitialValue = (children, defaultValue, value) => {
    const passedValue = value ?? defaultValue;
    const firstValue = children[0].props.value;
    return passedValue ?? firstValue;
};

export { getInitialValue };
