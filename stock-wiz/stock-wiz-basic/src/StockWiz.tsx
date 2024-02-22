import './StockWiz.css';
import {usePortfolio} from './actions/usePortfolio.ts';
import {initialState} from './data/initialState.ts';
import {Header} from './portfolio/Header/Header.tsx';
import {Portfolio} from './portfolio/Portfolio.tsx';

export const StockWiz = () => {
    const {state, actions} = usePortfolio(initialState);

    return (
        <div className="stock-wiz">
            <Header state={state}>
                💹 🧙‍♂️ Stock Wiz
            </Header>
            <div className="content">
                <Portfolio state={state} actions={actions}/>
            </div>
        </div>
    );
};
