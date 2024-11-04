import { jsxs, jsx } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { forwardRef } from 'react';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { useGalleryContext } from './gallery-context.js';
import { UIGalleryMediaLayer } from './Gallery-media-layer.js';
import { GalleryPreview } from './Gallery-preview.js';
import { GalleryMediaSize } from './tailwind-variations/size.js';
import { useGalleryMedia } from './use-gallery.js';

const UIGalleryMedia = forwardRef((props, refProp) => {
    const { loading, onDelete, className = '', onDragStart, onDragOver, onDragEnd, isDragged, draggable, ...rest } = props;
    const { fieldSize } = useGalleryContext();
    const { format, src, id, ref } = useGalleryMedia({ ...rest, ref: refProp });
    const galleryMediaClass = GalleryMediaSize[fieldSize];
    return (jsxs("div", { ref: ref, className: `relative z-0 flex flex-shrink-0 overflow-hidden rounded-lg ${galleryMediaClass} ${className}`, onDragStart: onDragStart, onDragOver: onDragOver, onDragEnd: onDragEnd, draggable: draggable, children: [!format && (jsx("div", { className: 'flex h-full w-full items-center justify-center bg-walentine-400 text-rus-500', children: jsx(LoadingIcon, { className: 'h-1/5 w-1/5' }) })), format && (jsx(Transition, { show: !isDragged, children: jsx("div", { className: 'h-full w-full scale-100 transition-all duration-150 ease-linear data-[leave]:scale-75', children: jsx(TransitionChild, { children: jsxs("span", { className: 'scale-100 transition-all duration-150 ease-linear data-[closed]:scale-75', children: [jsx(GalleryPreview, { format: format, ...src }), !loading && jsx(UIGalleryMediaLayer, { id: id, onDelete: onDelete, format: format })] }) }) }) })), loading && (jsx("div", { className: 'absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center text-walentine-100 backdrop-blur-sm', children: jsx(LoadingIcon, { className: 'h-2/5 w-2/5' }) }))] }));
});
UIGalleryMedia.displayName = 'UIGalleryMedia';

export { UIGalleryMedia };
