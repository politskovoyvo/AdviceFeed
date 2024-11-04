import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo, createElement } from 'react';
import { GalleryContext } from './gallery-context.js';
import { UIGalleryMedia } from './Gallery-media.js';
import { GalleryView } from './Gallery-view.js';
import { GalleryMedia, GalleryMediaSize } from './tailwind-variations/size.js';
import { useGallery } from './use-gallery.js';

const UIGallery = forwardRef((props, ref) => {
    const { className = '', draggable = false, ...rest } = props;
    const { children, ...ctx } = useGallery(rest);
    const context = useMemo(() => ctx, [ctx]);
    const galleryClass = GalleryMedia[ctx.fieldSize];
    const galleryMediaClass = GalleryMediaSize[ctx.fieldSize];
    return (jsxs(GalleryContext.Provider, { value: context, children: [jsxs("div", { ref: ref, className: `select-none ${className} ${galleryClass} ${!context.loadend ? 'hidden' : 'flex flex-wrap'}`, children: [context.medias.map((media, index) => (createElement(UIGalleryMedia, { ...media, key: media.id, onDelete: () => context.onDelete(media.id), onDragStart: () => context.handleDragStart(index), onDragOver: (e) => context.handleDragOver(e, index), onDragEnd: () => context.handleDragEnd(), isDragged: index === context.draggedIndex, draggable: draggable }))), children, !context.loadend && jsx("div", { className: `${galleryMediaClass} relative animate-pulse overflow-hidden rounded-lg bg-walentine-500` })] }), jsx(GalleryView, {})] }));
});
UIGallery.displayName = 'UIGallery';

export { UIGallery };
