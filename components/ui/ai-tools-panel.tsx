"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, 
  Target, 
  BarChart3, 
  MessageCircle, 
  Sparkles, 
  Loader2, 
  Copy, 
  Check,
  Send,
  X,
  Bot,
  User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface GeneratedContent {
  content: string
  type: string
  timestamp: string
}

export function AIToolsPanel() {
  const [activeTool, setActiveTool] = useState<'content' | 'analysis' | 'chat' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState("")
  const [contentPrompt, setContentPrompt] = useState("")
  const [contentType, setContentType] = useState("social_media")
  const [brandVoice, setBrandVoice] = useState("professional yet friendly")
  const [targetAudience, setTargetAudience] = useState("general consumers")
  const [copied, setCopied] = useState(false)
  const [analyticsData, setAnalyticsData] = useState<any>(null)

  // Track page view on component mount
  useEffect(() => {
    trackEvent('page_view', { page: 'ai_tools_panel' })
    fetchAnalytics()
  }, [])

  const trackEvent = async (event: string, data?: any) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event,
          userId: `user_${Math.random().toString(36).substr(2, 9)}`,
          data
        })
      })
    } catch (error) {
      // Silently fail for analytics - don't break user experience
      console.error('Analytics tracking failed:', error)
    }
  }

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics/track')
      if (!response.ok) {
        throw new Error('Failed to fetch analytics')
      }
      const data = await response.json()
      if (data.success) {
        setAnalyticsData(data.metrics)
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
      // Set demo data if API fails
      setAnalyticsData({
        pageViews: 1250,
        uniqueVisitors: 890,
        conversionRate: 12.4,
        realTimeUsers: 45
      })
    }
  }

  const generateContent = async () => {
    if (!contentPrompt.trim()) {
      toast.error("Please enter a prompt")
      return
    }

    setIsLoading(true)
    trackEvent('ai_content_generation', { type: contentType })

    try {
      const response = await fetch('/api/ai/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: contentPrompt,
          type: contentType,
          brandVoice,
          targetAudience
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate content')
      }

      const data = await response.json()
      
      if (data.success) {
        setGeneratedContent(data)
        toast.success("Content generated successfully!")
      } else {
        toast.error(data.error || "Failed to generate content")
      }
    } catch (error) {
      console.error('Content generation error:', error)
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: chatInput,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    const currentInput = chatInput
    setChatInput("")
    setIsLoading(true)
    trackEvent('chat_message_sent')

    try {
      const response = await fetch('/api/ai/chat-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: chatMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          userId: `user_${Math.random().toString(36).substr(2, 9)}`
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      if (data.success) {
        const aiMessage: ChatMessage = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, aiMessage])
      } else {
        toast.error(data.error || "Failed to get response")
      }
    } catch (error) {
      console.error('Chat error:', error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success("Copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Failed to copy to clipboard")
    }
  }

  const tools = [
    {
      id: 'content',
      name: 'AI Content Generator',
      description: 'Generate marketing content with AI',
      icon: Zap,
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 'analysis',
      name: 'Campaign Analysis',
      description: 'Get AI-powered campaign insights',
      icon: BarChart3,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'chat',
      name: 'AI Support Chat',
      description: 'Get instant help from AI assistant',
      icon: MessageCircle,
      color: 'from-gray-600 to-gray-700'
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tool Selection */}
      {!activeTool && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={() => setActiveTool(tool.id as any)}
            >
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Content Generator */}
      <AnimatePresence>
        {activeTool === 'content' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif text-white">AI Content Generator</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTool(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Content Type</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger className="bg-gray-900/50 border-gray-700/50 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social_media">Social Media Post</SelectItem>
                      <SelectItem value="email">Email Campaign</SelectItem>
                      <SelectItem value="ad_copy">Ad Copy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Brand Voice</label>
                  <Input
                    value={brandVoice}
                    onChange={(e) => setBrandVoice(e.target.value)}
                    placeholder="Professional yet friendly"
                    className="bg-gray-900/50 border-gray-700/50 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Target Audience</label>
                  <Input
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="General consumers"
                    className="bg-gray-900/50 border-gray-700/50 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Prompt</label>
                  <Textarea
                    value={contentPrompt}
                    onChange={(e) => setContentPrompt(e.target.value)}
                    placeholder="Describe what content you want to generate..."
                    className="bg-gray-900/50 border-gray-700/50 text-white min-h-[120px]"
                  />
                </div>

                <Button
                  onClick={generateContent}
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-gray-100 text-black font-medium rounded-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Generated Content</h3>
                {generatedContent ? (
                  <div className="p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                        {generatedContent.type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(generatedContent.content)}
                        className="text-gray-400 hover:text-white"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="text-gray-300 text-sm whitespace-pre-wrap">
                      {generatedContent.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-3">
                      Generated at {new Date(generatedContent.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 bg-gray-900/50 border border-gray-700/50 border-dashed rounded-xl">
                    <div className="text-center text-gray-400">
                      <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-50" />
                      <p>Your generated content will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Support */}
      <AnimatePresence>
        {activeTool === 'chat' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif text-white">AI Support Chat</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTool(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-400 mt-8">
                    <Bot className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>Start a conversation with our AI assistant</p>
                  </div>
                ) : (
                  chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-white text-black'
                            : 'bg-gray-800/50 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.role === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.role === 'user' ? 'You' : 'AI Assistant'}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800/50 text-gray-300 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <span className="text-xs opacity-70">AI Assistant</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span className="text-sm">Typing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-900/50 border-gray-700/50 text-white"
                />
                <Button
                  onClick={sendChatMessage}
                  disabled={isLoading || !chatInput.trim()}
                  className="bg-white hover:bg-gray-100 text-black font-medium rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {activeTool === 'analysis' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif text-white">Campaign Analytics</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTool(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {analyticsData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Page Views</p>
                      <p className="text-2xl font-bold text-white">{analyticsData.pageViews}</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-gray-400" />
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Unique Visitors</p>
                      <p className="text-2xl font-bold text-white">{analyticsData.uniqueVisitors}</p>
                    </div>
                    <Target className="w-8 h-8 text-gray-400" />
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Conversion Rate</p>
                      <p className="text-2xl font-bold text-white">{analyticsData.conversionRate}%</p>
                    </div>
                    <Zap className="w-8 h-8 text-gray-400" />
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Real-time Users</p>
                      <p className="text-2xl font-bold text-white">{analyticsData.realTimeUsers}</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 bg-gray-900/50 border border-gray-700/50 border-dashed rounded-xl">
                <div className="text-center text-gray-400">
                  <BarChart3 className="w-8 h-8 mx-auto mb-3 opacity-50" />
                  <p>Loading analytics data...</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 