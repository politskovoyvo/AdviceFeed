import { jsxs, jsx } from 'react/jsx-runtime';
import { memo, useState, useEffect } from 'react';
import { getStartDay, toDate } from '../../utils/methods/date.js';
import { useDatePickerContext } from './date-picker-context.js';
import { MonthDays } from './month-days.js';
import { MonthSelector } from './month-selector.js';
import { WeekDays } from './week-days.js';
import { YearSelector } from './year-selector.js';

const DatePickerDropdown = memo(({ selectedDate, onSelectDate, disableBefore, disableAfter }) => {
    const { currentDate } = useDatePickerContext();
    const selectedDay = getStartDay(selectedDate ? selectedDate : currentDate);
    const [selected, setSelected] = useState(selectedDay);
    const [month, setMonth] = useState(selectedDay.getMonth());
    const [year, setYear] = useState(selectedDay.getFullYear());
    const handleDaySelect = ({ date, year: yearSelected, month: monthSelected }) => {
        setYear(yearSelected);
        setMonth(monthSelected);
        setSelected(date);
        onSelectDate?.(date);
    };
    useEffect(() => {
        if (selectedDate) {
            const day = toDate(selectedDate);
            setMonth(day.getMonth());
            setYear(day.getFullYear());
            setSelected(day);
        }
    }, [selectedDate]);
    return (jsxs("div", { className: 'flex flex-col rounded-xl bg-walentine-100 px-3 py-2 shadow-md2 shadow-walentine-400', children: [jsxs("div", { className: 'mb-2 flex items-center gap-1', children: [jsx(MonthSelector, { onChange: setMonth, value: month }), jsx(YearSelector, { onChange: setYear, value: year })] }), jsx(WeekDays, {}), jsx(MonthDays, { month: month, year: year, selected: selected, currentDate: currentDate, onDateSelect: handleDaySelect })] }));
});
DatePickerDropdown.displayName = 'DatePickerDropdown';

export { DatePickerDropdown };
