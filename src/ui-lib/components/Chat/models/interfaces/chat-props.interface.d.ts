import { TChatMessages } from '../types';
export interface IChatProps {
    className?: string;
    /** показать / скрыть поле ввода сообщения*/
    readOnly?: boolean;
    /** заблокировать поле ввода сообщения*/
    disabled?: boolean;
    /** убрать рамку вокруг чата*/
    empty?: boolean;
    /** массив сообщений*/
    messages?: TChatMessages[];
    /** метод получения значения сообщения*/
    sendMethod: (message: string) => Promise<any>;
}
