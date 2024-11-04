import { useMemo, createElement, useCallback } from 'react';
import { useControllableState } from '../../utils/hooks/use-controllable-state.js';
import { compareSafeAnyData } from '../../utils/methods/compare-safe-any-data.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { WayProvider, useWayContext } from './two-way-switcher-context.js';
import { getInitialValue } from './utils.js';

function useTwoWaySwitcher(props) {
    const { children: childrenProp, defaultValue: defaultValueProp, value: valueProp, disabled = false, readOnly = false, onChange: onChangeProp } = props;
    const initialValue = useMemo(() => getInitialValue(childrenProp, defaultValueProp, valueProp), [childrenProp]);
    const [value, setValue] = useControllableState({
        defaultValue: initialValue,
        value: valueProp,
        onChange: onChangeProp
    });
    const waysColor = [];
    const validChildren = getValidChildren(childrenProp);
    const ways = validChildren.map((child, i) => {
        waysColor[i] = child.props.trackClassName ?? '';
        return createElement(WayProvider, {
            key: i,
            value: {
                selected: compareSafeAnyData(value, child.props.value),
                index: i,
                disabled
            }
        }, child);
    });
    const onChange = (event) => {
        if (disabled || readOnly)
            return;
        const index = Number(event.target.checked);
        const selectedValue = validChildren[index].props.value;
        setValue(selectedValue);
    };
    const inputProps = {
        onChange,
        checked: compareSafeAnyData(value, validChildren[1].props.value),
        readOnly,
        disabled,
        'aria-disabled': disabled
    };
    const getTrackProps = useCallback((_props = {}) => ({
        ..._props,
        className: `${_props.className} ${waysColor[Number(inputProps.checked)]}`,
        readOnly,
        'aria-disabled': disabled
    }), [inputProps.checked, ways]);
    return {
        inputProps,
        firstWay: ways[0],
        secondWay: ways[1],
        getTrackProps
    };
}
function useWay(props) {
    const { selected, disabled } = useWayContext();
    return {
        selected,
        disabled
    };
}

export { useTwoWaySwitcher, useWay };
