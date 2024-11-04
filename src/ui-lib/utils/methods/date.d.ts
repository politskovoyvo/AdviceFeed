import { IDatePickerContext } from '../../components/Datepicker/models';
export type TDate = Date | number | string;
export declare const MILLISECONDS_IN_DAY = 86400000;
export declare const fillZeroNumber: (num: number | string) => string;
export declare const toDate: (date: TDate) => Date;
export declare const getStartDay: (date: TDate) => Date;
export declare const differentInDays: (from: TDate, to: TDate) => number;
export declare const firstDayOfMonth: (date: TDate) => Date;
export declare const lastDayOfMonth: (date: TDate) => Date;
export declare const eachDayOfInterval: (from: TDate, to: TDate, interval?: number) => Date[];
export declare const defaultDatePicker: () => IDatePickerContext;
export declare const isSameDate: (dateA: TDate, dateB: TDate) => boolean;
/** Для дат российского формата dd.MM.YYYY */
export declare const ruToDate: (date: string) => Date;
export declare const formatDate: (dateToFormat: TDate, format: string) => string;
