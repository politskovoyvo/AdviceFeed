import { IUseCarouselProps } from './models/interfaces';
export type TUseCarouselReturn = ReturnType<typeof useCarousel>;
export declare function useCarousel(props: IUseCarouselProps): {
    slides: import("./models/interfaces").ISlideProps[];
    previous: () => void;
    next: () => void;
    selectedIndex: number;
    select: (index: number) => void;
};
