import {useCallback} from 'react';
import {Exchange} from '../../../@types/Data.ts';

export type ExchangeFilterProps = {
    selectedExchanges: string[];
    availableExchanges: Exchange[];
    setExchangesFilter: (exchangeIds: string[]) => void;
};

export const ExchangeFilter = (props: ExchangeFilterProps) => {
    const {
        selectedExchanges,
        availableExchanges,
        setExchangesFilter,
    } = props;

    const handleExchangeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        const exchanges = checked
            ? [...selectedExchanges, name]
            : selectedExchanges.filter((exchange) => exchange !== name);

        setExchangesFilter(exchanges);
    }, [setExchangesFilter, selectedExchanges]);

    return (
        <div className="criterion exchange">
            <span className="title">Exchange</span>
            <ul className="options">
                {availableExchanges.map(({id, label}) => (
                    <li key={id}>
                        <input
                            type="checkbox"
                            id={`exchange-${id}`}
                            name={id}
                            checked={selectedExchanges.includes(id)}
                            onChange={handleExchangeChange}
                        />
                        <label htmlFor={`exchange-${id}`}>{label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
