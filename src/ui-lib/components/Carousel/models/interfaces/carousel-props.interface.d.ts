/// <reference types="react" />
import { ISlideProps } from './index';
export interface ICarouselProps {
    children?: JSX.Element | JSX.Element[];
    className?: string;
    onSlideChange?: (index: number) => void;
    slides: ISlideProps[];
    selectedIndex?: number;
}
