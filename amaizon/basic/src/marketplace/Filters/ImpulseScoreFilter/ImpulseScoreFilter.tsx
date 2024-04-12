import {useCallback} from 'react';
import {ImpulseScore} from '../../../@types/Data.ts';

export type ImpulseScoreFilterProps = {
    selectedImpulseScores: string[];
    availableImpulseScores: Record<ImpulseScore, string>;
    setImpulseScoresFilter: (impulseScores: ImpulseScore[]) => void;
};

export const ImpulseScoreFilter = (props: ImpulseScoreFilterProps) => {
    const {
        selectedImpulseScores,
        availableImpulseScores,
        setImpulseScoresFilter,
    } = props;

    const handleImpulseScoreChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        const impulseScores = checked
            ? [...selectedImpulseScores, name]
            : selectedImpulseScores.filter((impulseScore) => impulseScore !== name);
        setImpulseScoresFilter(impulseScores as ImpulseScore[]);
    }, [selectedImpulseScores, setImpulseScoresFilter]);

    return (
        <div className="criterion impulseScore">
            <span className="title">Impulse Score</span>
            <ul className="options">
                {Object.keys(availableImpulseScores).map((impulseScore: string) => {
                    const label = availableImpulseScores[impulseScore as ImpulseScore];
                    return (
                        <li key={impulseScore}>
                            <input
                                type="checkbox"
                                id={`impulseScore-${impulseScore}`}
                                name={impulseScore}
                                checked={selectedImpulseScores.includes(impulseScore)}
                                onChange={handleImpulseScoreChange}
                            />
                            <label htmlFor={`impulseScore-${impulseScore}`}>{label}</label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
