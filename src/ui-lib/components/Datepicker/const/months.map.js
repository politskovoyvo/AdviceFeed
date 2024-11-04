import { EMonths } from '../models/enum/months.enum.js';
import '../models/enum/week-days.enum.js';

const MonthsMap = new Map([
    [EMonths.January, 'Январь'],
    [EMonths.February, 'Февраль'],
    [EMonths.March, 'Март'],
    [EMonths.April, 'Апрель'],
    [EMonths.May, 'Май'],
    [EMonths.June, 'Июнь'],
    [EMonths.July, 'Июль'],
    [EMonths.August, 'Август'],
    [EMonths.September, 'Сентябрь'],
    [EMonths.October, 'Октябрь'],
    [EMonths.November, 'Ноябрь'],
    [EMonths.December, 'Декабрь']
]);
const ShortMonthsMap = new Map([
    [EMonths.January, 'Янв'],
    [EMonths.February, 'Фев'],
    [EMonths.March, 'Мар'],
    [EMonths.April, 'Апр'],
    [EMonths.May, 'Май'],
    [EMonths.June, 'Июн'],
    [EMonths.July, 'Июл'],
    [EMonths.August, 'Авг'],
    [EMonths.September, 'Сен'],
    [EMonths.October, 'Окт'],
    [EMonths.November, 'Ноя'],
    [EMonths.December, 'Дек']
]);

export { MonthsMap, ShortMonthsMap };
