import { langChainAdapter } from "@/adapter/langchain";
import { openAiAdapter } from "@/adapter/openai";
import { StandardChatAdapter } from "@nlux/react";

export const models: {
  modelName: string;
  icon: string;
  adapter: () => StandardChatAdapter;
  description: string;
}[] = [
  {
    modelName: "LangChain LangServe",
    icon: "./langchain-logo.png",
    adapter: langChainAdapter,
    description: "Versatile framework for advanced language tasks.",
  },
  {
    modelName: "GPT-4o",
    icon: "./openai-logo.svg",
    adapter: openAiAdapter,
    description: "OpenAI fastest model for general use cases.",
  },
];
