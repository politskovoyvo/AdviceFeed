import { useState, useRef, useEffect } from 'react';
import { useRateContext } from './rate-context.js';

function useRate(props) {
    const { clearable = true, decimal = false, disabled = false, fieldSize = 'medium', half = false, onChange: onChangeProp, readonly = false, symbol, value: valueProp = 0, ...htmlProps } = props;
    const [selectedRate, setSelectedRate] = useState(valueProp);
    const [hoveredRate, setHoveredRate] = useState(0);
    const selectRate = (rate) => {
        if (disabled || readonly)
            return;
        const newValue = clearable && rate === selectedRate ? 0 : rate;
        setSelectedRate(newValue);
        onChangeProp?.(newValue);
    };
    const handleMouseMove = (event, value) => {
        if (readonly || disabled)
            return;
        const percent = event.nativeEvent.offsetX / event.currentTarget.clientWidth;
        setHoveredRate(value + percent);
    };
    const handleMouseEnter = (event, value) => {
        if (readonly || disabled)
            return;
        setHoveredRate(value);
    };
    const handleMouseLeave = (event) => {
        if (readonly || disabled)
            return;
        setHoveredRate(0);
    };
    return {
        decimal,
        disabled,
        fieldSize,
        half,
        selectRate,
        symbol,
        selectedRate,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        setHoveredRate,
        hoveredRate,
        htmlProps
    };
}
function useRateItem(props) {
    const { value } = props;
    const { selectedRate, hoveredRate, decimal, half } = useRateContext();
    const [width, setWidth] = useState(0);
    const fillingByValueRef = useRef(0);
    useEffect(() => {
        let result = 0;
        if (selectedRate < value) {
            result = 0;
        }
        else if (value + 1 <= selectedRate) {
            result = 100;
        }
        else {
            const decimalAfter = Number((selectedRate / value).toFixed(2));
            result = decimalAfter * 100;
        }
        fillingByValueRef.current = result;
        setWidth(result);
    }, [selectedRate, value]);
    useEffect(() => {
        if (hoveredRate) {
            let result = 0;
            if (hoveredRate < value) {
                result = 0;
            }
            else if ((!decimal && !half) || value < Math.trunc(hoveredRate)) {
                result = 100;
            }
            else {
                const decimalAfter = Number((hoveredRate % value).toFixed(2));
                result = decimalAfter * 100;
                if (half) {
                    result = result < 50 ? 50 : 100;
                }
            }
            setWidth(result);
        }
        else {
            setWidth(fillingByValueRef.current);
        }
    }, [decimal, half, hoveredRate, value]);
    return { width };
}

export { useRate, useRateItem };
