import { useState } from 'react'
import { MessageCircle, X, Minimize2 } from 'lucide-react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import QuickChips from './QuickChips'
import { useChat } from '../../hooks/useChat'
import { useColleges } from '../../hooks/useColleges'

export default function ChatbotPanel() {
  const [open, setOpen] = useState(false)
  const { colleges } = useColleges()
  const { messages, loading, sendMessage } = useChat(colleges)

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-cyan rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors glow-cyan"
        >
          <MessageCircle size={24} className="text-black" />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] h-[520px] bg-bg-card border border-brand-cyan/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-ink-faint/30 bg-bg-surface">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-brand-cyan/10 rounded-full flex items-center justify-center border border-brand-cyan/30">
                <MessageCircle size={15} className="text-brand-cyan" />
              </div>
              <div>
                <p className="text-sm font-syne font-700 text-ink-primary">StudBot</p>
                <p className="text-[10px] text-brand-green flex items-center gap-1"><span className="w-1.5 h-1.5 bg-brand-green rounded-full inline-block" /> Online</p>
              </div>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setOpen(false)} className="p-1.5 text-ink-muted hover:text-ink-primary rounded-lg hover:bg-bg-card transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((m, i) => <ChatMessage key={i} message={m} />)}
            {loading && (
              <div className="flex gap-1 p-3 bg-bg-surface rounded-xl w-fit">
                {[0,1,2].map(i => <span key={i} className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />)}
              </div>
            )}
          </div>

          {/* Quick chips */}
          {messages.length <= 1 && <QuickChips onSelect={sendMessage} />}

          {/* Input */}
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      )}
    </>
  )
}
