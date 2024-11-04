import { CSSProperties } from 'react';
import { EGalleryPreviewFormats, EGalleryPreviewTypes } from '../enums';
export interface IGalleryPreviewProps {
    format: {
        type: EGalleryPreviewTypes;
        format: EGalleryPreviewFormats;
    };
    objectUrl: string;
    src: string;
    style?: CSSProperties;
}
