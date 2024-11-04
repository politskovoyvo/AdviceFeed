import { AvatarSizeType } from '../types';
export interface IAvatarProps {
    /** путь до изображения*/
    url?: string;
    /** имя ввиде инициалов */
    userName?: string;
    /** размер */
    size?: AvatarSizeType;
}
