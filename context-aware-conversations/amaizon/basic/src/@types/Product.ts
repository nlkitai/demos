import {Giftability, ImpulseScore, RealityVsExpectationScore} from './Data.ts';

export type Product = {
    id: string;
    brand: string;
    name: string;
    description: string;
    imageUrl: string;
    color: string;
    price: number;
    giftability: Giftability;
    impulseScore: ImpulseScore;
    realityVsExpectationScore: RealityVsExpectationScore;
}
