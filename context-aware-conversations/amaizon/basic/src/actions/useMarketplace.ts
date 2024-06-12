import {useState} from 'react';
import {AppliedFilters} from '../@types/AppliedFilters.ts';
import {State} from '../@types/State.ts';

export type MarketplaceActions = {
    setFilter: (filter: AppliedFilters) => void;
};

export const useMarketplace = (initialState: State) => {
    const [state, setState] = useState<State>(initialState);
    const actions: MarketplaceActions = {
        setFilter: (filter: AppliedFilters) => {
            setState({
                ...state,
                appliedFilter: filter,
            });
        },
    };

    return {
        state,
        actions,
    };
};
