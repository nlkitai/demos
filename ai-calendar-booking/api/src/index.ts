import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { defaultMiddleware as nlBridgeAiAssistantMiddleware } from '@nlbridge/express';
import cors from 'cors';

import contextInstruction from './instructions/context';
import getParameterValuesInstruction from './instructions/params';
import getTaskNameInstruction from './instructions/taskName';

const port = 3000;
const app = express();
app.use(cors())

const jsonParser = bodyParser.json();
app.post('/assist', jsonParser, nlBridgeAiAssistantMiddleware(
    'openai',
    {
        apiKey: process.env.OPENAI_API_KEY ?? '',
        chatModel: 'gpt-4o',
        llmInstructions: {
            context: contextInstruction,
            taskName: getTaskNameInstruction,
            parameterValues: getParameterValuesInstruction,
        },
    }
));

app.get('/', (req, res) => {
    res.send(`
        Welcome to the AI Calendar Booking API.<br />
        This is the API for the AI Calendar Booking demo.<br />
        The demo also comes with a web interface built using NLUX React.<br />
        Check the README file or visit <a href="https://docs.nlkit.com/nlux">NLUX documentation</a> for more information.
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
