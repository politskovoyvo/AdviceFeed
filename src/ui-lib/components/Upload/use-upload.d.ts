import { DragEvent } from 'react';
import { IGalleryMedia } from '../Gallery/models';
import { IUploadFileState, IUseUploadProps, TUseUploadFileState } from './models';
export type TUseUploadReturn = ReturnType<typeof useUpload>;
export declare function useUpload(props: IUseUploadProps): {
    inputRef: import("react").RefObject<HTMLInputElement>;
    uploadedFiles: TUseUploadFileState[];
    uploadFiles: (fileList: FileList | null) => void;
    state: IUploadFileState;
    limits: {
        sizeLimit: number;
        secondsLimit: number;
        filesLimit: number;
        filesMinimum: number;
    };
    onGalleryChange: (medias: IGalleryMedia[]) => void;
    accept: string | undefined;
    formats: string[] | undefined;
};
export declare function useUploadDrag(): {
    state: IUploadFileState;
    labels: {
        title: string;
        description: string;
        Icon: import("react").ForwardRefExoticComponent<import("react").SVGAttributes<SVGSVGElement> & import("react").RefAttributes<SVGSVGElement>>;
    };
    dragActive: boolean;
    handleClick: () => void | undefined;
    handleDrop: (event: DragEvent) => void;
    handleDragOver: (event: DragEvent) => void;
    handleDragEnter: (event: DragEvent) => void;
    handleDragLeave: (event: DragEvent) => void;
};
