export interface IUploadFile<T = any> {
    file: File;
    src?: string;
    objectUrl: string;
    error?: string;
    id: string;
    loading: boolean;
    needUpload: boolean;
    extra?: T;
}
