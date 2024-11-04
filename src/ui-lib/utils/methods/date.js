const MILLISECONDS_IN_DAY = 86400000;
const fillZeroNumber = (num) => ('00' + String(num)).slice(-2);
const toDate = (date) => {
    if (date instanceof Date) {
        return new Date(date);
    }
    else if (typeof date === 'number') {
        return new Date(date);
    }
    else if (typeof date === 'string') {
        try {
            return new Date(date);
        }
        catch (e) {
            console.error(`Неверная строка даты: ${date}`);
            return new Date(NaN);
        }
    }
    return new Date(NaN);
};
const getStartDay = (date) => {
    const realDate = toDate(date);
    realDate.setUTCHours(0, 0, 0, 0);
    return realDate;
};
const differentInDays = (from, to) => {
    const dateFrom = getStartDay(from);
    const dateTo = getStartDay(to);
    return Math.round((dateTo.getTime() - dateFrom.getTime()) / MILLISECONDS_IN_DAY);
};
const firstDayOfMonth = (date) => {
    const realDate = getStartDay(date);
    realDate.setDate(1);
    return realDate;
};
const lastDayOfMonth = (date) => {
    const realDate = getStartDay(date);
    const month = realDate.getMonth();
    realDate.setFullYear(realDate.getFullYear(), month + 1, 0);
    return realDate;
};
const eachDayOfInterval = (from, to, interval = 1) => {
    if (interval < 1) {
        throw new Error('Интервал меньше 1');
    }
    const result = [];
    const dateFrom = getStartDay(from);
    const dateTo = getStartDay(to);
    if (dateFrom.getTime() >= dateTo.getTime()) {
        throw new Error(`Дата ОТ больше чем дата ДО ${dateFrom.toISOString()} - ${dateTo.toISOString()}`);
    }
    const currentDate = dateFrom;
    const endTime = dateTo.getTime();
    while (currentDate.getTime() <= endTime) {
        result.push(toDate(currentDate));
        currentDate.setDate(currentDate.getDate() + interval);
    }
    return result;
};
const defaultDatePicker = () => {
    const currentDate = getStartDay(new Date());
    return {
        currentDate: currentDate
    };
};
const isSameDate = (dateA, dateB) => {
    const a = getStartDay(dateA);
    const b = getStartDay(dateB);
    return a.getTime() === b.getTime();
};
/** Для дат российского формата dd.MM.YYYY */
const ruToDate = (date) => {
    const [day, month, year] = date.split('.');
    return toDate(`${year}-${month}-${day}`);
};
const formatDate = (dateToFormat, format) => {
    const realDate = toDate(dateToFormat);
    const [date, time] = realDate.toLocaleString('sv').split(' ');
    const [year, month, day] = date.split('-');
    const [hours, minutes, secondsWithMille] = time.split(':');
    const seconds = secondsWithMille.slice(-2);
    const shortYear = year.slice(-2);
    const formats = {
        ss: seconds,
        mm: minutes,
        hh: hours,
        dd: day,
        MM: month,
        YYYY: year,
        YY: shortYear
    };
    const regExp = new RegExp(Object.keys(formats).join('|'), 'gi');
    return format.replace(regExp, (matched) => formats[matched]);
};

export { MILLISECONDS_IN_DAY, defaultDatePicker, differentInDays, eachDayOfInterval, fillZeroNumber, firstDayOfMonth, formatDate, getStartDay, isSameDate, lastDayOfMonth, ruToDate, toDate };
