import { jsx } from 'react/jsx-runtime';
import { forwardRef, useState } from 'react';
import { useIMask } from 'react-imask';
import { useUpdateEffect } from '../../utils/hooks/use-update-effect.js';
import { callInputNativeInputEvent } from '../../utils/methods/input-native-methods.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { UIInput } from './Input.js';

const UIInputMask = forwardRef(({ mask, unmask = false, onlyComplete = false, name, value: valueProps, onChange, onComplete, labelRef, ...props }, ref) => {
    const [options, setOptions] = useState(mask);
    const [lastValue, setLastValue] = useState(valueProps);
    const onAccept = (value, maskRef, event) => {
        const eventValue = unmask ? maskRef.unmaskedValue : event || value;
        const finaleValue = !onlyComplete || (onlyComplete && maskRef.masked.isComplete) ? eventValue : '';
        if (finaleValue === lastValue)
            return;
        setLastValue(finaleValue instanceof InputEvent ? finaleValue.target.value : finaleValue);
        if (event) {
            onChange?.(finaleValue);
        }
        else {
            onChange?.({ target: { name, value: finaleValue } });
        }
    };
    const { maskRef, ref: IMaskInput } = useIMask({ ...mask }, { onAccept: onAccept, onComplete });
    const mergeRef = mergeRefs(ref, IMaskInput);
    const updateValue = (value) => {
        if (maskRef.current) {
            maskRef.current[unmask ? 'unmaskedValue' : 'value'] = value;
            maskRef.current.updateValue();
        }
        setLastValue(value);
    };
    useUpdateEffect(() => {
        if (maskRef.current && lastValue !== valueProps) {
            updateValue(valueProps);
        }
    }, [valueProps]);
    useUpdateEffect(() => {
        const isNewMas = JSON.stringify(mask) !== JSON.stringify(options);
        if (maskRef.current && isNewMas) {
            setOptions(mask);
            maskRef.current.updateOptions(mask);
            if (document.activeElement && document.activeElement == IMaskInput.current) {
                const input = IMaskInput.current;
                callInputNativeInputEvent(input);
                setTimeout(() => input.focus(), 10);
            }
        }
    }, [mask]);
    return jsx(UIInput, { ...props, ref: mergeRef, labelRef: labelRef, name: name, defaultValue: valueProps });
});
UIInputMask.displayName = 'UIInputMask';

export { UIInputMask };
