/// <reference types="react" />
import type { ITableContext } from './models';
import { ITableBodyContext, ITableHeadContext } from './models';
export declare const TableContext: import("react").Context<ITableContext | undefined>;
export declare function useTableContext(): ITableContext;
export declare const TableHeadContext: import("react").Context<ITableHeadContext | undefined>;
export declare function useTableHeadContext(): ITableHeadContext | undefined;
export declare const TableBodyContext: import("react").Context<ITableBodyContext | undefined>;
export declare function useTableBodyContext(): ITableBodyContext | undefined;
