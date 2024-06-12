import {Giftability} from '../../../@types/Data.ts';

export const filterGiftabilityById: Record<Giftability, string> = {
    perfect: 'Perfect',
    awkward: 'Awkward',
    regrettable: 'Regrettable',
    offensive: 'Offensive',
};

export const availableGiftabilityOptions = Object.keys(filterGiftabilityById) as Giftability[];
