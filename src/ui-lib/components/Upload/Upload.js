import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { UIGallery } from '../Gallery/Gallery.js';
import '../Gallery/Gallery-media.js';
import { UploadContext } from './upload-context.js';
import { UploadDrag } from './Upload-drag.js';
import { useUpload } from './use-upload.js';

const UIUpload = forwardRef((props, ref) => {
    const { className, name, editable = true, draggable, showFormat = true, ...rest } = props;
    const { accept, ...ctx } = useUpload(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(UploadContext.Provider, { value: context, children: jsxs("div", { ref: ref, className: className, children: [jsx(UploadDrag, {}), jsx("input", { ref: context.inputRef, accept: accept, multiple: context.limits.filesLimit === 0 || context.limits.filesLimit > 1, onChange: (e) => context.uploadFiles(e.target.files), type: "file", name: name, className: 'hidden' }), jsx(UIGallery, { draggable: draggable, className: context.uploadedFiles.length ? 'mt-4' : '', medias: context.uploadedFiles, editable: editable, showFormat: showFormat, onChange: context.onGalleryChange })] }) }));
});
UIUpload.displayName = 'UIUpload';

export { UIUpload };
