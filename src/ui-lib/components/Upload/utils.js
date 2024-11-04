import { CameraIcon } from '../../icons/application/camera.icon.js';
import { PictureIcon } from '../../icons/application/picture.icon.js';

function inSizeLimit(file, limitSize) {
    const megabyte = 1048576;
    return file.size <= megabyte * limitSize;
}
function isCorrectFormat(file, formats) {
    const formatsStr = formats.join('');
    const [type, format] = file.type.split('/');
    return formatsStr.includes(format) || formatsStr.includes(type + '/*');
}
function inSecondLimit(file, limitTime) {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onerror = () => reject(false);
        video.onloadedmetadata = () => {
            window.URL.revokeObjectURL(video.src);
            const duration = Math.round(video.duration);
            resolve(duration <= limitTime);
        };
        video.src = URL.createObjectURL(file);
    });
}
function getLabels(limits, formats) {
    const formatsStr = formats?.join(', ') ?? '';
    let type = '';
    let icon = undefined;
    switch (true) {
        case formatsStr.includes('video'):
            type = 'видео';
            icon = CameraIcon;
            break;
        default:
            type = 'фото';
            icon = PictureIcon;
    }
    const filesMinimum = limits.filesMinimum ? `не менее ${limits.filesMinimum} ` : '';
    const filesLimit = limits.filesLimit ? `не более ${limits.filesLimit} ` : '';
    const sizeLimit = limits.sizeLimit ? `размер до ${limits.sizeLimit}мб` : '';
    const secondsLimit = limits.secondsLimit ? `не более ${limits.secondsLimit}сек` : '';
    const limitsText = [filesMinimum, filesLimit].filter((l) => !!l).join('и ');
    const labels = [limitsText + type, sizeLimit, secondsLimit].filter((l) => !!l);
    const title = labels.join(', ');
    return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: formatsStr.includes('video') ? '' : formatsStr,
        Icon: icon
    };
}
function getAcceptFormats(formats) {
    return formats?.join(', ');
}
const validateFiles = async (files, limits, alreadyExist, formats) => {
    const { sizeLimit, filesLimit, secondsLimit } = limits;
    const fileArray = Array.from(files);
    const uploadedFiles = [];
    if (filesLimit && fileArray.length + alreadyExist > filesLimit) {
        throw new Error(`Превышен лимит файлов: ${filesLimit}`);
    }
    for (let i = 0; i < fileArray.length; i++) {
        const file = fileArray[i];
        if (!file)
            continue;
        const isVideo = file.type.match('video.*');
        let correctSize = true;
        let correctFormat = true;
        let correctDuration = true;
        if (sizeLimit)
            correctSize = inSizeLimit(file, sizeLimit);
        if (formats?.length)
            correctFormat = isCorrectFormat(file, formats);
        if (isVideo && secondsLimit)
            correctDuration = await inSecondLimit(file, secondsLimit);
        if (!correctFormat) {
            throw new Error(`Неверный формат файла\n${file.name}`);
        }
        if (!correctSize) {
            throw new Error(`Превышен размер файла\n${file.name}`);
        }
        if (!correctDuration) {
            throw new Error(`Превышена длительность видеозаписи\n${file.name}`);
        }
        uploadedFiles.push({ file: file });
    }
    return uploadedFiles;
};

export { getAcceptFormats, getLabels, inSecondLimit, inSizeLimit, isCorrectFormat, validateFiles };
