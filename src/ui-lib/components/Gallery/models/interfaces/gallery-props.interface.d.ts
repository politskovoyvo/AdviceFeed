import { ReactNode } from 'react';
import { TGalleryMediaSize } from '../types';
import { IGalleryMedia, TGalleryMedia } from './gallery-media.interface';
export interface IGalleryProps {
    fieldSize?: TGalleryMediaSize;
    editable?: boolean;
    showFormat?: boolean;
    children?: ReactNode;
    medias: TGalleryMedia[];
    onChange?(medias: IGalleryMedia[]): void;
    className?: string;
    draggable?: boolean;
}
