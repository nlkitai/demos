import {NextResponse} from 'next/server';

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const response = await fetch('https://demo.api.nlux.ai/openai/chat/fetch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            prompt,
        }),
    });

    const data = await response.json();
    if (typeof data.content !== 'string') {
        throw new Error('Failed to fetch text');
    }

    return NextResponse.json({ reply: data.content });
}
