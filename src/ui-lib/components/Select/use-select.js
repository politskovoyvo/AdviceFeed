import { useRef, useState, useEffect } from 'react';
import { initDefault, findSelectedValues, findSelectedStore, attachList, filterOptionsByQuery, valueKey } from './utils.js';

function useSelect(props) {
    const { autocomplete = false, disabled = false, disclosure, inputRef = useRef(null), isAllowClear = false, isSearchOutSide = false, list: listProp, multiply = false, onChange, onClear, onSearch, searchable = false, loading = false, value, onCancel, ...htmlProps } = props;
    const { selected: selectedInit, value: valueInit, store } = initDefault(listProp, value);
    const needUpdateRef = useRef(false);
    const [charsCount, setCharsCount] = useState(0);
    const [list, setList] = useState(undefined);
    const [queryList, setQueryList] = useState(undefined);
    const [selected, setSelected] = useState(selectedInit);
    const [selectedStore, setSelectedStore] = useState(store);
    const [oldValue, setOldValue] = useState(valueInit);
    const findInList = (query) => {
        if (list)
            setQueryList(filterOptionsByQuery(list, query));
        else
            setQueryList(undefined);
    };
    const search = (query) => {
        setCharsCount(query.length);
        if (!searchable)
            return;
        if (isSearchOutSide) {
            onSearch?.(query);
        }
        else {
            findInList(query);
        }
    };
    const updateValue = () => {
        const objectValues = Object.values(selected);
        const values = objectValues.filter((v) => v !== undefined).map((o) => o.value);
        const newValue = multiply ? values : values[0];
        const isValueUpdate = valueKey(oldValue) !== valueKey(newValue);
        if (isValueUpdate) {
            setOldValue(newValue);
        }
        if (needUpdateRef.current) {
            needUpdateRef.current = false;
            onChange?.(newValue);
        }
    };
    const addOption = (option) => {
        const newSelected = [...selected, option];
        const newSelectedStore = { ...selectedStore, [option.key]: option };
        setSelected(newSelected);
        setSelectedStore(newSelectedStore);
    };
    const removeOption = (option) => {
        const newSelected = selected.filter((o) => o.key !== option.key);
        const newSelectedStore = { ...selectedStore, [option.key]: undefined };
        setSelected(newSelected);
        setSelectedStore(newSelectedStore);
    };
    const selectOption = (state, option) => {
        setSelected([option]);
        setSelectedStore({ [option.key]: option });
    };
    const toggleOption = (state, option) => {
        if (state) {
            addOption(option);
        }
        else {
            removeOption(option);
        }
    };
    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        findInList('');
        setCharsCount(0);
    };
    const removeAll = () => {
        if (isSearchOutSide) {
            setList(undefined);
        }
        if (searchable) {
            setQueryList(undefined);
        }
        needUpdateRef.current = true;
        setSelected([]);
        setSelectedStore({});
        onClear?.();
        clearInput();
    };
    useEffect(() => {
        if (isSearchOutSide && list) {
            setQueryList(list);
        }
        else {
            findInList(inputRef?.current?.value ?? '');
        }
    }, [list]);
    useEffect(() => {
        const founded = findSelectedValues(value, listProp);
        setSelected(founded);
        setSelectedStore(findSelectedStore(founded));
    }, [value]);
    useEffect(() => {
        updateValue();
    }, [selectedStore]);
    useEffect(() => {
        setList(attachList(listProp));
    }, [listProp]);
    return {
        addOption,
        autocomplete,
        charsCount,
        clearInput,
        disabled,
        disclosure,
        htmlProps,
        inputRef,
        isAllowClear,
        list,
        multiply,
        needUpdateRef,
        queryList,
        removeAll,
        removeOption,
        search,
        searchable,
        selectOption,
        selected,
        selectedStore,
        toggleOption,
        loading,
        value,
        onCancel
    };
}

export { useSelect };
