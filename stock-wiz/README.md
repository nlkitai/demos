# Stock Wiz `nlux` demo

This is a simple React JS project that uses `nlux` as AI assistant to make stock related decisions.

Two versions are provided:

* `stock-wiz-basic`: A simple UI that does not use `nlux` or AI.
* `stock-wiz-ai`: A version that uses `nlux` and `nlbridge` to add an AI assistant.

## Running `stock-wiz-ai`

The `stock-wiz-ai` relies on a running instance of `nlbridge` locally, that is used to communicate with the AI model.
The default AI model is ChatGPT, but you can use any other model with `nlbridge`.

To run the `nlbridge` server, you can use the following command:

```bash
# Assuming that your have your OpenAI API key in the environment variable OPENAI_API_KEY
npx @nlbridge/server --api openai --port 8899
```
```bash
# Or, you can use the --api-key flag to set the OpenAI API key in the command line
npx @nlbridge/server --api openai --port 8899 --api-key YOUR_API_KEY
```

Then, you can run the `stock-wiz-ai` demo:

```bash
cd stock-wiz-ai
yarn
yarn dev
````

## Running `stock-wiz-basic`

The `stock-wiz-basic` is a simpel React JS project with a Vite server. To run the demo, simply run:

```bash
cd stock-wiz-basic
yarn
yarn dev
```
