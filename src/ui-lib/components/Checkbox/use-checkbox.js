import { useRef, useState, useCallback, useEffect } from 'react';
import { useCallbackRef } from '../../utils/hooks/use-callback-ref.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { useSafeLayoutEffect } from '../Descendants/utils.js';

function useCheckbox(props) {
    const { defaultChecked, checked: checkedProp, disabled, readOnly, onChange, name, value, ...rest } = props;
    const onChangeProp = useCallbackRef(onChange);
    const inputRef = useRef(null);
    const [checkedState, setCheckedState] = useState(!!defaultChecked);
    const isControlled = checkedProp !== undefined;
    const isChecked = isControlled ? checkedProp : checkedState;
    const handleChange = useCallback((event) => {
        if (readOnly || disabled) {
            event.preventDefault();
            return;
        }
        if (!isControlled) {
            setCheckedState(event.target.checked);
        }
        onChangeProp?.(event);
    }, [readOnly, disabled, isChecked, isControlled, onChangeProp]);
    useSafeLayoutEffect(() => {
        const el = inputRef.current;
        if (!el?.form)
            return;
        el.form.onreset = () => {
            setCheckedState(!!defaultChecked);
        };
    }, []);
    const getInputProps = useCallback((forwardedRef = null) => {
        return {
            ...rest,
            ref: mergeRefs(inputRef, forwardedRef),
            type: 'checkbox',
            name,
            value,
            onChange: handleChange,
            checked: isChecked,
            disabled: disabled,
            readOnly: readOnly
        };
    }, [rest, name, value, handleChange, isChecked, disabled, readOnly]);
    useEffect(() => {
        if (!inputRef.current)
            return;
        const notInSync = inputRef.current.checked !== isChecked;
        if (notInSync) {
            setCheckedState(inputRef.current.checked);
        }
    }, [inputRef.current]);
    const state = {
        checked: isChecked,
        disabled
    };
    return {
        state,
        getInputProps
    };
}

export { useCheckbox };
