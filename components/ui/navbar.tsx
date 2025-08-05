"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Sparkles, FileText, Users, Shield, BookOpen, Zap, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Search data - all your pages and content
  const searchData = [
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      href: "/pages/product/api-documentation",
      category: "Product",
      icon: FileText,
      tags: ["api", "documentation", "integration", "developers"]
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools and platforms",
      href: "/pages/product/integrations",
      category: "Product",
      icon: Zap,
      tags: ["integrations", "tools", "platforms", "automation"]
    },
    {
      title: "Changelog",
      description: "Latest updates and feature releases",
      href: "/pages/product/changelog",
      category: "Product",
      icon: FileText,
      tags: ["updates", "features", "releases", "changelog"]
    },
    {
      title: "About Us",
      description: "Learn about our mission and team",
      href: "/pages/company/about-us",
      category: "Company",
      icon: Users,
      tags: ["about", "team", "mission", "company"]
    },
    {
      title: "Careers",
      description: "Join our team and grow with us",
      href: "/pages/company/careers",
      category: "Company",
      icon: Users,
      tags: ["careers", "jobs", "hiring", "team"]
    },
    {
      title: "Press Kit",
      description: "Media resources and company information",
      href: "/pages/company/press-kit",
      category: "Company",
      icon: FileText,
      tags: ["press", "media", "resources", "brand"]
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      href: "/pages/company/contact",
      category: "Company",
      icon: Users,
      tags: ["contact", "support", "help", "team"]
    },
    {
      title: "Partners",
      description: "Strategic partnerships and integrations",
      href: "/pages/company/partners",
      category: "Company",
      icon: Globe,
      tags: ["partners", "partnerships", "integrations"]
    },
    {
      title: "Community",
      description: "Join our global community of marketers",
      href: "/pages/resources/community",
      category: "Resources",
      icon: Users,
      tags: ["community", "forum", "discussion", "network"]
    },
    {
      title: "Webinars",
      description: "Live events and educational content",
      href: "/pages/resources/webinars",
      category: "Resources",
      icon: BookOpen,
      tags: ["webinars", "events", "education", "learning"]
    },
    {
      title: "Case Studies",
      description: "Success stories and customer results",
      href: "/pages/resources/case-studies",
      category: "Resources",
      icon: BookOpen,
      tags: ["case studies", "success", "results", "customers"]
    },
    {
      title: "Privacy Policy",
      description: "How we protect your data and privacy",
      href: "/pages/legal/privacy-policy",
      category: "Legal",
      icon: Shield,
      tags: ["privacy", "data", "protection", "legal"]
    },
    {
      title: "Terms of Service",
      description: "Our terms and conditions of use",
      href: "/pages/legal/terms-of-service",
      category: "Legal",
      icon: FileText,
      tags: ["terms", "legal", "conditions", "agreement"]
    },
    {
      title: "Cookie Policy",
      description: "How we use cookies and tracking",
      href: "/pages/legal/cookie-policy",
      category: "Legal",
      icon: Shield,
      tags: ["cookies", "tracking", "privacy", "legal"]
    },
    {
      title: "GDPR",
      description: "Our GDPR compliance and data protection",
      href: "/pages/legal/gdpr",
      category: "Legal",
      icon: Shield,
      tags: ["gdpr", "compliance", "data protection", "privacy"]
    },
    {
      title: "Security",
      description: "Platform security and data protection",
      href: "/pages/legal/security",
      category: "Legal",
      icon: Shield,
      tags: ["security", "protection", "safety", "data"]
    }
  ]

  const navItems = [
    { name: "Features", href: "#features", hasDropdown: false },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
    { name: "Feedback", href: "#testimonials", hasDropdown: false },
    { name: "Blog", href: "#blog", hasDropdown: false },
    { name: "FAQ", href: "#faq", hasDropdown: false },
  ]

  // Search functionality
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    const results = searchData.filter(item => {
      const searchTerm = query.toLowerCase()
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    })

    setSearchResults(results)
    setShowSearchResults(true)
  }

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    performSearch(query)
  }

  // Handle search result click
  const handleSearchResultClick = (href: string) => {
    setSearchQuery("")
    setShowSearchResults(false)
    try {
      window.location.href = href
    } catch (error) {
      console.error('Navigation error:', error)
      // Fallback to window.open
      window.open(href, '_self')
    }
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSearchResults(false)
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Close mobile menu if open
    setIsOpen(false)
    
    // Handle navigation
    if (href.startsWith('#')) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollToSection', targetId)
        try {
          window.location.href = '/'
        } catch (error) {
          console.error('Navigation error:', error)
          window.open('/', '_self')
        }
        return
      }
      
      if (targetElement) {
        // Use scrollIntoView with better options for smooth scrolling
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
        
        // Ensure scrolling is enabled after navigation
        setTimeout(() => {
          document.body.style.overflow = 'auto'
          document.documentElement.style.overflow = 'auto'
        }, 100)
      }
    } else {
      // Handle external links
      try {
        window.location.href = href
      } catch (error) {
        console.error('Navigation error:', error)
        window.open(href, '_self')
      }
    }
  }

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } catch (error) {
      console.error('Scroll error:', error)
      window.scrollTo(0, 0)
    }
    
    // Ensure scrolling is enabled
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 backdrop-blur-xl"
    >
      <div className="container-modern">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo with Animation */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.location.href = '/'}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white text-lg lg:text-xl font-bold font-playfair bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ADmyBRAND
            </span>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            ref={searchRef}
            className="hidden md:flex items-center flex-1 max-w-md mx-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search pages, features, help..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showSearchResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
                  >
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Card 
                            className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer mb-1"
                            onClick={() => handleSearchResultClick(result.href)}
                          >
                            <CardContent className="p-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                  <result.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-white font-medium text-sm truncate">
                                      {result.title}
                                    </h4>
                                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                                      {result.category}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                                    {result.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-white hover:text-primary transition-all duration-300 text-sm font-medium cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search pages, features, help..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl"
                  />
                  
                  {/* Mobile Search Results */}
                  <AnimatePresence>
                    {showSearchResults && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
                      >
                        <div className="p-2">
                          {searchResults.slice(0, 5).map((result, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                              <Card 
                                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer mb-1"
                                onClick={() => handleSearchResultClick(result.href)}
                              >
                                <CardContent className="p-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                      <result.icon className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-white font-medium text-xs truncate">
                                          {result.title}
                                        </h4>
                                        <span className="text-xs text-gray-400 bg-white/10 px-1 py-0.5 rounded-full">
                                          {result.category}
                                        </span>
                                      </div>
                                      <p className="text-gray-400 text-xs mt-1 line-clamp-1">
                                        {result.description}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="block text-white hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 font-medium cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
