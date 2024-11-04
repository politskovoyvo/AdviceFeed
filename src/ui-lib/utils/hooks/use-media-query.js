import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const queries = Array.isArray(query) ? query : [query];
    const setMatches = () => {
        return queries.map((q) => ({
            media: q,
            matches: window.matchMedia(q).matches
        }));
    };
    const [value, setValue] = useState(setMatches());
    useEffect(() => {
        setValue(setMatches());
        const mqlList = queries.map((q) => window.matchMedia(q));
        const handler = (evt) => {
            setValue((prev) => {
                return prev.slice().map((item) => {
                    if (item.media === evt.media)
                        return { ...item, matches: evt.matches };
                    return item;
                });
            });
        };
        mqlList.forEach((mql) => mql.addEventListener('change', handler));
        return () => {
            mqlList.forEach((mql) => mql.removeEventListener('change', handler));
        };
    }, []);
    return value.map((item) => item.matches);
}

export { useMediaQuery };
