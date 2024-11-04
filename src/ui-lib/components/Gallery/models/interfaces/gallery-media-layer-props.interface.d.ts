import { EGalleryPreviewFormats, EGalleryPreviewTypes } from '../enums';
export interface IGalleryMediaLayerProps {
    format: {
        type: EGalleryPreviewTypes;
        format: EGalleryPreviewFormats;
    };
    onDelete(): void;
    id: string;
}
