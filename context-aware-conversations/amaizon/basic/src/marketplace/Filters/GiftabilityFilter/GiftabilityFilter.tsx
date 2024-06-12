import React, {useCallback} from 'react';
import {Giftability} from '../../../@types/Data.ts';

export type GiftabilityFilterProps = {
    selectedOptions: string[];
    availableOptions: Record<Giftability, string>
    setGiftabilityFilter: (giftability: Giftability[]) => void;
};

export const GiftabilityFilter = (props: GiftabilityFilterProps) => {
    const {
        selectedOptions,
        availableOptions,
        setGiftabilityFilter,
    } = props;

    const handleGiftabilityChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
        const giftabilityOptions = checked
            ? [...selectedOptions, value as Giftability]
            : selectedOptions.filter((giftabilityOption) => giftabilityOption !== value);

        setGiftabilityFilter(giftabilityOptions as Giftability[]);
    }, [setGiftabilityFilter, selectedOptions]);

    return (
        <div className="criterion giftability">
            <span className="title">Giftability</span>
            <ul className="options">
                {(Object.keys(availableOptions) as Giftability[]).map((key: Giftability) => {
                    const label = availableOptions[key];
                    return (
                        <li key={key}>
                            <input
                                type="checkbox"
                                id={`giftability-${key}`}
                                name={availableOptions[key]}
                                value={key}
                                checked={selectedOptions.includes(key)}
                                onChange={handleGiftabilityChange}
                            />
                            <label htmlFor={`giftability-${key}`}>{label}</label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
