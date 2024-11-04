import { useSensors, useSensor, PointerSensor, useDraggable, useDndMonitor } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useUISettingsContext } from '../../settings/settings-context.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { resizeObserve } from '../../utils/methods/resize-observe.js';
import { throttle } from '../../utils/methods/throttle.js';
import { getExpandedState, getCloseState } from './utils/handle-swap.js';
import { MOBILE_DRAWER_MAX_HEIGHT } from './utils/max-height.js';
import { rubberbandModifier } from './utils/rubberband.modifier.js';

function useMobileDrawer(props) {
    const { closable = true, expandedDefault = false, draggable = false, expandable = true, close, ...rest } = props;
    const initialState = expandable ? (draggable ? expandedDefault : true) : true;
    const [expanded, setExpanded] = useState(initialState);
    const modifiers = [restrictToVerticalAxis, rubberbandModifier];
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { delay: 25, tolerance: 40 } }));
    const tracked = useRef({
        distance: 0,
        timestamp: 0,
        velocity: 0
    });
    const handleDragMove = ({ delta }) => {
        const timestamp = Date.now();
        const timeDelta = timestamp - tracked.current.timestamp;
        const distance = tracked.current.distance - delta.y;
        const velocity = Math.round((distance / timeDelta) * 1000);
        tracked.current = {
            distance: delta.y,
            velocity,
            timestamp
        };
    };
    const handleDragEnd = useCallback(({ delta, activatorEvent }) => {
        const drawerNode = activatorEvent.target.parentElement;
        const drawerWrapNode = drawerNode.parentElement;
        const { velocity } = tracked.current;
        const isQuick = Math.abs(velocity) > 500;
        if (expandable) {
            if (isQuick) {
                setExpanded(velocity > 0);
                if (!expanded && velocity < drawerNode.offsetHeight * -1 && closable) {
                    close();
                }
            }
            else {
                const expandedState = getExpandedState(expanded, drawerWrapNode.offsetHeight, delta.y);
                if (expandedState !== undefined) {
                    setExpanded(expandedState);
                }
            }
        }
        else {
            if (isQuick) {
                if (velocity < drawerNode.offsetHeight * -1 && closable) {
                    close();
                }
            }
            else {
                const needToClose = getCloseState(drawerWrapNode.offsetHeight, delta.y);
                if (needToClose) {
                    close();
                }
            }
        }
    }, [closable, expandable, expanded, close]);
    return { sensors, modifiers, handleDragEnd, draggable, handleDragMove, expanded, expandable, closable, close, ...rest };
}
function useMobileDrawerComponent(props) {
    const { draggable, expandable, expanded, ...rest } = props;
    const dragging = useRef(false);
    const observer = useRef();
    const containerRef = useRef(null);
    const observingContainerRef = useRef(null);
    const [tracker, setTracker] = useState({ container: null, padding: 0 });
    const { transform, isDragging, setNodeRef, listeners, attributes } = useDraggable({
        id: uniqueId('drawer-handle'),
        disabled: !draggable
    });
    const { dialogs } = useUISettingsContext();
    const { isHidden } = dialogs;
    const setTrackerByHeight = (height) => {
        if (!containerRef.current || !containerRef.current.parentElement)
            return;
        const wrap = containerRef.current.parentElement;
        const { paddingBottom, paddingTop, borderTop, borderBottom } = window.getComputedStyle(wrap);
        const padding = parseFloat(paddingBottom) + parseFloat(paddingTop) + parseFloat(borderTop) + parseFloat(borderBottom);
        setTracker({ container: height, padding: padding });
    };
    const onMutation = () => {
        if (!containerRef.current || dragging.current)
            return;
        setTrackerByHeight(containerRef.current.scrollHeight);
    };
    const onDragStart = () => {
        if (!containerRef.current)
            return;
        dragging.current = true;
        setTrackerByHeight(containerRef.current.clientHeight);
    };
    const onDragEnd = throttle(() => {
        if (!containerRef.current)
            return;
        dragging.current = false;
        containerRef.current.style.position = 'absolute';
        containerRef.current.style.height = 'max-content';
        setTrackerByHeight(containerRef.current.clientHeight);
        containerRef.current.style.position = 'unset';
        containerRef.current.style.height = 'auto';
    }, 2);
    const afterOpen = () => {
        observer.current = resizeObserve(observingContainerRef.current, onMutation);
        rest.afterOpen?.();
    };
    const afterClose = () => {
        observer.current?.();
        rest.afterClose?.();
    };
    const drawerProps = {
        ...rest,
        afterClose,
        afterOpen,
        style: {
            '--transform': isHidden ? `${tracker.container}px` : transform ? `${transform.y}px` : '0px',
            '--container': `${tracker.container}px`,
            '--padding': `${tracker.padding}px`,
            '--available': expanded ? `${MOBILE_DRAWER_MAX_HEIGHT}%` : '40%',
            transitionDuration: transform ? '0ms' : '200ms',
            maxHeight: transform ? '100%' : 'var(--available)',
            height: 'calc(var(--container) + var(--padding) - var(--transform))',
            transitionProperty: 'max-height transform'
        }
    };
    useDndMonitor({ onDragStart, onDragEnd });
    useEffect(() => {
        onDragEnd();
    }, []);
    return {
        drawerProps,
        attributes,
        listeners,
        transform,
        isDragging,
        setNodeRef,
        tracker,
        expanded,
        draggable,
        observingContainerRef,
        containerRef
    };
}

export { useMobileDrawer, useMobileDrawerComponent };
