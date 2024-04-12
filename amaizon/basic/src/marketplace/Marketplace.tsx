import './Marketplace.css';
import {useAiContext} from '@nlux/react';
import {useMemo} from 'react';
import {AppliedFilters} from '../@types/AppliedFilters.ts';
import {State} from '../@types/State.ts';
import {MyAiContext} from '../context.tsx';
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

    useAiContext(
        MyAiContext,
        'A list of random funny products with descriptions, prices, and other attributes. The user is seeing those products in the screen and may ask questions about them.',
        allProducts,
    );

    return (
        <div className="marketplace">
            <Filters appliedFilters={state.appliedFilter} applyFilters={setFilter}/>
            <ProductsList filteredProducts={filteredProducts} />
        </div>
    );
};
