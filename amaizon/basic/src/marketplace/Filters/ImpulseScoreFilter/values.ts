import {ImpulseScore} from '../../../@types/Data.ts';

export const filterImpulseScoreById: Record<ImpulseScore, string> = {
    'resist-at-all-costs': 'Resist at all costs',
    'buy-now-think-later': 'Buy now, think later',
    'instant-dopamine-rush': 'Instant dopamine rush',
    'financial-ruin-awaits': 'Financial ruin awaits',
};

export const filterImpulseScoreOptions = Object.keys(filterImpulseScoreById) as ImpulseScore[];
