import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef, useEffect, createElement } from 'react';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { LargeCheckIcon } from '../../icons/suggested/large-check.icon.js';
import { UICheckbox } from '../Checkbox/Checkbox.js';
import '../Checkbox/Checkbox-button.js';
import { useSelectContext } from './Select-context.js';
import { SelectSizesListIcon, SelectSizesListItem, SelectMaxPaddingHeightPercent } from './tailwind-variations/sizes.js';

const SelectList = ({ optionTemplate, maxOptionsOverflow, fieldSize, className = '' }) => {
    const { queryList, multiply, needUpdateRef, loading, selected, toggleOption, selectedStore, selectOption, disclosure } = useSelectContext();
    const refs = useRef(queryList ? Array.from(Array(queryList.length)) : []);
    const iconClasses = `${SelectSizesListIcon[fieldSize]}`;
    const itemClasses = `${SelectSizesListItem[fieldSize]}`;
    useEffect(() => {
        if (!queryList)
            return;
        for (let i = 0; i < selected.length; i++) {
            const index = queryList.findIndex((o) => o.key === selected[i].key);
            if (index !== -1) {
                if (refs.current) {
                    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                    // TODO HEYTA
                    const top = refs.current[index].offsetTop - SelectMaxPaddingHeightPercent[fieldSize] * fontSize;
                    setTimeout(() => (refs.current[index].parentElement.scrollTop = top), 1);
                }
                break;
            }
        }
    }, []);
    const handleToggleCheckbox = (state, option) => {
        if (multiply) {
            toggleOption(state, option);
        }
        else {
            selectOption(state, option);
            disclosure.close();
        }
        needUpdateRef.current = true;
    };
    return (jsxs(Fragment, { children: [loading && (jsxs("div", { className: `${itemClasses} flex items-center gap-1.5`, children: [jsx("span", { className: 'text-primary-500', children: jsx(LoadingIcon, {}) }), jsx("span", { className: 'text-rus-300', children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." })] })), !loading &&
                queryList &&
                queryList.map((option, i) => (jsxs("label", { ref: (e) => (refs.current[i] = e), className: `${itemClasses} group flex shrink-0 cursor-pointer items-center rounded-2 text-yuri-400 hover:bg-primary-200 dark:text-walentine-500 dark:hover:bg-primary-1400`, children: [jsx(UICheckbox, { className: '-ml-2 hidden', checked: !!selectedStore[option.key], onChange: (e) => handleToggleCheckbox(e.target.checked, option) }), optionTemplate ? createElement(optionTemplate, option) : option.label, selectedStore[option.key] && (jsx("span", { className: `${iconClasses} ml-auto text-primary-700`, children: jsx(LargeCheckIcon, {}) }))] }, i))), queryList && !queryList.length && !loading && (jsx("span", { className: `${itemClasses} mx-auto flex items-center text-rus-300`, children: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445" }))] }));
};

export { SelectList };
