import { createContext, useRef, useLayoutEffect, useContext, useState } from 'react';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { DescendantsManager } from './descendants.js';
import { cast } from './utils.js';

function useDescendants() {
    const descendants = useRef(new DescendantsManager());
    useLayoutEffect(() => {
        return () => descendants.current.destroy();
    });
    return descendants.current;
}
const DescendantsContext = createContext(undefined);
function useDescendantsContext() {
    const context = useContext(DescendantsContext);
    if (!context) {
        throw Error('Нет DescendantsContext.Provider');
    }
    return context;
}
function useDescendant(options) {
    const descendants = useDescendantsContext();
    const [index, setIndex] = useState(-1);
    const ref = useRef(null);
    useLayoutEffect(() => {
        return () => {
            if (!ref.current)
                return;
            descendants.unregister(ref.current);
        };
    }, []);
    useLayoutEffect(() => {
        if (!ref.current)
            return;
        const dataIndex = Number(ref.current.dataset['index']);
        if (index != dataIndex && !Number.isNaN(dataIndex)) {
            setIndex(dataIndex);
        }
    });
    const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
    return {
        descendants,
        index,
        enabledIndex: descendants.enabledIndexOf(ref.current),
        register: mergeRefs(refCallback, ref)
    };
}
function createDescendantContext() {
    const ContextProvider = cast(DescendantsContext.Provider);
    const _useDescendantsContext = () => cast(useDescendantsContext());
    const _useDescendant = (options) => useDescendant(options);
    const _useDescendants = () => useDescendants();
    return [ContextProvider, _useDescendantsContext, _useDescendants, _useDescendant];
}

export { createDescendantContext };
