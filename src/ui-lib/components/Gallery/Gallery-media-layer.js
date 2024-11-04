import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { LoupeIcon } from '../../icons/application/loupe.icon.js';
import { PlayIcon } from '../../icons/application/play.icon.js';
import { ArrowDownIcon } from '../../icons/directions/arrow-down.icon.js';
import { TinyCrossIcon } from '../../icons/suggested/tiny-cross.icon.js';
import { UIButton } from '../Button/Button.js';
import { useGalleryContext } from './gallery-context.js';
import './models/enums/gallery-preview-formats.enum.js';
import { EGalleryPreviewTypes } from './models/enums/gallery-preview-types.enum.js';
import { GalleryMediaTextSize, GalleryMediaDeleteSize, GalleryMediaIconSize } from './tailwind-variations/size.js';

const UIGalleryMediaLayer = forwardRef((props, ref) => {
    const { editable, showFormat, fieldSize, onSelectMedia } = useGalleryContext();
    const { format, onDelete, id } = props;
    const mediaIcon = useMemo(() => {
        let icon = jsx(Fragment, {});
        switch (format.type) {
            case EGalleryPreviewTypes.video:
                icon = jsx(PlayIcon, {});
                break;
            case EGalleryPreviewTypes.image:
                icon = jsx(LoupeIcon, { className: 'opacity-0 transition-all group-hover:opacity-100' });
                break;
            case EGalleryPreviewTypes.application:
                icon = jsx(ArrowDownIcon, { className: '-rotate-140 opacity-0 transition-opacity group-hover:opacity-100' });
                break;
        }
        return icon;
    }, [format.type]);
    return (jsxs("div", { ref: ref, className: `group absolute bottom-0 left-0 right-0 top-0 z-10 rounded-lg transition-all ${format.type === EGalleryPreviewTypes.video ? 'bg-rus-300' : 'hover:bg-rus-300'}`, children: [jsxs("div", { className: 'flex w-full items-center justify-between gap-0.25 p-1 md:p-2', children: [showFormat && (jsx("span", { className: `${GalleryMediaTextSize[fieldSize]} inline-block overflow-hidden overflow-ellipsis whitespace-nowrap rounded bg-rus-400 uppercase text-walentine-100`, children: format.format })), editable && (jsx(UIButton, { onClick: onDelete, className: `ml-auto rounded-full bg-rus-400 text-walentine-100 ${GalleryMediaDeleteSize[fieldSize]}`, theme: 'empty', children: jsx(TinyCrossIcon, {}) }))] }), jsx("div", { className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', children: jsx(UIButton, { onClick: () => onSelectMedia(id), theme: 'icon', className: `${GalleryMediaIconSize[fieldSize]} text-walentine-100`, children: mediaIcon }) })] }));
});
UIGalleryMediaLayer.displayName = 'UIGalleryMediaLayer';

export { UIGalleryMediaLayer };
