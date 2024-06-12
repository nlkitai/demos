import {useCallback} from 'react';
import {useAiContext, useAiTask} from '@nlux/react';
import {AppliedFilters} from '../../@types/AppliedFilters.ts';
import './Filters.css';
import {Giftability, ImpulseScore} from '../../@types/Data.ts';
import {MyAiContext} from '../../context.tsx';
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

    const toggleGiftabilityOptions = useCallback((...giftabilityOptionsToggles: boolean[]) => {
        if (!giftabilityOptionsToggles) {
            return;
        }

        if (giftabilityOptionsToggles.length !== availableGiftabilityOptions.length) {
            return;
        }

        const exchanges = availableGiftabilityOptions.filter((_, index) => giftabilityOptionsToggles[index]);
        setSelectedGiftabilityOptions(exchanges);
    }, [availableGiftabilityOptions, setSelectedGiftabilityOptions]);

    useAiTask(
        MyAiContext,
        'Apply a filter for products displayed in the page by giftability. When the user asks for filtering with this criterion, run this task.',
        toggleGiftabilityOptions,
        availableGiftabilityOptions.map(
            (giftability) => `A boolean. Set it to true to include products with giftability option `
                + `"${giftability}" (${filterGiftabilityById[giftability]}) ] in the listed of filtered products. Set it to `
                + `false to exclude products with giftability option "${giftability}".`,
        ),
    );

    const toggleImpulseScores = useCallback((...impulseScoresToggles: boolean[]) => {
        if (!impulseScoresToggles) {
            return;
        }

        if (impulseScoresToggles.length !== filterImpulseScoreOptions.length) {
            return;
        }

        const impulseScores = filterImpulseScoreOptions.filter((_, index) => impulseScoresToggles[index]);
        setSelectedImpulseScores(impulseScores);
    }, [filterImpulseScoreOptions, setSelectedImpulseScores]);

    useAiTask(
        MyAiContext,
        'Apply a filter for products displayed in the page by impulse score. When the user asks for filtering with this criterion, run this task.',
        toggleImpulseScores,
        filterImpulseScoreOptions.map(
            (impulseScore) => `A boolean. Set it to true to include products with impulse score option `
                + `"${impulseScore}" (${filterImpulseScoreById[impulseScore]}) ] in the listed of filtered products. Set it to `
                + `false to exclude products with impulse score option "${impulseScore}".`,
        ),
    );

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
