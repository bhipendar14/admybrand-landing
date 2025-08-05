"use client"

import { motion } from "framer-motion"
import { HelpCircle, MessageCircle, BookOpen, Video, Mail, Phone, Clock, ArrowRight, Search, FileText, Users, Zap, TrendingUp, BarChart3, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useMemo } from "react"

export function HelpSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)

  const helpTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics of ADmyBRAND AI and set up your first campaign.",
      icon: Zap,
      gradient: "from-gray-500 to-gray-600",
      articles: 12,
      tags: ["setup", "beginner", "first campaign", "basics"]
    },
    {
      title: "AI Tools Guide",
      description: "Master our AI-powered tools for content generation and analytics.",
      icon: BookOpen,
      gradient: "from-gray-500 to-gray-600",
      articles: 8,
      tags: ["ai", "content generation", "analytics", "tools"]
    },
    {
      title: "Campaign Management",
      description: "Create, optimize, and track your marketing campaigns effectively.",
      icon: TrendingUp,
      gradient: "from-gray-500 to-gray-600",
      articles: 15,
      tags: ["campaigns", "marketing", "optimization", "tracking"]
    },
    {
      title: "Analytics & Reporting",
      description: "Understand your data and generate comprehensive reports.",
      icon: BarChart3,
      gradient: "from-gray-500 to-gray-600",
      articles: 10,
      tags: ["analytics", "reports", "data", "insights"]
    },
    {
      title: "Integrations",
      description: "Connect ADmyBRAND AI with your existing tools and platforms.",
      icon: MessageCircle,
      gradient: "from-gray-500 to-gray-600",
      articles: 6,
      tags: ["integrations", "connect", "platforms", "tools"]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions to keep you running smoothly.",
      icon: HelpCircle,
      gradient: "from-gray-500 to-gray-600",
      articles: 20,
      tags: ["troubleshooting", "issues", "solutions", "problems"]
    }
  ]

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      response: "2-5 minutes",
      available: true,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      response: "4-8 hours",
      available: true,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      response: "Instant",
      available: true,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: Users,
      response: "Varies",
      available: true,
      gradient: "from-gray-500 to-gray-600"
    }
  ]

  // Filter help topics based on search query
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return helpTopics
    
    const query = searchQuery.toLowerCase()
    return helpTopics.filter(topic => 
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query) ||
      topic.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery, helpTopics])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSearchResults(true)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSearchResults(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      clearSearch()
    }
  }

  return (
    <section id="help" className="section-padding px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-modern relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-sm text-gray-300">Support Center</span>
          </div>
          
          <h2 className="text-display font-playfair text-white mb-6">
            How Can We{" "}
            <span className="text-gradient-primary">Help You?</span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to your questions, learn how to use our platform, and get the support you need to succeed.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles, tutorials, or guides..."
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-20 sm:pr-24 lg:pr-28 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-16 sm:right-20 lg:right-24 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-all duration-300 text-xs font-medium"
            >
              Search
            </button>
          </form>
          
          {/* Search Results */}
          {showSearchResults && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-300">
                  Found {filteredTopics.length} results for "{searchQuery}"
                </span>
                <button
                  onClick={clearSearch}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Clear
                </button>
              </div>
              {filteredTopics.length > 0 ? (
                <div className="space-y-2">
                  {filteredTopics.slice(0, 3).map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => {
                        alert(`Opening ${topic.title} help section`)
                        setShowSearchResults(false)
                      }}
                    >
                      <topic.icon className="w-4 h-4 text-gray-400" />
                      <div className="flex-1">
                        <div className="text-sm text-white font-medium">{topic.title}</div>
                        <div className="text-xs text-gray-400">{topic.description}</div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                    </div>
                  ))}
                  {filteredTopics.length > 3 && (
                    <div className="text-xs text-gray-400 text-center pt-2">
                      +{filteredTopics.length - 3} more results
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="text-gray-400 text-sm mb-2">No results found</div>
                  <div className="text-xs text-gray-500">Try different keywords or browse all topics below</div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {filteredTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-hover gradient-card rounded-2xl p-4 sm:p-6 h-full backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${topic.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <topic.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                    {topic.articles} articles
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gradient-primary transition-all duration-300 leading-tight">
                  {topic.title}
                </h3>
                
                <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    className="btn-modern bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                    onClick={() => {
                      // Demo functionality - in real app this would show help articles
                      alert(`Showing help articles for ${topic.title}`)
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-playfair text-white text-center mb-6 sm:mb-8">
            Get Support
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="card-hover gradient-card rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    {option.title}
                  </h4>
                  
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs text-gray-400 mb-3 sm:mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{option.response}</span>
                  </div>
                  
                  <Button
                    size="sm"
                    className="btn-modern bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                    onClick={() => {
                      // Demo functionality - in real app this would open the support option
                      alert(`Opening ${option.title} support`)
                    }}
                  >
                    {option.title}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-playfair text-white mb-3 sm:mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Our support team is here to help you succeed. Reach out to us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>bhipendar31@gmail.com</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+91 9876543210</span>
                </div>
              </div>
              <Button
                size="lg"
                className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/pages/company/contact'}
              >
                Contact Support
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 