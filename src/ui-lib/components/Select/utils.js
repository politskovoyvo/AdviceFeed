const valueKey = (value) => {
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
};
function attachList(options) {
    if (!options)
        return options;
    const types = ['string', 'number'];
    return options.map((o) => {
        let text = '';
        if (types.includes(typeof o.value)) {
            text += String(o.value);
        }
        if (types.includes(typeof o.extra)) {
            text += String(o.extra);
        }
        if (types.includes(typeof o.label)) {
            text += String(o.label);
        }
        return { ...o, text: text.toLowerCase(), key: valueKey(o.value) };
    });
}
function filterOptionsByQuery(list, query) {
    if (!query || !list)
        return list;
    query = query.trim().toLowerCase().replace(/ё/, 'е');
    return list.filter((i) => i.text.includes(query));
}
function findSelectedValues(value, list) {
    if (value === undefined || !list)
        return [];
    let result = [];
    if (Array.isArray(value)) {
        result = list.filter((i) => value.includes(i.value));
    }
    else {
        const founded = list.find((i) => i.value === value);
        result = founded ? [founded] : [];
    }
    return result.map((o) => ({ ...o, text: String(o.label).toLowerCase(), key: valueKey(o.value) }));
}
function findSelectedStore(selected) {
    const result = {};
    if (!selected.length)
        return result;
    for (let i = 0; i < selected.length; i++) {
        result[selected[i].value] = selected[i];
    }
    return result;
}
function initDefault(list, value) {
    const result = { selected: [], store: {}, value };
    if (!list || !value)
        return result;
    const isArray = Array.isArray(value);
    const values = isArray ? value : [value];
    for (let i = 0; i < values.length; i++) {
        const strValue = valueKey(values[i]);
        const option = list.find((o) => valueKey(o.value) === strValue);
        if (option) {
            const jsonValue = valueKey(option.value);
            result.selected.push({ ...option, text: String(option.label).toLowerCase(), key: valueKey(option.value) });
            result.store[jsonValue] = option;
        }
    }
    return result;
}

export { attachList, filterOptionsByQuery, findSelectedStore, findSelectedValues, initDefault, valueKey };
