import React from 'react';
import ReactDOM from 'react-dom/client';
import {Amaizon} from './Amaizon.tsx';
import {MyAiContext} from './context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyAiContext.Provider initialItems={{
            applicationName: {
                value: 'Amaizon',
                description: 'The name of the application that the user is interacting with.',
            },
            applicationGoal: {
                value: 'Edgy Funny Shopping Simulator',
                description: 'The application goal is to provide a fun and edgy shopping experience assisted by AI. The user can interact with the AI to get recommendations, ask questions, and get help with their shopping.',
            },
        }}>
            <Amaizon/>
        </MyAiContext.Provider>
    </React.StrictMode>,
);
