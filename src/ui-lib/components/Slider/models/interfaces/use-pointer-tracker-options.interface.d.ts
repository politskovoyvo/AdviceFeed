export type TAnyPointerEvents = TouchEvent | MouseEvent | PointerEvent;
export interface IUsePointerTrackerOptions {
    onStart(event: TAnyPointerEvents): void;
    onMove(event: TAnyPointerEvents): void;
    onEnd(event: TAnyPointerEvents): void;
}
