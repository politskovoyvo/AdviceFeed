import { useRef, useState, useEffect, cloneElement } from 'react';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { useTableContext, useTableHeadContext, useTableBodyContext } from './table-context.js';

function useTable(props, ref) {
    const headsRef = useRef([]);
    const tableRef = useRef(null);
    const wrapRef = useRef(null);
    const [compress, setCompress] = useState(false);
    const [existCustom, setExistCustom] = useState(false);
    const compressedWidth = useRef(0);
    const registerHead = (index, title) => {
        headsRef.current[index] = title;
    };
    const registerCustom = () => {
        setExistCustom(true);
    };
    const isTableOverflowX = () => {
        const element = wrapRef.current;
        if (element) {
            const windowWidth = window.innerWidth;
            if (windowWidth > compressedWidth.current) {
                const isNeedCompress = element.scrollWidth > element.clientWidth;
                compressedWidth.current = isNeedCompress ? windowWidth : 0;
                setCompress(isNeedCompress);
            }
        }
    };
    useEffect(() => {
        isTableOverflowX();
        window.addEventListener('resize', isTableOverflowX, true);
        return () => {
            window.removeEventListener('resize', isTableOverflowX, true);
        };
    }, []);
    return {
        registerHead,
        registerCustom,
        existCustom,
        headsRef,
        compress,
        tableRef,
        ref: mergeRefs(wrapRef, ref)
    };
}
function useTHead(props) {
    const { registerHead, compress } = useTableContext();
    return { registerHead, compress };
}
function useTBody(props) {
    const { headsRef, existCustom, compress } = useTableContext();
    return { headsRef, existCustom, compress };
}
function useTRow(props) {
    const { children, ...rest } = props;
    const validChildren = getValidChildren(children);
    const { registerHead, headsRef, compress } = useTableContext();
    const headContext = useTableHeadContext();
    const bodyContext = useTableBodyContext();
    const mappedChildren = validChildren.map((child, index) => {
        let dataAttr = null;
        if (headContext) {
            registerHead(index, child.props.children);
        }
        else if (bodyContext) {
            dataAttr = headsRef.current[index];
        }
        return cloneElement(child, {
            ...child.props,
            ...(dataAttr !== null && { 'data-label': dataAttr })
        });
    });
    return { children: mappedChildren, ...rest };
}

export { useTBody, useTHead, useTRow, useTable };
