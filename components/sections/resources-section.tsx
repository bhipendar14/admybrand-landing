"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Video, Download, ExternalLink, ArrowRight, Users, TrendingUp, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResourcesSection() {
  const resources = [
    {
      title: "Marketing Guide 2025",
      description: "Complete guide to modern marketing strategies and best practices for 2025.",
      type: "PDF Guide",
      icon: FileText,
      gradient: "from-gray-500 to-gray-600",
      downloads: "2.5k",
      size: "15 MB"
    },
    {
      title: "AI Marketing Masterclass",
      description: "Learn how to leverage AI for marketing automation and content creation.",
      type: "Video Course",
      icon: Video,
      gradient: "from-gray-500 to-gray-600",
      downloads: "1.8k",
      size: "45 min"
    },
    {
      title: "Campaign Templates",
      description: "Ready-to-use templates for email campaigns, social media, and ads.",
      type: "Templates",
      icon: BookOpen,
      gradient: "from-gray-500 to-gray-600",
      downloads: "3.2k",
      size: "8 MB"
    },
    {
      title: "Analytics Dashboard",
      description: "Free analytics dashboard template for tracking marketing performance.",
      type: "Tool",
      icon: BarChart3,
      gradient: "from-gray-500 to-gray-600",
      downloads: "1.5k",
      size: "5 MB"
    },
    {
      title: "ROI Calculator",
      description: "Calculate your marketing ROI and optimize your budget allocation.",
      type: "Calculator",
      icon: TrendingUp,
      gradient: "from-gray-500 to-gray-600",
      downloads: "2.1k",
      size: "2 MB"
    },
    {
      title: "Content Calendar",
      description: "Plan and organize your content marketing strategy with our calendar tool.",
      type: "Tool",
      icon: Zap,
      gradient: "from-gray-500 to-gray-600",
      downloads: "1.9k",
      size: "3 MB"
    }
  ]

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Guides", count: 8 },
    { name: "Templates", count: 6 },
    { name: "Tools", count: 5 },
    { name: "Videos", count: 3 },
    { name: "Calculators", count: 2 },
  ]

  return (
    <section id="resources" className="section-padding px-4 relative overflow-hidden">
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
            <span className="text-sm text-gray-300">Free Resources</span>
          </div>
          
          <h2 className="text-display font-playfair text-white mb-6">
            Marketing{" "}
            <span className="text-gradient-primary">Resources</span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Access our library of free marketing resources, guides, templates, and tools to accelerate your marketing success.
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

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-hover gradient-card rounded-2xl p-6 h-full backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-primary transition-all duration-300 leading-tight">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <span>{resource.size}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    className="btn-modern bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all duration-300"
                    onClick={() => {
                      // Demo functionality - in real app this would download the resource
                      alert(`Downloading ${resource.title}...`)
                    }}
                  >
                    Download
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
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
              Need More Resources?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our community to get exclusive access to premium resources, templates, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-body px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/pages/resources/community'}
              >
                Join Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-body px-8 py-4 bg-transparent rounded-xl transition-all duration-300"
                onClick={() => {
                  // Demo functionality - in real app this would show all resources
                  alert('This would show all available resources in a real application.')
                }}
              >
                Browse All Resources
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 