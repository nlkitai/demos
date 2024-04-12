import './Amaizon.css';
import {useChatAdapter} from '@nlux/nlbridge-react';
import '@nlux/themes/nova.css';
import {AiChat} from '@nlux/react';
import {useMarketplace} from './actions/useMarketplace.ts';
import {MyAiContext} from './context.tsx';
import {initialState} from './data/initialState.ts';
import {Header} from './marketplace/Header/Header.tsx';
import {Marketplace} from './marketplace/Marketplace.tsx';

export const Amaizon = () => {
    const {state, actions} = useMarketplace(initialState);
    const adapter = useChatAdapter({
        url: 'http://localhost:8899/',
        mode: 'copilot',
        context: MyAiContext,
    });

    return (
        <div className="stock-wiz">
            <Header state={state}>
                🛍️ 🤑 Amaizon — The Future Of Shopping
            </Header>
            <div className="content">
                <Marketplace state={state} setFilter={actions.setFilter}/>
                <AiChat adapter={adapter} className={"aiChat"} />
            </div>
        </div>
    );
};
