import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your SolEra AI assistant. I can help you analyze your portfolio, understand market trends, and answer questions about your Solana investments. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: getAIResponse(input)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("portfolio") || lowerQuestion.includes("balance")) {
      return "Based on your current holdings, your portfolio is worth $3,800 with a 15.2% gain this month. Your largest holding is SOL at 45% allocation, which has performed well. Consider diversifying into stablecoins if you want to reduce volatility.";
    }
    
    if (lowerQuestion.includes("risk") || lowerQuestion.includes("volatility")) {
      return "Your portfolio has moderate volatility with a good diversification score. Your exposure risk is low. However, 45% in SOL means you're somewhat concentrated. Consider spreading across more assets for better risk management.";
    }
    
    if (lowerQuestion.includes("best") || lowerQuestion.includes("performance")) {
      return "RAY has been your best performer with +12.8% in 24 hours. SOL is also doing well at +5.2%. Overall, your portfolio is outperforming the market average by 3.2%.";
    }
    
    return "I understand your question. Let me analyze the data... Based on current market conditions and your portfolio composition, I recommend monitoring your positions closely and considering taking some profits on your top performers.";
  };

  const suggestedQuestions = [
    "What's my best performing asset?",
    "How risky is my portfolio?",
    "Should I rebalance my holdings?",
    "What are the market trends today?"
  ];

  return (
    <DashboardLayout title="AI Assistant">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
            {/* Chat Messages */}
            <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "glass border border-white/10"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="glass border border-white/10 p-4 rounded-2xl">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-3">Suggested questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-left h-auto py-3 border-white/10 hover:bg-white/5"
                      onClick={() => setInput(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Ask me anything about your portfolio or Solana..."
                    className="min-h-[60px] bg-secondary border-white/10 resize-none"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="button-gradient self-end"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
      </div>
    </DashboardLayout>
  );
};

export default AIAssistant;
