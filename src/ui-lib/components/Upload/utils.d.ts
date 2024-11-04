/// <reference types="react" />
import { IUseUploadProps, TUploadFile } from './models';
export declare function inSizeLimit(file: File, limitSize: number): boolean;
export declare function isCorrectFormat(file: File, formats: string[]): boolean;
export declare function inSecondLimit(file: File, limitTime: number): Promise<boolean>;
export declare function getLabels(limits: TLimits, formats?: string[]): {
    title: string;
    description: string;
    Icon: import("react").ForwardRefExoticComponent<import("react").SVGAttributes<SVGSVGElement> & import("react").RefAttributes<SVGSVGElement>>;
};
export declare function getAcceptFormats(formats?: string[]): string | undefined;
type TLimits = Pick<IUseUploadProps, 'sizeLimit' | 'secondsLimit' | 'filesLimit' | 'filesMinimum'>;
export declare const validateFiles: (files: FileList, limits: TLimits, alreadyExist: number, formats?: string[]) => Promise<TUploadFile[]>;
export {};
