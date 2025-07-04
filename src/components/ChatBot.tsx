
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Asraf's assistant. Ask me about his skills, projects, certifications, or anything else!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const keywordResponses: Record<string, string> = {
    skills: `🚀 **My Technical Skills:**
    
**Frontend:** React, TypeScript, Next.js, Tailwind CSS
**Backend:** Node.js, Express, MongoDB, PostgreSQL  
**Languages:** JavaScript, Python, Java, C++
**Tools:** Git, Docker, AWS, Figma

I'm passionate about building modern web applications with cutting-edge technologies!`,

    projects: `💼 **Featured Projects:**
    
**AI Learning Platform** - Built during university hackathon (Winner!)
**E-commerce Dashboard** - React + Node.js with real-time analytics
**Task Management App** - Full-stack MERN application
**Portfolio Website** - This very site you're on!

Each project showcases different aspects of my development skills. Would you like to know more about any specific project?`,

    certifications: `🏆 **My Certifications:**
    
• **AWS Certified Developer** (2023) - Amazon Web Services
• **React Developer Certification** (2023) - Meta
• **MongoDB Certified Developer** (2023) - MongoDB University
• **JavaScript Algorithms** (2022) - freeCodeCamp
• **Full Stack Development** (2022) - Coursera

These certifications validate my expertise in modern web development technologies.`,

    about: `👋 **About Me:**
    
I'm Asraf, a pre-final year BTech IT student with a passion for creating innovative digital solutions. I love transforming ideas into reality through code.

🎯 **What drives me:**
• Problem-solving through code
• Learning new technologies
• Building user-centric applications
• Contributing to open source

Currently focused on full-stack development and exploring AI/ML integration in web apps!`,

    experience: `💼 **My Experience:**
    
**Competitive Programming:** 1000+ problems solved across platforms
• LeetCode: Knight (1850+)
• CodeChef: 3⭐ (1600+)
• HackerRank: 5⭐ Problem Solving

**Open Source:** Contributing to 15+ projects on GitHub

**Academic:** Dean's List for 4 consecutive semesters

I believe in learning by doing and constantly challenging myself!`,

    contact: `📬 **Let's Connect:**
    
• **Email:** asraf@example.com
• **GitHub:** github.com/asraf
• **LinkedIn:** linkedin.com/in/asraf
• **Twitter:** twitter.com/asraf

I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!`,

    education: `🎓 **Education:**
    
**BTech in Information Technology** (Pre-final year)
• Current CGPA: Dean's List recipient
• Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development
• Active in coding clubs and tech communities

**Key Achievements:**
• University Hackathon Winner (2023)
• Technical Lead in college projects
• Mentor for junior students`,

    default: `🤔 I'd love to help! You can ask me about:

• **skills** - My technical expertise
• **projects** - Featured work and applications
• **certifications** - Professional credentials
• **about** - Personal background and interests
• **experience** - Coding journey and achievements
• **contact** - How to reach out
• **education** - Academic background

What would you like to know more about?`
  };

  const findBestMatch = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Direct keyword matches
    for (const [keyword, response] of Object.entries(keywordResponses)) {
      if (keyword !== 'default' && lowerInput.includes(keyword)) {
        return response;
      }
    }

    // Context-based matches
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! 👋 I'm here to help you learn more about Asraf. What would you like to know?";
    }
    
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! 😊 Feel free to ask me anything else about Asraf's background, skills, or projects!";
    }

    if (lowerInput.includes('help')) {
      return keywordResponses.default;
    }

    return keywordResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestMatch(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            className="fixed bottom-6 left-6 w-96 h-[500px] z-50"
          >
            <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-green-400">● Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto max-h-[340px] space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`p-2 rounded-full ${message.isBot ? 'bg-blue-500' : 'bg-purple-500'} flex-shrink-0`}>
                        {message.isBot ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-white" />}
                      </div>
                      <div className={`p-3 rounded-2xl ${message.isBot ? 'bg-white/10 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'} backdrop-blur-sm`}>
                        <div className="text-sm whitespace-pre-wrap">
                          {formatMessage(message.text)}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start gap-2">
                      <div className="p-2 bg-blue-500 rounded-full">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="flex space-x-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about skills, projects, etc..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
