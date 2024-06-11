'use client';
import {fetchText} from '@/app/adapter/route';
import {AiChat, ChatAdapter, ChatAdapterExtras} from '@nlux/react';
import {useMemo} from 'react';

export const ChatComponent = () => {
    const adapter: ChatAdapter = useMemo(() => ({
        batchText: async (
            message: string,
            extras: ChatAdapterExtras<string>,
        ) => {
            return fetchText(message);
        }
    }), []);

    return (
        <div className="aiChat-container">
            <AiChat
                adapter={adapter}
                personaOptions={{
                    assistant: {
                        name: 'HarryBotter',
                        avatar: 'https://docs.nlkit.com/nlux/images/personas/harry-botter.png',
                        tagline: 'Mischievously Making Magic With Mirthful AI!'
                    },
                    user: {
                        name: 'Alex',
                        avatar: 'https://docs.nlkit.com/nlux/images/personas/alex.png'
                    }
                }}
                displayOptions={{ width: 600, height: 400 }}
            />
        </div>
    );
};
