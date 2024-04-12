import {createContextAdapter} from '@nlux/nlbridge-react';
import {createAiContext} from '@nlux/react';

const contextAdapter = createContextAdapter()
    .withUrl('http://localhost:8899');

export const MyAiContext = createAiContext(contextAdapter);
