import { useState, useEffect, useCallback } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { keyEvent } from '../../utils/methods/key-event.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useCharInputDescendants, useCharInputContext, useCharInputDescendant } from './char-input-context.js';

const valueToArray = (value) => value?.split('');
const arrayToValue = (value) => value.join('');
const pipeValue = (value, type) => {
    const lettersOrNumbers = /[^A-Za-z0-9]/g;
    const onlyNumbers = /[^0-9]/g;
    const regexp = type === 'numeric' ? onlyNumbers : lettersOrNumbers;
    return value.replace(regexp, '');
};
function useCharInput(props) {
    const { defaultValue, value: valueProp, onChange, onComplete, otp = false, autoFocus = false, inputMode = 'numeric', disabled = false, readOnly = false, placeholder, invalid = false, fieldSize, theme, ...htmlProps } = props;
    const [values, setValues] = useControllableState({
        defaultValue: valueToArray(defaultValue) || [],
        value: valueToArray(valueProp),
        onChange: (v) => onChange?.(arrayToValue(v))
    });
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const descendants = useCharInputDescendants();
    useEffect(() => {
        if (autoFocus) {
            const first = descendants.first();
            if (first) {
                window.requestAnimationFrame(() => {
                    first.node.focus();
                });
            }
        }
    }, [autoFocus, descendants]);
    const focusNext = useCallback((index) => {
        const next = descendants.next(index, false);
        if (next) {
            window.requestAnimationFrame(() => {
                next.node.focus();
            });
        }
    }, [descendants]);
    const handleNewValue = useCallback((inputValue, index, focus = true) => {
        const newValues = [...values];
        newValues[index] = inputValue;
        const isComplete = newValues.length === descendants.count() && newValues.every((v) => !!v);
        setValues(newValues);
        if (isComplete) {
            onComplete?.(arrayToValue(newValues));
        }
        else {
            if (focus) {
                focusNext(index);
            }
        }
    }, [descendants, focusNext, onComplete, setValues, values]);
    const focusPrevious = useCallback((index) => {
        const prev = descendants.prev(index, false);
        if (prev) {
            window.requestAnimationFrame(() => {
                prev.node.focus();
            });
        }
    }, [descendants]);
    const getInputProps = useCallback((_props, _ref) => {
        const { index, ...rest } = _props ?? {};
        const id = uniqueId('char-input-field');
        const onInput = (event) => {
            const eventValue = event.target.value;
            const newValue = eventValue.slice(-1);
            const pipedValue = pipeValue(newValue, inputMode);
            if (!newValue) {
                handleNewValue('', index, false);
            }
            else if (newValue && pipedValue.length) {
                handleNewValue(pipedValue, index);
            }
        };
        const onPaste = (event) => {
            event.preventDefault(); // Чтобы избежать вызова OnInput
            const pastedValue = (event.clipboardData || window.Clipboard).getData('text');
            if (!pastedValue)
                return;
            const pipedValue = pipeValue(pastedValue, inputMode);
            if (pipedValue.length > 1) {
                const fields = descendants.count();
                const pipedArray = valueToArray(pipedValue) || [];
                const newValue = pipedArray.splice(0, fields);
                setValues(newValue);
                if (newValue.length === fields) {
                    onComplete?.(arrayToValue(newValue));
                }
            }
            else {
                handleNewValue(pipedValue, index, false);
            }
        };
        const backspaceHandler = keyEvent(['Backspace'], (event) => {
            if (event.target.value === '') {
                const prevInput = descendants.prev(index, false);
                if (prevInput) {
                    handleNewValue('', index - 1, false);
                    focusPrevious(index);
                }
            }
        });
        const onFocus = () => {
            setFocusedIndex(index);
        };
        const onBlur = () => {
            setFocusedIndex(-1);
        };
        return {
            ...rest,
            ref: _ref,
            inputMode,
            id,
            disabled,
            readOnly,
            'aria-invalid': invalid,
            onPaste: callAllHandlers(rest.onPaste, onPaste),
            onInput: callAllHandlers(rest.onInput, onInput),
            onKeyDown: callAllHandlers(rest.onKeyDown, backspaceHandler),
            onFocus: callAllHandlers(rest.onFocus, onFocus),
            onBlur: callAllHandlers(rest.onBlur, onBlur),
            value: values[index] || '',
            placeholder: focusedIndex === index ? '' : placeholder,
            autoComplete: otp ? 'one-time-code' : 'off',
            contentEditable: true
        };
    }, [
        descendants,
        disabled,
        focusPrevious,
        focusedIndex,
        handleNewValue,
        inputMode,
        invalid,
        onComplete,
        otp,
        placeholder,
        readOnly,
        setValues,
        values
    ]);
    return {
        htmlProps,
        getInputProps,
        descendants,
        theme,
        fieldSize
    };
}
function useCharInputField() {
    const { getInputProps, theme = 'default', fieldSize = 'medium' } = useCharInputContext();
    const { register, index } = useCharInputDescendant();
    return {
        getInputProps,
        register,
        index,
        theme,
        fieldSize
    };
}

export { useCharInput, useCharInputField };
