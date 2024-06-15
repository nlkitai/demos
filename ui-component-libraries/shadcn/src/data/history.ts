import { ChatItem } from "@nlux/react";

export const conversations: {
  avatar: string;
  title: string;
  chat?: ChatItem[];
}[] = [
  {
    avatar: "https://github.com/shadcn.png",
    title: "New Conversation",
  },
  {
    avatar: "https://github.com/shadcn.png",
    title: "Capital of Antartica",
    chat: [
      {
        role: "user",
        message: "What's the capital of Antartica?",
      },
      {
        role: "assistant",
        message:
          'Arrr, matey! The **capital** of _Antarctica_ be none other than `"Arrrctica"`, where ye can find a jolly crew of penguins swashbuckling on icy seas!',
      },
    ],
  },
  {
    avatar: "https://github.com/shadcn.png",
    title: "Fastest land animal",
    chat: [
      {
        role: "user",
        message: "What's the fastest land animal?",
      },
      {
        role: "assistant",
        message:
          "Yarrr! The **fastest** land animal be the mighty `cheetah`! It zooms across the savannah like a cannonball from a pirate ship!",
      },
    ],
  },
  {
    avatar: "https://github.com/shadcn.png",
    title: "Plants",
    chat: [
      {
        role: "user",
        message: "How do plants make food?",
      },
      {
        role: "assistant",
        message:
          "Ahoy! Plants be clever sailors, harnessin' the power of the sun through a process called `photosynthesis`! They be usin' sunlight, water, and carbon dioxide to cook up a feast o' sugar and oxygen!",
      },
    ],
  },
];
