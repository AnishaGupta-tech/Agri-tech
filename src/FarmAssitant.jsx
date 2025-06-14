import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaMicrophone, FaLanguage } from 'react-icons/fa';
import './FarmAssitant.css';

const FarmAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "नमस्ते! मैं AgriVision AI सहायक हूँ। आप कैसे मदद कर सकता हूँ? (Hello! I'm AgriVision AI Assistant. How can I help?)",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [language, setLanguage] = useState('en'); // Default: English
  const messagesEndRef = useRef(null);

  const languages = {
    en: 'English',
    hi: 'हिन्दी',
    bn: 'বাংলা',
    mr: 'मराठी',
    pa: 'ਪੰਜਾਬੀ',
    gu: 'ગુજરાતી',
    ta: 'தமிழ்',
    te: 'తెలుగు'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // User message
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponses = {
        en: "Our AI is analyzing your query about crops. Meanwhile, check our irrigation guide at [link].",
        hi: "हमारी AI आपके फसल प्रश्न का विश्लेषण कर रही है। इस बीच, हमारी सिंचाई मार्गदर्शिका देखें [link]।",
        // Add responses for other languages...
      };
      setMessages(prev => [...prev, { 
        text: botResponses[language] || botResponses.en, 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="farm-assistant">
      {/* Chatbot toggle button */}
      <button 
        className={`assistant-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
        <span>Farm Assistant</span>
      </button>

      {/* Chatbot container */}
      {isOpen && (
        <div className="assistant-container">
          {/* Header */}
          <div className="assistant-header">
            <h3>
              <FaRobot /> AgriVision AI Assistant
            </h3>
            <div className="language-selector">
              <FaLanguage />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Messages */}
          <div className="assistant-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="assistant-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={
                language === 'hi' ? "अपना संदेश टाइप करें..." : 
                "Type your message..."
              }
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="voice-btn">
              <FaMicrophone />
            </button>
            <button 
              className="send-btn"
              onClick={handleSendMessage}
            >
              {language === 'hi' ? "भेजें" : "Send"}
            </button>
          </div>

          {/* Quick actions */}
          <div className="quick-actions">
            <button>Irrigation Help</button>
            <button>Fertilizer Advice</button>
            <button>Pest Control</button>
            <button>Crop Prices</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmAssistant;