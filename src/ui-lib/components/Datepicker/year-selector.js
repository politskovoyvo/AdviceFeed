import { jsx } from 'react/jsx-runtime';
import { UISelect } from '../Select/Select.js';

const YearSelector = ({ onChange, value }) => {
    const firstYear = 2077;
    const years = Array.from(Array(177)).map((v, i) => ({ value: firstYear - i, label: firstYear - i }));
    const handleChange = (v) => {
        onChange(Number(v));
    };
    return (jsx("div", { children: jsx(UISelect, { fieldSize: 'small', dropdownTitle: 'Год', theme: 'transparent', list: years, value: value, onChange: handleChange }) }));
};

export { YearSelector };
