import { useRef, useState, useMemo, useEffect } from 'react';
import { useUploadContext } from './upload-context.js';
import { getAcceptFormats, getLabels, validateFiles } from './utils.js';

function useUpload(props) {
    const { sizeLimit = 0, secondsLimit = 0, filesLimit = 0, filesMinimum = 0, formats, files: fileProps, uploadMethod, onChange } = props;
    const inputRef = useRef(null);
    const filesRef = useRef([]);
    const idRef = useRef(0);
    const [state, setState] = useState({ show: false, message: '', status: 'error' });
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const limits = { sizeLimit, secondsLimit, filesLimit, filesMinimum };
    const accept = useMemo(() => getAcceptFormats(formats), [formats]);
    useEffect(() => {
        filesRef.current =
            fileProps?.map(({ src, file, id, loading, needUpload, objectUrl, ...rest }) => ({
                src: src,
                file: file,
                objectUrl: objectUrl ?? '',
                id: id ?? `upload-${idRef.current++}`,
                loading: !!loading,
                needUpload: !!needUpload,
                ...rest
            })) || [];
        setUploadedFiles([...filesRef.current]);
    }, [fileProps]);
    const showMessage = (message, status) => {
        const delay = 3000;
        setState({ message, status, show: true });
        setTimeout(() => setState((s) => ({ ...s, show: false })), delay);
    };
    const updateFiles = () => {
        const filesReady = filesRef.current;
        onChange?.(filesReady);
    };
    const onGalleryChange = (medias) => {
        filesRef.current = medias;
        setUploadedFiles(filesRef.current);
        updateFiles();
    };
    const loadFile = async (filesList) => {
        const filesToUpload = filesList.map((f) => {
            return {
                file: f.file,
                objectUrl: URL.createObjectURL(f.file),
                id: `upload-${idRef.current++}`,
                loading: false,
                needUpload: !!uploadMethod
            };
        });
        if (uploadMethod) {
            filesRef.current = [...filesRef.current, ...filesToUpload];
            setUploadedFiles([...filesRef.current]);
            updateFiles();
            for (let i = 0; i < filesRef.current.length; i++) {
                if (!filesRef.current[i].needUpload)
                    continue;
                const fileId = filesRef.current[i].id;
                filesRef.current[i].loading = true;
                filesRef.current[i].id = fileId;
                setUploadedFiles([...filesRef.current]);
                updateFiles();
                uploadMethod(filesRef.current[i].file)
                    .then((result) => {
                    const foundedFile = filesRef.current.find((f) => f.id === fileId);
                    if (foundedFile) {
                        foundedFile.src = result.src;
                        foundedFile.needUpload = false;
                        foundedFile.loading = false;
                        foundedFile.extra = result.extra;
                        setUploadedFiles([...filesRef.current]);
                        updateFiles();
                    }
                })
                    .catch(() => {
                    // TODO: Расмкоменить как будет диз с ошибкой и повторной загрузкой
                    // const foundedFile = filesRef.current.find((f) => f.id === fileId);
                    //
                    // if (foundedFile) {
                    //   foundedFile.loading = false;
                    //   foundedFile.needUpload = true;
                    //   foundedFile.error = 'ОШИБКА А ВОТ КАКЯ ?';
                    //
                    //   setUploadedFiles([...filesRef.current]);
                    //   updateFiles();
                    // }
                    // TODO: Пока удаляем файл из списка при ошибке, потом нужен диз и возможность загрузить снова
                    const foundedFileIndex = filesRef.current.findIndex((f) => f.id === fileId);
                    if (foundedFileIndex !== -1) {
                        filesRef.current.splice(foundedFileIndex, 1);
                        setUploadedFiles([...filesRef.current]);
                        updateFiles();
                    }
                });
            }
        }
        else {
            filesRef.current = [...filesRef.current, ...filesToUpload];
            setUploadedFiles([...filesRef.current]);
            updateFiles();
        }
    };
    const uploadFiles = (fileList) => {
        if (!fileList)
            return;
        validateFiles(fileList, limits, filesRef.current.length, formats)
            .then((files) => loadFile(files))
            .catch((error) => showMessage(error.message, 'error'));
        if (inputRef.current)
            inputRef.current.value = '';
    };
    return { inputRef, uploadedFiles, uploadFiles, state, limits, onGalleryChange, accept, formats };
}
function useUploadDrag() {
    const { uploadFiles, inputRef, state, limits, formats } = useUploadContext();
    const [dragActive, setDragActive] = useState(false);
    const labels = useMemo(() => getLabels(limits, formats), [limits, formats]);
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        const data = event.dataTransfer;
        if (data) {
            uploadFiles(data.files);
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true);
    };
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
    };
    const handleClick = () => inputRef.current?.click();
    return {
        state,
        labels,
        dragActive,
        handleClick,
        handleDrop,
        handleDragOver,
        handleDragEnter,
        handleDragLeave
    };
}

export { useUpload, useUploadDrag };
