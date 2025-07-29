"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen, TrendingUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Marketing: What's Next in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and what trends will dominate the industry this year.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI Marketing",
      image: "https://dummyjson.com/api/portraits/women/1.jpg",
      gradient: "from-purple-400 to-pink-400",
      featured: true,
      views: "2.5k",
      comments: "24"
    },
    {
      id: 2,
      title: "10 Proven Strategies to Boost Your Conversion Rates",
      excerpt: "Learn the most effective techniques used by top marketers to increase conversions and drive more sales.",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Conversion",
      image: "https://dummyjson.com/api/portraits/men/2.jpg",
      gradient: "from-blue-400 to-cyan-400",
      featured: false,
      views: "1.8k",
      comments: "18"
    },
    {
      id: 3,
      title: "Building Brand Consistency Across All Marketing Channels",
      excerpt: "Master the art of maintaining a cohesive brand identity across multiple platforms and touchpoints.",
      author: "Emily Johnson",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Branding",
      image: "https://dummyjson.com/api/portraits/women/3.jpg",
      gradient: "from-green-400 to-emerald-400",
      featured: false,
      views: "1.2k",
      comments: "15"
    },
    {
      id: 4,
      title: "The Complete Guide to Marketing Automation in 2025",
      excerpt: "Everything you need to know about automating your marketing processes for maximum efficiency.",
      author: "David Kim",
      date: "March 8, 2025",
      readTime: "12 min read",
      category: "Automation",
      image: "https://dummyjson.com/api/portraits/men/4.jpg",
      gradient: "from-orange-400 to-red-400",
      featured: false,
      views: "3.1k",
      comments: "31"
    },
    {
      id: 5,
      title: "How to Create Compelling Content That Converts",
      excerpt: "Discover the secrets behind creating content that not only engages but also drives action and conversions.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Content",
      image: "https://dummyjson.com/api/portraits/women/5.jpg",
      gradient: "from-indigo-400 to-purple-400",
      featured: false,
      views: "1.5k",
      comments: "22"
    },
    {
      id: 6,
      title: "Data-Driven Marketing: Making Decisions Based on Analytics",
      excerpt: "Learn how to leverage data and analytics to make informed marketing decisions that drive results.",
      author: "Alex Morgan",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Analytics",
      image: "https://dummyjson.com/api/portraits/men/6.jpg",
      gradient: "from-pink-400 to-rose-400",
      featured: false,
      views: "2.1k",
      comments: "19"
    }
  ]

  const categories = [
    { name: "All", count: 156, active: true },
    { name: "AI Marketing", count: 42 },
    { name: "Conversion", count: 28 },
    { name: "Branding", count: 35 },
    { name: "Automation", count: 31 },
    { name: "Content", count: 20 }
  ]

  return (
    <section id="BlogSection" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Latest Insights</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Marketing{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with the latest trends, strategies, and insights from marketing experts and industry leaders.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${post.gradient} bg-opacity-20 rounded-full px-4 py-2 mb-6`}>
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">Featured</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
                    >
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${post.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-semibold">Featured Article</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Post Image */}
                <div className={`w-full h-48 bg-gradient-to-br ${post.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <div className="relative z-10 text-center text-white">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">{post.category}</span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-purple-800 hover:bg-white/10 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Marketing Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get weekly updates on the latest marketing trends, AI innovations, and strategies that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent hover:border-purple-400 transition-all duration-300"
              >
                View All Articles
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 