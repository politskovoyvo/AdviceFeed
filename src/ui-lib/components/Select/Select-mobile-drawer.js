import { jsx } from 'react/jsx-runtime';
import { SelectList } from './Select-list.js';

const SelectMobileDrawer = ({ optionTemplate, fieldSize }) => {
    return jsx(SelectList, { optionTemplate: optionTemplate, fieldSize: fieldSize, maxOptionsOverflow: 40 });
};

export { SelectMobileDrawer };
