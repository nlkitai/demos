import './StockList.css';
import {useMemo} from 'react';
import {StockRow} from '../../@types/StockData.ts';
import {columns} from '../../data/columns.ts';
import {HeaderRow} from './HeaderRow/HeaderRow.tsx';
import {Row} from './Row/Row.tsx';

export type StockListProps = {
    stockRows: StockRow[];
    updateRowSelection: (id: string, selected: boolean) => void;
};

export const StockList = (props: StockListProps) => {
    const {stockRows, updateRowSelection} = props;
    const cols = useMemo(() => columns, []);

    return (
        <div className="stock-list">
            <HeaderRow columns={cols}/>
            {stockRows.map((stockRow) => (
                <Row
                    key={stockRow.data.id}
                    columns={cols}
                    item={stockRow.data}
                    selected={stockRow.selected}
                    updateSelection={updateRowSelection}
                />
            ))}
        </div>
    );
};
