import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { firstDayOfMonth, fillZeroNumber, lastDayOfMonth, toDate, eachDayOfInterval, isSameDate } from '../../utils/methods/date.js';
import { UIButton } from '../Button/Button.js';
import { DateColors } from './tailwind-variations/date-colors.js';

const MonthDays = ({ selected, currentDate, month, year, onDateSelect }) => {
    const [days, setDays] = useState([]);
    const calendarCells = 42;
    useEffect(() => {
        const monthFirstDay = firstDayOfMonth(`${year}-${fillZeroNumber(month + 1)}-01`);
        const monthLastDay = lastDayOfMonth(monthFirstDay);
        let weekday = monthFirstDay.getDay();
        weekday = weekday === 0 ? 6 : weekday - 1;
        const dateFrom = toDate(monthFirstDay);
        const dateTo = toDate(monthLastDay);
        dateFrom.setDate(dateFrom.getDate() - weekday);
        dateTo.setDate(dateTo.getDate() + (calendarCells - dateTo.getDate()) - weekday);
        setDays(eachDayOfInterval(dateFrom, dateTo));
    }, [month, year]);
    const styleDate = (date) => {
        if (!isSameDate(selected, date) && date.getMonth() === month) {
            return DateColors.default;
        }
        if (date.getMonth() !== month) {
            return DateColors.out;
        }
        if (selected && isSameDate(selected, date)) {
            return DateColors.selected;
        }
        if (isSameDate(currentDate, date)) {
            return DateColors.current;
        }
    };
    const handleSelectDate = (date) => {
        onDateSelect({
            date: date,
            month: date.getMonth(),
            year: date.getFullYear()
        });
    };
    return (jsx("div", { className: 'mb-3 mt-2 grid grid-cols-7 grid-rows-6 gap-1', children: days.map((d, i) => (jsx(UIButton, { onClick: () => handleSelectDate(d), theme: 'empty', type: 'button', className: `flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-background ${styleDate(d)}`, children: d.getDate() }, i))) }));
};

export { MonthDays };
