import { useRef, useState } from 'react';

function useLoading(params) {
    const { method, data, loading } = params;
    const dataRef = useRef(data);
    const loadingRef = useRef(loading ?? false);
    const [_, update] = useState({});
    const emit = (args) => {
        loadingRef.current = true;
        update({});
        return method(args)
            .then((r) => {
            dataRef.current = r;
            return r;
        })
            .finally(() => {
            loadingRef.current = false;
            update({});
        });
    };
    const updateData = (d) => {
        dataRef.current = d;
        update({});
    };
    return {
        data: dataRef.current,
        loading: loadingRef.current,
        emit,
        update: updateData
    };
}

export { useLoading };
