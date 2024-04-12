import './Marketplace.css';
import {useMemo} from 'react';
import {AppliedFilters} from '../@types/AppliedFilters.ts';
import {State} from '../@types/State.ts';
import {allProducts} from '../data/allProducts.ts';
import {applyFilter} from './applyFilter.ts';
import {Filters} from './Filters/Filters.tsx';
import {ProductsList} from './ProductsList/ProductsList.tsx';

export type MarketplaceProps = {
    state: State;
    setFilter: (filter: AppliedFilters) => void;
};

export const Marketplace = (props: MarketplaceProps) => {
    const {state, setFilter} = props;

    const filteredProducts = useMemo(
        () => applyFilter(allProducts, state.appliedFilter),
        [state.appliedFilter],
    );

    return (
        <div className="marketplace">
            <Filters appliedFilters={state.appliedFilter} applyFilters={setFilter}/>
            <ProductsList filteredProducts={filteredProducts} />
        </div>
    );
};
