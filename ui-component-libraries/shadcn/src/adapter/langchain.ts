import { useChatAdapter, ChatAdapterOptions } from "@nlux/langchain-react";

const adapterOptions: ChatAdapterOptions<string> = {
  url: "https://pynlux.api.nlkit.com/pirate-speak",
};

export const langChainAdapter = () => useChatAdapter<string>(adapterOptions);
