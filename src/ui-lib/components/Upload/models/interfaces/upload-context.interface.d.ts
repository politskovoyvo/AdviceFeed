import { TUseUploadReturn } from '../../use-upload';
export interface IUploadContext extends Omit<TUseUploadReturn, 'accept'> {
}
