import { jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { isObject } from '../../utils/methods/is-object.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { RadioContext } from './Radio-context.js';

function isInputEvent(value) {
    return value && isObject(value) && isObject(value.target);
}
const UIRadioGroup = ({ children, onChange: onChangeProp, name: nameProp, defaultValue, value: valueProp, className }) => {
    const id = uniqueId('radio-group');
    const [valueState, setValueState] = useState(defaultValue ?? '');
    const isControlled = typeof valueProp !== 'undefined';
    const value = isControlled ? valueProp : valueState;
    const name = nameProp || id;
    const onChange = useCallback((eventOrValue) => {
        const nextValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
        if (!isControlled) {
            setValueState(nextValue);
        }
        onChangeProp?.(nextValue);
    }, [onChangeProp, isControlled]);
    return (jsx(RadioContext.Provider, { value: { value, onChange, name }, children: jsx("div", { role: "radio-group", className: className, children: children }) }));
};

export { UIRadioGroup };
