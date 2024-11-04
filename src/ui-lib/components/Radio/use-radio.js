import { useState, useEffect } from 'react';

function useRadio(props) {
    const { context, value, ...rest } = props;
    const [checked, setChecked] = useState(false);
    const onChange = (event) => {
        context.onChange?.(event);
    };
    useEffect(() => {
        if (context) {
            setChecked(context.value == value);
        }
    }, [context, value]);
    return {
        ...rest,
        onChange,
        checked,
        value
    };
}

export { useRadio };
