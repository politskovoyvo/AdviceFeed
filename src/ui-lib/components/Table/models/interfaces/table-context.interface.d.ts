import { TUseTableReturn } from '../../use-table';
export interface ITableContext extends Omit<TUseTableReturn, 'tableRef' | 'ref'> {
}
