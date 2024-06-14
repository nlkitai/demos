# AI Calendar Booking

This is a demo project that showcases how to create a simple AI assistant that can book calendar events on behalf of
the user, using `NLUX`, `NLBridge`, and the `OpenAI` API.

## Features

- [x] Create a simple AI assistant that can book calendar events on behalf of the user.
- [x] Use `NLUX` `React` for the user interface.
- [x] Use `NLBridge` `Node.js` to connect to the OpenAI API and call a user defined function.

## How to run the demo

- Clone the repository.

### 1. Run the Node.js server

- Navigate to the project directory `ai-calendar-booking/api`
- Edit the `.env` file and add your OpenAI API key.
- Run the following commands:

```bash
npm install
npm run dev
```

This will start the Node.js server on `http://localhost:3000`.

### 2. Run the React app

- Navigate to the project directory `ai-calendar-booking/ui`
- Run the following commands:

```bash
npm install
npm run dev
```

## Implementation

### On the server side

- The server side code is implemented using `NLBridge` and `Node.js`.

`@nlbridge/express` is the `Node.js` middleware by NLKit, the same team that created `NLUX`.<br />
https://github.com/nlkitai/nlbridge

- The default NLBridge middleware is used to create a simple API endpoint that connects to the OpenAI API.
- The prompts used to instruct the LLM to interpret the user input are defined in the `api/src/instructions`.

3 prompts exist and be adjusted:

- `context.ts` — Give the overall context of the conversation, and what the AI can and cannot do.
- `taskName.ts` — The prompt used to determine if the user wants to run a task, and if so, which task.
- `taskParams.ts` — The prompt used to gather the parameters for the task.

### On the client side

- The client side code is implemented using `NLUX` and `React`.
- The app is wrapped in `<MyAiContext.Provider>` to provide AI context used across the app.
- In `App.tsx`, we use `useAiTask` to register a task that can be called by the AI assistant.

## Further Assistance

For further assistance, please refer to the official documentation of `NLUX` and `NLBridge`.<br />
https://docs.nlux.ai
