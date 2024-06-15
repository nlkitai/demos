import { useUnsafeChatAdapter, ChatAdapterOptions } from "@nlux/openai-react";

const adapterOptions: ChatAdapterOptions = {
  apiKey: "your-openai-api-key-here",
  model: "gpt-4o",
  systemMessage: "Act as a helpful assistant and be funny and engaging.",
};

export const openAiAdapter = ()=> useUnsafeChatAdapter<string>(adapterOptions);
