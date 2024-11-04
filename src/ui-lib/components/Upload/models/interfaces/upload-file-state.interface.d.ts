export type TUploadFileStatus = 'success' | 'error';
export interface IUploadFileState {
    message: string;
    status: TUploadFileStatus;
    show: boolean;
}
