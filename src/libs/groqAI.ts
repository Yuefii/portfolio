import { Groq } from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
})

export const request = async (message: string) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Silakan jawab dalam bahasa Indonesia: ${message}`
      }
    ],
    model: 'llama3-70b-8192'
  })
  return reply.choices[0].message.content
}
