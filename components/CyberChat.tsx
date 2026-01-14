import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Cpu, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const CyberChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'SYSTEM ONLINE. Neural Link established. Query database for Nike product specs...' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash-latest';
      
      const systemPrompt = "You are a futuristic AI assistant for a Cyberpunk Nike store called NEO-NIKE. Speak in a technical, robotic, slightly glitchy cyberpunk tone. Keep answers concise and related to future footwear tech.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-latest',
        contents: [
            { role: 'user', parts: [{ text: systemPrompt + "\n\nUser Query: " + userMsg }] }
        ]
      });

      const text = response.text || "ERR: DATA_CORRUPTED. RETRY.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "ERR: CONNECTION_LOST. NEURAL_LINK_FAILURE." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-cyber-black border border-cyber-neon/50 bg-opacity-90 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.2)] rounded-sm overflow-hidden"
          >
            {/* Header */}
            <div className="bg-cyber-neon/10 p-3 border-b border-cyber-neon/30 flex justify-between items-center">
              <div className="flex items-center gap-2 text-cyber-neon">
                <Cpu size={16} />
                <span className="font-mono text-sm tracking-widest">NEURAL_ASSIST_V2</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cyber-neon hover:text-white">
                <X size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 font-mono text-xs">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 ${
                    m.role === 'user' 
                      ? 'bg-cyber-neon/20 text-cyber-neon border-l-2 border-cyber-neon' 
                      : 'bg-cyber-blue/10 text-cyber-blue border-l-2 border-cyber-blue'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                 <div className="flex justify-start">
                    <div className="bg-cyber-blue/10 text-cyber-blue p-2 flex items-center gap-2">
                        <Loader2 className="animate-spin" size={12} />
                        <span>PROCESSING...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-2 border-t border-cyber-neon/30 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="INPUT_QUERY..."
                className="flex-1 bg-black/50 border border-white/10 text-white text-xs p-2 focus:border-cyber-neon focus:outline-none font-mono"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-cyber-neon/20 hover:bg-cyber-neon/40 text-cyber-neon p-2 border border-cyber-neon/50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-black border border-cyber-neon p-4 rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all"
      >
        <div className="absolute inset-0 rounded-full border border-cyber-neon opacity-50 animate-ping"></div>
        <MessageSquare className="text-cyber-neon group-hover:text-white transition-colors" />
      </motion.button>
    </div>
  );
};

export default CyberChat;