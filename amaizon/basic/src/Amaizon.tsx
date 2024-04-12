import './Amaizon.css';
import {useMarketplace} from './actions/useMarketplace.ts';
import {initialState} from './data/initialState.ts';
import {Header} from './marketplace/Header/Header.tsx';
import {Marketplace} from './marketplace/Marketplace.tsx';

export const Amaizon = () => {
    const {state, actions} = useMarketplace(initialState);

    return (
        <div className="stock-wiz">
            <Header state={state}>
                🛍️ 🤑 Amaizon — The Future Of Shopping
            </Header>
            <div className="content">
                <Marketplace state={state} setFilter={actions.setFilter}/>
            </div>
        </div>
    );
};
