import {AiChat} from '@nlux/react';
import {useChatAdapter} from '@nlux/nlbridge-react';
import '@nlux/themes/nova.css';
import '../App.css'
import {MyAiContext} from './Context.tsx';
import {assistantCssStyle} from './personas.tsx';

export const Assistant = () => {
    const adapter = useChatAdapter({
        url: 'http://localhost:3000/assist',
        mode: 'copilot',
        context: MyAiContext,
    });

    return (
        <AiChat
            adapter={adapter}
            conversationOptions={{
                layout: 'bubbles'
            }}
            personaOptions={{
                assistant: {
                    name: 'Cal Bot',
                    avatar: <span style={assistantCssStyle}>📅</span>,
                    tagline: 'Your AI Help From A Future Date',
                },
                user: {
                    name: 'Alex',
                    avatar: 'https://docs.nlkit.com/nlux/images/personas/alex.png'
                }
            }}
        />
    );
};
