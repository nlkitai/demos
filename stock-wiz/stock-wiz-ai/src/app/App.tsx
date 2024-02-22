import './App.css';
import {StockWizAiContext} from '../context.tsx';
import {StockWiz} from '../StockWiz.tsx';

export const App = () => {
    return (
        <StockWizAiContext.Provider>
            <StockWiz/>
        </StockWizAiContext.Provider>
    );
};
