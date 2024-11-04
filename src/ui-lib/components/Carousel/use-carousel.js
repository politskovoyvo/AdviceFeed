import { useState, useCallback, useEffect } from 'react';

function useCarousel(props) {
    const { slides = [], onSlideChange, selectedIndex: selectedIndexOuter } = props;
    const [selectedIndex, setSelectedIndex] = useState(selectedIndexOuter || 0);
    const select = (index) => {
        setSelectedIndex(index);
        onSlideChange && onSlideChange(index);
    };
    const next = useCallback(() => {
        const index = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(index);
        onSlideChange && onSlideChange(index);
    }, [selectedIndex, slides]);
    const previous = useCallback(() => {
        const index = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
        setSelectedIndex(index);
        onSlideChange && onSlideChange(index);
    }, [selectedIndex, slides]);
    const onKeyDown = useCallback((event) => {
        const eventKey = event.key;
        const keyMap = {
            ArrowLeft: () => previous(),
            ArrowRight: () => next(),
            ArrowDown: () => previous(),
            ArrowUp: () => next()
        };
        const action = keyMap[eventKey];
        if (action) {
            event.preventDefault();
            action();
        }
    }, [next, previous]);
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true);
        return () => {
            document.removeEventListener('keydown', onKeyDown, true);
        };
    }, [onKeyDown]);
    useEffect(() => {
        if (selectedIndexOuter) {
            setSelectedIndex(selectedIndexOuter);
        }
    }, [selectedIndexOuter]);
    return {
        slides,
        previous,
        next,
        selectedIndex,
        select
    };
}

export { useCarousel };
