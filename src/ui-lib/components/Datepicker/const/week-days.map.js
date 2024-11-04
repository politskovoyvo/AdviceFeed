import '../models/enum/months.enum.js';
import { EWeekDays } from '../models/enum/week-days.enum.js';

const WeekDaysMap = new Map([
    [EWeekDays.Monday, 'Понедельник'],
    [EWeekDays.Tuesday, 'Вторник'],
    [EWeekDays.Wednesday, 'Среда'],
    [EWeekDays.Thursday, 'Четверг'],
    [EWeekDays.Friday, 'Пятница'],
    [EWeekDays.Saturday, 'Суббота'],
    [EWeekDays.Sunday, 'Воскресенье']
]);
const ShortWeekDaysMap = new Map([
    [EWeekDays.Monday, 'ПН'],
    [EWeekDays.Tuesday, 'ВТ'],
    [EWeekDays.Wednesday, 'СР'],
    [EWeekDays.Thursday, 'ЧТ'],
    [EWeekDays.Friday, 'ПТ'],
    [EWeekDays.Saturday, 'СБ'],
    [EWeekDays.Sunday, 'ВС']
]);

export { ShortWeekDaysMap, WeekDaysMap };
