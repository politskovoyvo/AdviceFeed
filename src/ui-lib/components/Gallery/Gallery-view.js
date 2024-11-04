import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { forwardRef } from 'react';
import { ArrowDownIcon } from '../../icons/directions/arrow-down.icon.js';
import { TinyCrossIcon } from '../../icons/suggested/tiny-cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { UIPortal } from '../Portal/Portal.js';
import { useGalleryContext } from './gallery-context.js';
import { UIGalleryMedia } from './Gallery-media.js';
import './models/enums/gallery-preview-formats.enum.js';
import { EGalleryPreviewTypes } from './models/enums/gallery-preview-types.enum.js';
import { useGalleryView } from './use-gallery.js';

const SourceView = (props) => {
    let element = jsx(Fragment, {});
    if ((!props.objectUrl && !props.src) || !props.format)
        return element;
    const src = props.objectUrl || props.src;
    switch (props.format.type) {
        case EGalleryPreviewTypes.image:
            element = (jsx("img", { decoding: "async", loading: "lazy", style: props.style, className: 'h-full w-full object-contain object-center', src: src, alt: props.src }));
            break;
        case EGalleryPreviewTypes.video:
            element = (jsx("video", { style: props.style, src: src + '#t=0.001', controls: true, preload: "metadata", autoPlay: true, className: 'h-full w-full object-contain object-center', children: "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E" }));
            break;
    }
    return element;
};
const GalleryView = forwardRef((props, ref) => {
    const { onDelete, showView } = useGalleryContext();
    const { selectedIndex, mediaListRef, indicatorRef, viewMedia, select, close, next, previous } = useGalleryView();
    return (jsx(UIPortal, { children: jsx(Transition, { show: showView, children: jsx("div", { ref: ref, className: `
        fixed bottom-0 left-0 right-0 top-0 z-20 bg-rus-600 opacity-100 transition-opacity
        duration-75 data-[closed]:opacity-0 data-[enter]:ease-in data-[leave]:ease-out
        `, children: jsx(TransitionChild, { children: jsxs("div", { ref: ref, className: `
                relative h-full w-full translate-y-0 opacity-100 transition-all duration-150 ease-linear
                data-[closed]:-translate-y-9 data-[closed]:opacity-0
                `, children: [jsx("div", { className: "absolute right-4 top-4 z-10 md:right-8 md:top-8", children: jsx(UIButton, { onClick: close, className: 'ml-auto w-fit rounded-full bg-yuri-200 text-i-24 text-walentine-100 hover:bg-yuri-100 active:hover:bg-yuri-300 md:p-2.5 md:text-i-40', theme: 'empty', children: jsx(TinyCrossIcon, {}) }) }), jsxs("div", { className: 'grid h-full grid-rows-1 gap-10', children: [jsxs("div", { className: 'flex w-full items-center justify-center gap-8 pl-4 pr-4 md:pl-8 md:pr-8', children: [jsx(UIButton, { onClick: previous, theme: 'empty', className: 'hidden rounded-full bg-yuri-200 text-i-18 text-walentine-100 hover:bg-yuri-100 active:hover:bg-yuri-300 md:block md:p-3 md:text-i-24', children: jsx(ArrowDownIcon, { className: 'rotate-90' }) }), jsx("div", { className: 'flex h-full w-full items-center md:max-h-7/10 md:max-w-6/10', children: viewMedia[selectedIndex] && (jsx(SourceView, { format: viewMedia[selectedIndex].format, src: viewMedia[selectedIndex].src, objectUrl: viewMedia[selectedIndex].objectUrl })) }), jsx(UIButton, { onClick: next, theme: 'empty', className: 'hidden rounded-full bg-yuri-200 text-i-18 text-walentine-100 hover:bg-yuri-100 active:hover:bg-yuri-300 md:block md:p-3 md:text-i-24', children: jsx(ArrowDownIcon, { className: '-rotate-90' }) })] }), jsxs("div", { className: 'scrollbar-hidden relative flex w-full select-none snap-x gap-2 overflow-x-auto pb-2 pl-4 pr-4 md:gap-4 md:pb-4 md:pl-8 md:pr-8', children: [jsx("div", { ref: indicatorRef, className: 'absolute z-10 rounded-lg border-2 border-walentine-100 transition-all' }), viewMedia.map((media, index) => (jsx("div", { className: 'cursor-pointer snap-center', ref: (e) => (mediaListRef.current[index] = e), onClick: () => select(index), children: jsx(UIGalleryMedia, { className: 'pointer-events-none', ...media, onDelete: () => onDelete(media.id) }) }, media.id)))] })] })] }) }) }) }) }));
});
GalleryView.displayName = 'GalleryView';

export { GalleryView };
