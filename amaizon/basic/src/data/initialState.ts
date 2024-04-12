import {State} from '../@types/State.ts';
import {allProducts} from './allProducts.ts';

export const initialState: State = {
    appliedFilter: {
        impulseScore: [],
        giftability: [],
        realityVsExpectationScore: [],
    },
    // Random order of allProducts
    products: allProducts.sort(() => Math.random() - 0.5),
};
