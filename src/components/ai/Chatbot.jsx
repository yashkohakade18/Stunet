import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Minimize2 } from 'lucide-react';
import Button from '../ui/Button';

const PRESET_RESPONSES = {
  'colleges': 'I can help you find colleges! Just tell me your CET score and preferred location.',
  'notes': 'Looking for study material? Check the Notes section or tell me your branch and I can search for you.',
  'papers': 'We have a large collection of PYQs in the Papers section.',
  'hello': 'Hello! I am Stunty, your AI academic assistant. How can I help you today?',
  'default': 'That is a great question. I am currently learning more about Stunet to help you better! You can ask about colleges, notes, or papers.'
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Stunty. How can I help you navigate your academic journey today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = PRESET_RESPONSES.default;
      
      if (lowerInput.includes('college')) responseText = PRESET_RESPONSES.colleges;
      if (lowerInput.includes('note')) responseText = PRESET_RESPONSES.notes;
      if (lowerInput.includes('paper')) responseText = PRESET_RESPONSES.papers;
      if (lowerInput.includes('hi') || lowerInput.includes('hello')) responseText = PRESET_RESPONSES.hello;

      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Button */}
      {!isOpen && (
        <button 
          className="chatbot-trigger"
          onClick={() => setIsOpen(true)}
        >
          <Sparkles className="sparkle-icon" size={20} />
          <MessageSquare size={24} />
          <span className="notification-dot"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="flex items-center gap-3">
              <div className="bot-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Stunty AI</h4>
                <div className="flex items-center gap-1">
                  <span className="online-indicator"></span>
                  <span className="text-[10px] text-white/60">Online & Ready</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-chat">
              <Minimize2 size={18} />
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map(msg => (
              <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                <div className="bubble-content">
                  {msg.text}
                </div>
                <span className="message-time">
                  {msg.sender === 'bot' ? 'Stunty' : 'You'}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="message-bubble bot">
                <div className="bubble-content typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="send-btn">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
