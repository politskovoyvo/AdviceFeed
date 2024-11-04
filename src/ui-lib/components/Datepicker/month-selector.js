import { jsx } from 'react/jsx-runtime';
import { UISelect } from '../Select/Select.js';
import { MonthsMap } from './const/months.map.js';
import './const/week-days.map.js';

const MonthSelector = ({ onChange, value }) => {
    const months = Array.from(MonthsMap, ([key, v]) => ({
        value: key,
        label: v
    }));
    const handleChange = (v) => {
        onChange(Number(v));
    };
    return (jsx("div", { children: jsx(UISelect, { fieldSize: 'small', dropdownTitle: 'Месяц', theme: 'transparent', list: months, value: value, onChange: handleChange }) }));
};

export { MonthSelector };
