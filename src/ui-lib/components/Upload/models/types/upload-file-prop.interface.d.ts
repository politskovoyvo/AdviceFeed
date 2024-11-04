import { TUploadFile } from './upload-file.type';
export type TUploadFileProp = Omit<TUploadFile, 'file'> & Partial<Pick<TUploadFile, 'file'>>;
