export interface IPlacementPosition {
    x: number;
    y: number;
}
type CalculationType = {
    [key in any]: (parent: HTMLElement, child: HTMLElement, margin: number, flowX: number, flowY: number) => IPlacementPosition;
};
export declare const placementCalculation: CalculationType;
export {};
