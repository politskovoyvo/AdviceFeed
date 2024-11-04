import { jsx } from 'react/jsx-runtime';
import './const/months.map.js';
import { ShortWeekDaysMap } from './const/week-days.map.js';

const WeekDays = () => {
    const weekdays = Array.from(ShortWeekDaysMap, ([key, value]) => value);
    return (jsx("div", { className: 'grid grid-cols-7 grid-rows-1 justify-items-start rounded-full bg-opacity-10 py-1 text-center text-sm font-medium text-rus-400', children: weekdays.map((wd, i) => (jsx("span", { className: 'w-8', children: wd }, i))) }));
};

export { WeekDays };
