import { useRef, useCallback } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';

function useCounter(props) {
    const { value, onChange: onChangeProp, defaultValue = 0, step = 1, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER, disabled = false, readOnly = false, name, ...rest } = props;
    const inputRef = useRef(null);
    const disabledState = useRef({ increase: disabled, decrease: disabled });
    const onChange = (changeValue) => {
        if (typeof changeValue === 'number') {
            onChangeProp?.(changeValue);
        }
    };
    const [count, setCount] = useControllableState({
        value,
        defaultValue,
        onChange
    });
    const setNewValue = useCallback((newValue) => {
        let result = '';
        const maxAllowedValue = Math.min(max, Number(newValue));
        result = Math.max(min, maxAllowedValue);
        if (inputRef.current)
            inputRef.current.value = String(result);
        disabledState.current.increase = result === max;
        disabledState.current.decrease = result === min;
        setCount(result);
    }, [max, min]);
    const onBlur = () => {
        if (count === '' || count === '-') {
            setNewValue(0);
        }
    };
    const onInputChange = useCallback((event) => {
        const newValue = event.target.value.replace(/(?!^\-)[^\d\r\n]+/g, '');
        if (newValue !== '' && newValue !== '-') {
            setNewValue(Number(newValue));
        }
        else {
            setCount(newValue);
        }
    }, [setNewValue]);
    const increase = () => {
        if (readOnly || disabled)
            return;
        const newValue = Number(count) + step;
        if (newValue <= max) {
            setNewValue(newValue);
        }
    };
    const decrease = () => {
        if (readOnly || disabled)
            return;
        const newValue = Number(count) - step;
        if (newValue >= min) {
            setNewValue(newValue);
        }
    };
    const inputProps = {
        ref: inputRef,
        name,
        disabled,
        readOnly,
        value: count,
        onBlur,
        onChange: onInputChange,
        ...rest
    };
    return {
        inputProps,
        disabledState,
        increase,
        decrease
    };
}

export { useCounter };
