import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { CheckIcon } from '../../icons/suggested/check.icon.js';

const StepComplete = () => {
    const [arrow, setArrow] = useState('hide-arrow');
    useEffect(() => setArrow((v) => (v += ' show-arrow')), []);
    return (jsx("div", { className: `${arrow} text-i-20 text-walentine-100 transition-all duration-500 ease-in-out`, children: jsx(CheckIcon, {}) }));
};

export { StepComplete };
