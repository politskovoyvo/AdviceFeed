import { IUseGalleryMediaProps } from './use-gallery-media-props.interface';
export type TGalleryMedia = Omit<IGalleryMedia, 'id' | 'objectUrl'> & Partial<Pick<IGalleryMedia, 'id' | 'objectUrl'>>;
export interface IGalleryMedia extends Omit<IUseGalleryMediaProps, 'ref'> {
    objectUrl: string;
}
