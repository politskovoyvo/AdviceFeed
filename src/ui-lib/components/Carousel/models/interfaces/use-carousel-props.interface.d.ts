import { ISlideProps } from './index';
export interface IUseCarouselProps {
    onSlideChange?: (index: number) => void;
    selectedIndex?: number;
    slides: ISlideProps[];
}
