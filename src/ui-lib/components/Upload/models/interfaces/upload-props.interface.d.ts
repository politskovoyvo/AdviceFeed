import { IUseUploadProps } from './use-upload-props.interface';
export interface IUploadProps extends IUseUploadProps {
    className?: string;
    name?: string;
    editable?: boolean;
    draggable?: boolean;
    showFormat?: boolean;
}
