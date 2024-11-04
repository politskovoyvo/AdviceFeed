import type { TDate } from '../../../../utils/methods/date';
export interface IDatePickerProps {
    /** Выбранная дата */
    selectedDate?: string;
    /** Обработчик выбора даты */
    onSelectDate?(date: Date): void;
    /** Временно не работает */
    disableBefore?: TDate;
    /** Временно не работает */
    disableAfter?: TDate;
    /** После выбора даты календарь не закрывается */
    closeAfterSelect?: boolean;
    value?: string;
}
