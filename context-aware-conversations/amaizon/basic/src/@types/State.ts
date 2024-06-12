import {AppliedFilters} from './AppliedFilters.ts';
import {Product} from './Product.ts';

export type State = {
    appliedFilter: AppliedFilters;
    products: Product[];
};
