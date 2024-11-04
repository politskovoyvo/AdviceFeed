import { useRef, useState, useEffect, useCallback } from 'react';
import { addDomEvent } from '../../utils/methods/add-dom-event.js';
import { removeOverlay, addOverLay } from '../../utils/methods/content-hidden.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useGalleryContext } from './gallery-context.js';
import './models/enums/gallery-preview-formats.enum.js';
import { EGalleryPreviewTypes } from './models/enums/gallery-preview-types.enum.js';
import { getFormat, getContentType } from './utils.js';

function useGallery(props) {
    const { editable = false, showFormat = false, fieldSize = 'medium', medias: mediasProp, children, onChange } = props;
    const mediasRef = useRef([]);
    const [medias, setMedias] = useState([]);
    const [loadend, setLoadend] = useState(true);
    const [showView, setShowView] = useState(false);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const countRef = useRef(0);
    const idRef = useRef(0);
    const selectedIdRef = useRef('');
    const setMediaFormat = (id, format) => {
        const founded = mediasRef.current.find((m) => m.id === id);
        if (founded)
            founded.format = format;
        onChange?.(mediasRef.current);
        setMedias([...mediasRef.current]);
    };
    const onSelectMedia = (id) => {
        const founded = medias.find((m) => m.id === id);
        if (!founded)
            return;
        if (founded.format?.type && founded.format.type === EGalleryPreviewTypes.application) {
            if (founded.src && founded.src.includes('http')) {
                window.open(founded.src, '_blank');
            }
            else if (founded.file) {
                const fileURL = URL.createObjectURL(founded.file);
                const win = window.open();
                win.document.write(`<iframe src="${fileURL}" frameborder="0" style="border:0; position: absolute; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`);
            }
            else {
                throw Error('Невозможно открыть файл');
            }
        }
        else {
            selectedIdRef.current = id;
            setShowView(true);
        }
    };
    const onDelete = (id) => {
        if (!editable)
            return;
        const list = mediasRef.current;
        const foundedIndex = list.findIndex((m) => m.id === id);
        list.splice(foundedIndex, 1);
        mediasRef.current = list;
        onChange?.(list);
        setMedias(list);
    };
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };
    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (draggedIndex !== null && draggedIndex !== index) {
            const list = mediasRef.current;
            const updatedList = [...list];
            const [draggedItem] = updatedList.splice(draggedIndex, 1);
            updatedList.splice(index, 0, draggedItem);
            mediasRef.current = updatedList;
            onChange?.(updatedList);
            setMedias(updatedList);
            setDraggedIndex(index);
        }
    };
    const handleDragEnd = () => {
        setDraggedIndex(null);
    };
    useEffect(() => {
        mediasRef.current = mediasProp.map((media) => {
            return {
                ...media,
                objectUrl: media.objectUrl ?? '',
                id: media.id ?? `media-${idRef.current++}`
            };
        });
        setMedias(mediasRef.current);
    }, [mediasProp]);
    const handleLoadend = () => {
        if (!countRef.current)
            return;
        const rest = countRef.current - 1;
        countRef.current = rest;
        setLoadend(!rest);
    };
    useEffect(() => {
        if (!medias.length) {
            setLoadend(true);
            return;
        }
        setLoadend(false);
        countRef.current = medias.length;
    }, []);
    return {
        children,
        editable,
        fieldSize,
        handleLoadend,
        loadend,
        medias,
        setMediaFormat,
        setShowView,
        showView,
        onDelete,
        onSelectMedia,
        selectedIdRef,
        showFormat,
        handleDragStart,
        handleDragOver,
        handleDragEnd,
        draggedIndex
    };
}
function useGalleryMedia(props) {
    const { src: srcProp, objectUrl, file, format: formatProp, ref: refProp, id } = props;
    const { setMediaFormat, medias } = useGalleryContext();
    const [format, setFormat] = useState(formatProp);
    const [src, setSrc] = useState({ objectUrl: '', src: '' });
    const ref = useRef(null);
    useEffect(() => {
        if (!srcProp && !file) {
            throw Error('Нет файла(file) или источника(src) для его получения');
        }
        if (file) {
            if (!formatProp) {
                const receivedFormat = getFormat(file.type);
                setMediaFormat(id, receivedFormat);
                setFormat(receivedFormat);
            }
            setSrc((prev) => ({ ...prev, objectUrl }));
        }
        if (srcProp) {
            if (!formatProp) {
                getContentType(srcProp).then((type) => {
                    const receivedFormat = getFormat(type);
                    setMediaFormat(id, receivedFormat);
                    setFormat(receivedFormat);
                });
            }
            setSrc((prev) => ({ ...prev, src: srcProp }));
        }
    }, [srcProp, file]);
    return {
        format,
        src,
        id,
        ref: mergeRefs(ref, refProp)
    };
}
function useGalleryView() {
    const { medias, showView, setShowView, selectedIdRef } = useGalleryContext();
    const visualTypes = [EGalleryPreviewTypes.image, EGalleryPreviewTypes.video];
    const [viewMedia, setViewMedia] = useState([]);
    const mediaListRef = useRef([]);
    const indicatorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const id = uniqueId('gallery-view');
    const scrollFollow = (index, attempt = 0) => {
        const mediaElement = mediaListRef.current[index];
        if (!mediaElement) {
            if (attempt < 2)
                setTimeout(() => scrollFollow(index, ++attempt), 150);
            return;
        }
        const wrapElement = mediaElement.parentElement;
        if (!wrapElement)
            return;
        const mediaLeft = mediaElement.offsetLeft;
        const mediaTop = mediaElement.offsetTop;
        const mediaWidth = mediaElement.clientWidth;
        const mediaHeight = mediaElement.clientHeight;
        const wrapWidth = wrapElement.clientWidth;
        const scrollLeft = mediaLeft + mediaWidth / 2 - wrapWidth / 2;
        wrapElement.scroll({ left: scrollLeft, behavior: 'smooth' });
        if (indicatorRef.current) {
            indicatorRef.current.style.top = `${mediaTop}px`;
            indicatorRef.current.style.left = `${mediaLeft}px`;
            indicatorRef.current.style.width = `${mediaWidth}px`;
            indicatorRef.current.style.height = `${mediaHeight}px`;
        }
    };
    useEffect(() => {
        const filteredList = medias.filter((media) => media.format && visualTypes.includes(media.format.type));
        const fileWithSrc = filteredList.map((file) => {
            if (!file.objectUrl && file.file)
                return { ...file, objectUrl: URL.createObjectURL(file.file) };
            return file;
        });
        setViewMedia(fileWithSrc);
        scrollFollow(selectedIndex);
    }, [medias]);
    const select = (index) => {
        setSelectedIndex(index);
        scrollFollow(index);
    };
    const close = () => {
        setShowView(false);
        selectedIdRef.current = '';
    };
    const next = useCallback(() => {
        let result = 0;
        if (selectedIndex === viewMedia.length - 1)
            result = 0;
        else
            result = selectedIndex + 1;
        setSelectedIndex(result);
        scrollFollow(result);
    }, [selectedIndex, viewMedia]);
    const previous = useCallback(() => {
        let result = 0;
        if (selectedIndex === 0)
            result = viewMedia.length - 1;
        else
            result = selectedIndex - 1;
        setSelectedIndex(result);
        scrollFollow(result);
    }, [selectedIndex, viewMedia]);
    const onKeyDown = useCallback((event) => {
        const eventKey = event.key;
        const keyMap = {
            ArrowLeft: () => previous(),
            ArrowRight: () => next(),
            ArrowDown: () => previous(),
            ArrowUp: () => next(),
            Escape: () => close()
        };
        const action = keyMap[eventKey];
        if (action) {
            event.preventDefault();
            action();
        }
    }, [next, previous]);
    useEffect(() => {
        return addDomEvent(document, 'keydown', onKeyDown);
    }, [onKeyDown]);
    useEffect(() => {
        if (!showView)
            return removeOverlay(id);
        addOverLay(id);
        let result = 0;
        const foundedIndex = viewMedia.findIndex((media) => media.id === selectedIdRef.current);
        if (foundedIndex !== -1)
            result = foundedIndex;
        setSelectedIndex(result);
        scrollFollow(result);
    }, [showView]);
    return {
        selectedIndex,
        viewMedia,
        close,
        next,
        select,
        mediaListRef,
        previous,
        indicatorRef
    };
}

export { useGallery, useGalleryMedia, useGalleryView };
