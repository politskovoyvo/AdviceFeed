import { TUploadFile, TUploadFileProp } from '../types';
export interface IUseUploadProps {
    sizeLimit?: number;
    filesMinimum?: number;
    filesLimit?: number;
    secondsLimit?: number;
    /** https://www.iana.org/assignments/media-types/media-types.xhtml
     * .jpg, .pdf, .doc
     *
     * The string audio/* meaning "any audio file".
     *
     * The string video/* meaning "any video file".
     *
     * The string image/* meaning "any image file".
     *
     */
    formats?: string[];
    files?: TUploadFileProp[];
    onChange?(files: TUploadFile[]): void;
    uploadMethod?: <T>(file: File) => Promise<{
        src?: string;
        extra?: T;
    }>;
}
