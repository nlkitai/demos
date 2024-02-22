import {useAiContext} from '@nlux/react';
import {useCallback, useEffect} from 'react';
import {Exchange} from '../../../@types/Data.ts';
import {StockWizAiContext} from '../../../context.tsx';

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

    const toggleExchanges = useCallback((...exchangesToggles: boolean[]) => {
        if (availableExchanges.length !== exchangesToggles.length) {
            return;
        }

        const exchanges = availableExchanges.filter((_, index) => exchangesToggles[index]);
        setExchangesFilter(exchanges.map(({id}) => id));
    }, [availableExchanges, setExchangesFilter]);

    const compAiContext = useAiContext(StockWizAiContext, 'exchange-filter-view');
    useEffect(() => {
        const {cancel} = compAiContext.registerTask(
            'applyFilterForStockExchange',
            toggleExchanges,
            availableExchanges.map(
                (exchange) => `a boolean, set to true to include exchange `
                    + `[ ${exchange.label} (${exchange.id}) ] in the appliedFilters, `
                    + `setFilter to false to exclude it`,
            ),
        );

        return cancel;
    }, [compAiContext, toggleExchanges, availableExchanges]);

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
