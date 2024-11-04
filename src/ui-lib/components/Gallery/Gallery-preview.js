import { jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef, useEffect } from 'react';
import { FileIcon } from '../../icons/application/file.icon.js';
import { PdfLogoIcon } from '../../icons/application/pdf-logo.icon.js';
import { useGalleryContext } from './gallery-context.js';
import { EGalleryPreviewFormats } from './models/enums/gallery-preview-formats.enum.js';
import { EGalleryPreviewTypes } from './models/enums/gallery-preview-types.enum.js';

function ContentIcon(format) {
    switch (format) {
        case EGalleryPreviewFormats.pdf:
            return jsx(PdfLogoIcon, { className: 'h-full w-full translate-x-2.5 scale-160 text-red-400' });
        default:
            return jsx(FileIcon, { className: 'h-5/6 w-10/12 text-rus-500' });
    }
}
function ContentComponent(props) {
    const src = props.objectUrl || props.src;
    switch (props.format.type) {
        case EGalleryPreviewTypes.image:
            return (jsx("img", { decoding: "async", loading: "lazy", onLoad: props.handleLoadend, style: props.style, className: 'h-full w-full object-cover object-center', src: src, alt: props.src }));
        case EGalleryPreviewTypes.video:
            return (jsx("video", { onLoadedData: props.handleLoadend, src: src + '#t=0.001', style: props.style, className: 'h-full w-full object-cover object-center', preload: "metadata", children: "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E" }));
        default:
            return jsx("div", { className: 'flex h-full w-full items-center justify-center bg-walentine-500', children: ContentIcon(props.format.format) });
    }
}
const GalleryPreview = forwardRef((props, ref) => {
    const { handleLoadend } = useGalleryContext();
    const { format, src, style, objectUrl } = props;
    const asyncLoadingTypes = [EGalleryPreviewTypes.image, EGalleryPreviewTypes.video];
    useEffect(() => {
        if (!asyncLoadingTypes.includes(format.type)) {
            handleLoadend();
        }
    }, []);
    const Component = ContentComponent({ handleLoadend, src, objectUrl, style, format });
    return jsx(Fragment, { children: Component });
});
GalleryPreview.displayName = 'GalleryPreview';

export { GalleryPreview };
