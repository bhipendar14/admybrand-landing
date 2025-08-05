"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ResourcesSection } from "@/components/sections/resources-section"
import { HelpSection } from "@/components/sections/help-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { BlogSection } from "@/components/sections/blog-section"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/ui/navbar"
import { AIToolsPanel } from "@/components/ui/ai-tools-panel"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function HomePage() {
  // Handle scroll to section when coming from other pages
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    if (scrollToSection) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection')
      
      // Wait for the page to fully load, then scroll
      setTimeout(() => {
        const targetElement = document.getElementById(scrollToSection)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      }, 500)
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="page-container bg-black relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 gradient-bg" />
        
        {/* Subtle diagonal light streak effect */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.03] via-transparent to-transparent transform -skew-y-6 translate-y-1/2" />
        </div>

        {/* Modern 3D elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Large 3D cube-like object */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5"
          >
            <div className="relative w-full h-full transform rotate-45">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl transform translate-x-2 translate-y-2" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl transform translate-x-4 translate-y-4" />
            </div>
          </motion.div>

          {/* Smaller geometric elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-1/4 w-32 h-32 opacity-3"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform rotate-12" />
          </motion.div>

          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-3"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl transform -rotate-12" />
          </motion.div>

          {/* Floating particles */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full opacity-30"
          />

          <motion.div
            animate={{
              y: [10, -10, 10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/3 right-1/2 w-1 h-1 bg-white rounded-full opacity-20"
          />
        </div>

        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          
          {/* AI Tools Section */}
          <section id="ai-tools-section" className="section-padding px-4">
            <div className="container-modern">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display font-playfair text-white mb-6">
                  AI-Powered <span className="text-gradient-primary">Marketing Tools</span>
                </h2>
                <p className="text-body text-gray-400 max-w-3xl mx-auto">
                  Experience our powerful AI tools that actually work. Generate content, analyze campaigns, and get instant support.
                </p>
              </motion.div>
              
              <AIToolsPanel />
            </div>
          </section>
          
          <FeaturesSection />
          <ResourcesSection />
          <HelpSection />
          <PricingSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
