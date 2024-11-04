export interface IUseAccordionProps {
    /** Позволять открыть больше одного аккордеона
     * @default true */
    multiple?: boolean;
    /** Открывать/закрывать нажатием на тот-же аккордеон
     * @default true */
    toggle?: boolean;
    indexes?: number[];
    defaultIndexes?: number[];
    onChange?(expandedIndexes: number[]): void;
}
