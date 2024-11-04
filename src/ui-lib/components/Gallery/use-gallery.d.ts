/// <reference types="react" />
import { EGalleryPreviewTypes, IGalleryMedia, IUseGalleryMediaProps, IUseGalleryProps } from './models';
import { TGetFormatReturn } from './utils';
export declare function useGallery(props: IUseGalleryProps): {
    children: import("react").ReactNode;
    editable: boolean;
    fieldSize: import("./models").TGalleryMediaSize;
    handleLoadend: () => void;
    loadend: boolean;
    medias: IGalleryMedia[];
    setMediaFormat: (id: string, format: TGetFormatReturn) => void;
    setShowView: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    showView: boolean;
    onDelete: (id: string) => void;
    onSelectMedia: (id: string) => void;
    selectedIdRef: import("react").MutableRefObject<string>;
    showFormat: boolean;
    handleDragStart: (index: number) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    handleDragEnd: () => void;
    draggedIndex: number | null;
};
export declare function useGalleryMedia(props: IUseGalleryMediaProps): {
    format: {
        type: EGalleryPreviewTypes;
        format: import("./models").EGalleryPreviewFormats;
    } | undefined;
    src: {
        objectUrl: string;
        src: string;
    };
    id: string;
    ref: (node: any) => void;
};
export declare function useGalleryView(): {
    selectedIndex: number;
    viewMedia: IGalleryMedia[];
    close: () => void;
    next: () => void;
    select: (index: number) => void;
    mediaListRef: import("react").MutableRefObject<(HTMLDivElement | null)[]>;
    previous: () => void;
    indicatorRef: import("react").MutableRefObject<HTMLDivElement | null>;
};
