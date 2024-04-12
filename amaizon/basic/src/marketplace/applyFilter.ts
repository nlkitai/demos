import {AppliedFilters} from '../@types/AppliedFilters.ts';
import {Product} from '../@types/Product.ts';

export const applyFilter = (allProducts: Product[], filter: AppliedFilters): Product[] => {
    return allProducts.filter((product) => {
        if (
            filter.giftability && filter.giftability.length > 0 &&
            !filter.giftability.includes(product.giftability)
        ) {
            return false;
        }

        if (
            filter.impulseScore && filter.impulseScore.length > 0 &&
            !filter.impulseScore.includes(product.impulseScore)
        ) {
            return false;
        }

        if (
            filter.realityVsExpectationScore &&
            filter.realityVsExpectationScore.length > 0 &&
            !filter.realityVsExpectationScore.includes(product.realityVsExpectationScore)
        ) {
            return false;
        }

        return true;
    });
};
