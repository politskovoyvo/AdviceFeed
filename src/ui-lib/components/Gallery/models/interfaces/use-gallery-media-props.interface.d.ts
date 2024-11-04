import { Ref } from 'react';
import { TGetFormatReturn } from '../../utils';
export interface IUseGalleryMediaProps {
    file?: File;
    src?: string;
    objectUrl: string;
    loading?: boolean;
    format?: TGetFormatReturn;
    id: string;
    ref: Ref<any>;
}
