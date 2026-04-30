export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-wrap
        ${isUser
          ? 'bg-brand-cyan text-black font-medium rounded-br-sm'
          : 'bg-bg-surface text-ink-primary border border-ink-faint/40 rounded-bl-sm'
        }`}>
        {message.content}
      </div>
    </div>
  )
}
