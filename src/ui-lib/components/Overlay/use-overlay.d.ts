import { VirtualElement } from '@popperjs/core/lib/popper-lite';
import { TPropGetter } from '../../models/types/prop-getter.type';
import { IUseOverlayProps } from './models';
declare function useOverlay(props?: IUseOverlayProps): {
    getOverlayProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getReferenceProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    overlayRef: <T extends HTMLElement>(node: T | null) => void;
    referenceRef: <T_1 extends Element | VirtualElement>(node: T_1 | null) => void;
    update(): void;
    forceUpdate(): void;
};
export type TUseOverlayReturn = ReturnType<typeof useOverlay>;
export { useOverlay };
