import { useState } from 'react'
import { buildSystemPrompt } from '../utils/buildChatContext'

export function useChat(colleges = []) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hi! I\'m StudBot. Ask me anything about Maharashtra CET admissions, colleges, or rounds!' }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (userText) => {
    const userMsg = { role: 'user', content: userText }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setLoading(true)

    try {
      const apiMessages = updated
        .filter(m => m.role !== 'assistant' || updated.indexOf(m) > 0)
        .map(m => ({ role: m.role, content: m.content }))

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: buildSystemPrompt(colleges),
          messages: apiMessages,
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Sorry, I could not process that.'
      setMessages([...updated, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: '⚠️ Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return { messages, loading, sendMessage }
}
