import { useRef, useState, useCallback, useMemo } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { useSize } from '../../utils/hooks/use-size.js';
import { useUpdateEffect } from '../../utils/hooks/use-update-effect.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { clampValue, roundValueToStep, valueToPercent, percentToValue } from '../../utils/methods/math.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { usePointerTracker } from './use-pointer-tracker.js';

function useSlider(props) {
    const { orientation = 'horizontal', min = 0, max = 100, step = 1, readOnly = false, disabled = false, value: valueProp, defaultValue, onChange, onChangeEnd, onChangeStart, name, id, ...htmlProps } = props;
    const wrapRef = useRef(null);
    const trackRef = useRef(null);
    const thumbRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [computedValue, setValue] = useControllableState({
        value: valueProp,
        defaultValue: defaultValue ?? (max < min ? min : min + (max - min) / 2),
        onChange
    });
    const isVertical = orientation === 'vertical';
    const tenSteps = (max - min) / 10;
    const oneStep = step || (max - min) / 100;
    const value = clampValue(computedValue, min, max);
    const thumbPercent = valueToPercent(value, min, max);
    const thumbSize = useSize(thumbRef);
    const stateRef = useRef({
        value,
        eventSource: null
    });
    const getValueFromPointer = useCallback((event) => {
        if (!trackRef.current)
            return;
        const state = stateRef.current;
        const trackRect = trackRef.current.getBoundingClientRect();
        const { clientX, clientY } = event.touches?.[0] ?? event;
        state.eventSource = 'pointer';
        const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
        const length = isVertical ? trackRect.height : trackRect.width;
        const percent = diff / length;
        let nextValue = percentToValue(percent, min, max);
        nextValue = parseFloat(roundValueToStep(nextValue, min, step));
        return clampValue(nextValue, min, max);
    }, [isVertical, max, min, step]);
    const constrain = useCallback((nextValue) => {
        const state = stateRef.current;
        if (readOnly || disabled)
            return;
        nextValue = parseFloat(roundValueToStep(nextValue, min, oneStep));
        nextValue = clampValue(nextValue, min, max);
        state.value = nextValue;
        setValue(nextValue);
    }, [disabled, max, min, oneStep, readOnly, setValue]);
    const actions = useMemo(() => ({
        stepUp(nextStep = oneStep) {
            constrain(value + nextStep);
        },
        stepDown(nextStep = oneStep) {
            constrain(value - nextStep);
        },
        reset() {
            constrain(defaultValue || 0);
        },
        stepTo(nextValue) {
            constrain(nextValue);
        }
    }), [constrain, value, oneStep, defaultValue]);
    const onKeyDown = useCallback((event) => {
        const state = stateRef.current;
        const keyMap = {
            ArrowRight: () => actions.stepUp(),
            ArrowUp: () => actions.stepUp(),
            ArrowLeft: () => actions.stepDown(),
            ArrowDown: () => actions.stepDown(),
            PageUp: () => actions.stepUp(tenSteps),
            PageDown: () => actions.stepDown(tenSteps),
            Home: () => actions.stepTo(min),
            End: () => actions.stepTo(max)
        };
        const action = keyMap[event.key];
        if (action) {
            event.preventDefault();
            event.stopPropagation();
            action(event);
            state.eventSource = 'keyboard';
        }
    }, [actions, tenSteps, min, max]);
    const focusThumb = useCallback(() => {
        setTimeout(() => thumbRef.current?.focus());
    }, []);
    useUpdateEffect(() => {
        const state = stateRef.current;
        focusThumb();
        if (state.eventSource === 'keyboard') {
            onChangeEnd?.(state.value);
        }
    }, [value, onChangeEnd]);
    function setValueFromPointer(event) {
        const nextValue = getValueFromPointer(event);
        if (nextValue != null && nextValue !== stateRef.current.value) {
            stateRef.current.value = nextValue;
            setValue(nextValue);
        }
    }
    usePointerTracker(wrapRef, {
        onStart(event) {
            if (disabled || readOnly)
                return;
            setIsDragging(true);
            focusThumb();
            onChangeStart?.(stateRef.current.value);
            setValueFromPointer(event);
        },
        onEnd(event) {
            if (disabled || readOnly)
                return;
            setIsDragging(false);
            onChangeEnd?.(stateRef.current.value);
        },
        onMove(event) {
            if (disabled || readOnly)
                return;
            setValueFromPointer(event);
        }
    });
    const getWrapProps = useCallback((wrapProps = {}, ref) => {
        const measurement = isVertical ? 'width' : 'height';
        return {
            ...wrapProps,
            ...htmlProps,
            tabIndex: -1,
            'aria-pressed': isDragging,
            'aria-disabled': disabled,
            style: { [measurement]: `${thumbSize[measurement]}px` },
            ref: mergeRefs(ref, wrapRef)
        };
    }, [disabled, htmlProps, isDragging, thumbSize]);
    const getInputProps = useCallback((inputProps = {}, ref) => {
        return {
            ...inputProps,
            name,
            type: 'hidden',
            ref
        };
    }, [name]);
    const getTrackProps = useCallback((trackProps = {}, ref) => {
        return {
            ...trackProps,
            'aria-pressed': isDragging,
            'aria-disabled': disabled,
            ref: mergeRefs(ref, trackRef)
        };
    }, [disabled]);
    const getThumbProps = useCallback((thumbProps = {}, ref) => {
        return {
            ...thumbProps,
            role: 'slider',
            'aria-pressed': isDragging,
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': value,
            'aria-orientation': orientation,
            'aria-disabled': disabled,
            'aria-readonly': readOnly,
            style: { left: `${thumbPercent}%` },
            onKeyDown: callAllHandlers(thumbProps.onKeyDown, onKeyDown),
            ref: mergeRefs(ref, thumbRef)
        };
    }, [disabled, isDragging, max, min, onKeyDown, orientation, readOnly, thumbPercent, value]);
    return {
        getInputProps,
        getTrackProps,
        getThumbProps,
        getWrapProps,
        isDragging,
        thumbPercent,
        max,
        min,
        step,
        trackRef,
        thumbRef,
        orientation,
        disabled
    };
}

export { useSlider };
