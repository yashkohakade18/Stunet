import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import './AIAssistant.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Stunty, your admission assistant. How can I help you today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Mock response logic
    setTimeout(() => {
      let aiResponse = "I'm not sure about that. Could you please rephrase?";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        aiResponse = "Hello! How can I assist you with your college search today?";
      } else if (lowerInput.includes('cutoff') || lowerInput.includes('cet')) {
        aiResponse = "You can filter colleges by CET score on the College List page. Most top engineering colleges in Pune require a 95+ percentile.";
      } else if (lowerInput.includes('fee')) {
        aiResponse = "Fees vary between government and private colleges. Generally, it ranges from ₹1.2L to ₹2.5L per year for Engineering.";
      } else if (lowerInput.includes('pune')) {
        aiResponse = "Pune has many top colleges like COEP, PICT, and VIT. You can check them out in the map view!";
      } else if (lowerInput.includes('thank')) {
        aiResponse = "You're welcome! Let me know if you have more questions.";
      }
      
      const aiMsg = { id: Date.now() + 1, text: aiResponse, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    }, 800);
  };

  return (
    <div className={`ai-assistant-container ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button className="ai-fab" onClick={() => setIsOpen(true)}>
          <Sparkles size={24} />
        </button>
      ) : (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="flex items-center gap-2">
              <div className="ai-avatar">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="ai-name">Stunty AI</h4>
                <span className="ai-status">Online</span>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="ai-chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`ai-message ${msg.sender}`}>
                <div className="ai-message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="ai-chat-input">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
