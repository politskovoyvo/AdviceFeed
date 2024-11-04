import { IUploadFile } from '../interfaces';
export type TUploadFile = Omit<IUploadFile, 'error' | 'id' | 'needUpload' | 'loading' | 'objectUrl'> & Partial<Pick<IUploadFile, 'id' | 'needUpload' | 'loading' | 'objectUrl'>>;
