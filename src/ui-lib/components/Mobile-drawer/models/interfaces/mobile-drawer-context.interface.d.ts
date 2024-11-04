import type { useDraggable } from '@dnd-kit/core/dist/hooks/useDraggable';
export interface IMobileDrawerContext extends Pick<ReturnType<typeof useDraggable>, 'isDragging'> {
    expanded: boolean;
}
