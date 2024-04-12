import {useCallback} from 'react';
import {AppliedFilters} from '../../@types/AppliedFilters.ts';
import './Filters.css';
import {Giftability, ImpulseScore} from '../../@types/Data.ts';
import {GiftabilityFilter} from './GiftabilityFilter/GiftabilityFilter.tsx';
import {availableGiftabilityOptions, filterGiftabilityById} from './GiftabilityFilter/values.ts';
import {ImpulseScoreFilter} from './ImpulseScoreFilter/ImpulseScoreFilter.tsx';
import {filterImpulseScoreById, filterImpulseScoreOptions} from './ImpulseScoreFilter/values.ts';

export type FiltersProps = {
    appliedFilters: AppliedFilters;
    applyFilters: (newFilters: AppliedFilters) => void;
};

export const Filters = (props: FiltersProps) => {
    const {appliedFilters, applyFilters} = props;


    const setSelectedGiftabilityOptions = useCallback((newGiftabilityOptions: Giftability[]) => {
        // Filter out any option that are not in the pre-defined list of giftability options
        const giftabilityOptionsToApply = newGiftabilityOptions.filter(
            (newGiftabilityOption) => availableGiftabilityOptions.includes(newGiftabilityOption),
        ) as Giftability[];

        applyFilters({...appliedFilters, giftability: giftabilityOptionsToApply});
    }, [appliedFilters, applyFilters]);

    const setSelectedImpulseScores = useCallback((newImpulseScores: ImpulseScore[]) => {
        const newImpulseScoresToApply = newImpulseScores.filter(
            (newImpulseScore) => filterImpulseScoreOptions.includes(newImpulseScore),
        ) as ImpulseScore[];

        applyFilters({...appliedFilters, impulseScore: newImpulseScoresToApply});
    }, [appliedFilters, applyFilters]);

    return (
        <div className="filters-container">
            <h4>Impossible Filters</h4>
            <div className="filters">
                <GiftabilityFilter
                    availableOptions={filterGiftabilityById}
                    selectedOptions={appliedFilters.giftability ?? []}
                    setGiftabilityFilter={setSelectedGiftabilityOptions}
                />
                <ImpulseScoreFilter
                    availableImpulseScores={filterImpulseScoreById}
                    selectedImpulseScores={appliedFilters.impulseScore ?? []}
                    setImpulseScoresFilter={setSelectedImpulseScores}
                />
            </div>
        </div>
    );
};
