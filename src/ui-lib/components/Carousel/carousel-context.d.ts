/// <reference types="react" />
export declare const CarouselContext: import("react").Context<{
    slides: import("./index").ISlideProps[];
    previous: () => void;
    next: () => void;
    selectedIndex: number;
    select: (index: number) => void;
} | undefined>;
export declare function useCarouselContext(): {
    slides: import("./index").ISlideProps[];
    previous: () => void;
    next: () => void;
    selectedIndex: number;
    select: (index: number) => void;
};
