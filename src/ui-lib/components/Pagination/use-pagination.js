import { useState, useRef, useEffect } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { useUpdateEffect } from '../../utils/hooks/use-update-effect.js';
import { usePaginationContext } from './pagination-context.js';
import { generateSteps } from './utils.js';

function usePagination(props) {
    const { total, onChange, disabled = false, readOnly = false, ...htmlProps } = props;
    const [totalSteps, setTotalSteps] = useState(1);
    const sizeRef = useRef(10);
    const stepRef = useRef(1);
    const updateState = () => {
        setTotalSteps(Math.ceil(total / sizeRef.current));
    };
    const updateSteps = () => {
        const to = stepRef.current * sizeRef.current;
        const from = Math.max(to - sizeRef.current, 0);
        onChange?.(from, to);
    };
    useEffect(() => {
        updateState();
    }, [total]);
    return {
        disabled,
        readOnly,
        totalSteps,
        total,
        sizeRef,
        stepRef,
        updateSteps,
        updateState,
        htmlProps
    };
}
function usePaginationSize(props) {
    const { value: valueProp, defaultValue, onChange: onChangeProp, options, ...htmlProps } = props;
    const { sizeRef, disabled, readOnly, updateState } = usePaginationContext();
    const [optionsList, setOptionsList] = useState([]);
    const [size, setSize] = useControllableState({
        value: valueProp,
        defaultValue: defaultValue ?? sizeRef.current,
        onChange: onChangeProp
    });
    const onChange = (value) => {
        setSize(value);
    };
    useEffect(() => {
        // TODO Переделать после рефача селектора
        const selectOptions = (options ?? [10, 20, 50]).map((o) => ({ value: o, label: `По ${o} на странице` }));
        setOptionsList(selectOptions);
    }, [options]);
    useEffect(() => {
        sizeRef.current = size;
        updateState();
    }, [size]);
    return {
        onChange,
        disabled,
        size,
        readOnly,
        optionsList,
        htmlProps
    };
}
function usePaginationSteps(props) {
    const { value, defaultValue = 1, onChange, ...htmlProps } = props;
    const { stepRef, sizeRef, disabled, readOnly, totalSteps, updateSteps } = usePaginationContext();
    const [disableState, setDisableState] = useState({ increase: disabled, decrease: disabled });
    const [step, setStep] = useControllableState({
        value,
        defaultValue,
        onChange
    });
    const currentPage = useRef(1);
    const [stepsView, setStepsView] = useState([]);
    const buttonSteps = 1;
    const boundary = 1;
    const increase = () => {
        if (disabled || readOnly || disableState.increase)
            return;
        setStep(step + 1);
    };
    const decrease = () => {
        if (disabled || readOnly || disableState.decrease)
            return;
        setStep(step - 1);
    };
    const chooseStep = (choice) => {
        if (disabled || readOnly)
            return;
        if (typeof choice === 'number') {
            currentPage.current = choice;
            setStep(choice);
        }
        else if (choice === 'prev') {
            currentPage.current -= buttonSteps * 2 + 1;
            const buttons = generateSteps(currentPage.current, totalSteps, sizeRef.current, buttonSteps, boundary);
            setStepsView(buttons);
        }
        else if (choice === 'next') {
            currentPage.current += buttonSteps * 2 + 1;
            const buttons = generateSteps(currentPage.current, totalSteps, sizeRef.current, buttonSteps, boundary);
            setStepsView(buttons);
        }
    };
    const updateView = () => {
        stepRef.current = step;
        setDisableState({ increase: step === totalSteps, decrease: step === 1 });
        const buttons = generateSteps(step, totalSteps, sizeRef.current, buttonSteps, boundary);
        setStepsView(buttons);
    };
    useUpdateEffect(() => {
        updateView();
        updateSteps();
    }, [step]);
    useEffect(() => {
        if (step > totalSteps) {
            setStep(Math.max(totalSteps, 1));
        }
        else {
            updateView();
        }
    }, [totalSteps]);
    return {
        htmlProps,
        step,
        disableState,
        disabled,
        stepsView,
        increase,
        decrease,
        chooseStep
    };
}

export { usePagination, usePaginationSize, usePaginationSteps };
