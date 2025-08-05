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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
      gradient: "from-blue-500 to-purple-600",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
      gradient: "from-green-500 to-emerald-600",
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
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=center",
      gradient: "from-purple-500 to-pink-600",
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
      gradient: "from-orange-500 to-red-600",
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
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop&crop=center",
      gradient: "from-indigo-500 to-blue-600",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
      gradient: "from-teal-500 to-cyan-600",
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
    { name: "Content", count: 20 },
  ]

  return (
    <section id="blog" className="section-padding px-4 relative overflow-hidden">
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
            <BookOpen className="w-4 h-4 text-white" />
            <span className="text-sm text-gray-300">Latest Insights</span>
          </div>
          
          <h2 className="text-display font-playfair text-white mb-6">
            Marketing{" "}
            <span className="text-gradient-primary">Insights</span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with the latest marketing trends, strategies, and insights from industry experts.
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
            <button
              key={index}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-white text-black shadow-lg'
                  : 'glass-dark text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="card-hover gradient-card rounded-2xl p-4 sm:p-8 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-2 sm:px-3 py-1 mb-3 sm:mb-4">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs text-gray-300">Featured</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      size="lg"
                      className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-sm sm:text-body px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        // Demo functionality - in real app this would go to the blog post
                        alert('This would navigate to the full blog post in a real application.')
                      }}
                    >
                      Read Article
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full aspect-video lg:aspect-[4/3] bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-hover gradient-card rounded-2xl p-4 sm:p-6 h-full backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                <div className="w-full aspect-video bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mb-4 sm:mb-6 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-gray-500 to-gray-600" />
                </div>
                
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-2 sm:px-3 py-1">
                    <span className="text-xs text-gray-300">{post.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gradient-primary transition-all duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-playfair text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest marketing insights, tips, and strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-body px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  // Demo functionality - in real app this would subscribe to newsletter
                  alert('Newsletter subscription functionality would be implemented here.')
                }}
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-body px-8 py-4 bg-transparent rounded-xl transition-all duration-300"
                onClick={() => {
                  // Demo functionality - in real app this would show all articles
                  alert('This would show all blog articles in a real application.')
                }}
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