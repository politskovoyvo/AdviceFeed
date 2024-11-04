import { useGallery } from '../../use-gallery';
export interface IGalleryContext extends Omit<ReturnType<typeof useGallery>, 'children'> {
}
