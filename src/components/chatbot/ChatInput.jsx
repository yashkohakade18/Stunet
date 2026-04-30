import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim() || disabled) return
    onSend(text.trim())
    setText('')
  }

  return (
    <div className="p-3 border-t border-ink-faint/30 flex gap-2">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Ask StudBot anything..."
        disabled={disabled}
        className="flex-1 bg-bg-surface border border-ink-faint/50 rounded-xl px-3.5 py-2.5 text-sm text-ink-primary placeholder-ink-faint/60 outline-none focus:border-brand-cyan/40"
      />
      <button
        onClick={handleSend}
        disabled={!text.trim() || disabled}
        className="w-10 h-10 bg-brand-cyan rounded-xl flex items-center justify-center disabled:opacity-40 hover:bg-white transition-colors"
      >
        <Send size={16} className="text-black" />
      </button>
    </div>
  )
}
