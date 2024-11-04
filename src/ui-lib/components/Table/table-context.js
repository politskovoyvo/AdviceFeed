import { createContext, useContext } from 'react';

const TableContext = createContext(undefined);
function useTableContext() {
    const context = useContext(TableContext);
    if (!context) {
        throw Error('Нет TableContext.Provider');
    }
    return context;
}
const TableHeadContext = createContext(undefined);
function useTableHeadContext() {
    return useContext(TableHeadContext);
}
const TableBodyContext = createContext(undefined);
function useTableBodyContext() {
    return useContext(TableBodyContext);
}

export { TableBodyContext, TableContext, TableHeadContext, useTableBodyContext, useTableContext, useTableHeadContext };
