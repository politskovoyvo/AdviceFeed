import { EGalleryPreviewFormats, EGalleryPreviewTypes } from './models';
export declare function getContentType(url: string): Promise<any>;
export type TGetFormatReturn = ReturnType<typeof getFormat>;
/** Получение формата из контент тайпа video/mp4 image/png */
export declare function getFormat(str: string | null): {
    type: EGalleryPreviewTypes;
    format: EGalleryPreviewFormats;
} | undefined;
