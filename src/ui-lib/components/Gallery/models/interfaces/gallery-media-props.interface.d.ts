import React from 'react';
import { IGalleryMedia } from './gallery-media.interface';
export interface IGalleryMediaProps extends IGalleryMedia {
    onDelete(): void;
    className?: string;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
    isDragged?: boolean;
    draggable?: boolean;
}
