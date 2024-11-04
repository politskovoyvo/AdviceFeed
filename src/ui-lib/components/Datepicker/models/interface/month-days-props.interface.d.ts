import { IMonthDaysSelect } from './month-days-select.interface';
export interface IMonthDaysProps {
    month: number;
    year: number;
    currentDate: Date;
    selected: Date;
    onDateSelect(value: IMonthDaysSelect): void;
}
