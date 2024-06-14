import {createContextAdapter} from '@nlux/nlbridge-react';
import {createAiContext} from '@nlux/react';

const contextAdapter = createContextAdapter()
    .withUrl('http://localhost:3000/assist');

export const MyAiContext = createAiContext(contextAdapter);
