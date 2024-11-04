import { ISelectCommonProps } from '../interfaces';
export type TSelectSearchProps = Required<ISelectCommonProps> & {
    id: string;
    placeholder?: string;
    insideOverlay?: boolean;
    disabled?: boolean;
};
