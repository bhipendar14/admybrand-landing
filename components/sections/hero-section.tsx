"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap, Activity, Target, BarChart3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Typewriter } from "@/components/ui/typewriter"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const [conversionRate, setConversionRate] = useState(12.4)
  const [growthRate, setGrowthRate] = useState(24)

  const metrics = [
    { name: "Conversion Rate", value: 12.4, unit: "%", color: "from-green-400 to-emerald-500" },
    { name: "Click Rate", value: 8.7, unit: "%", color: "from-blue-400 to-cyan-500" },
    { name: "Engagement", value: 34.2, unit: "%", color: "from-purple-400 to-pink-500" },
    { name: "ROI", value: 312, unit: "%", color: "from-orange-400 to-red-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [metrics.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setConversionRate(prev => prev + (Math.random() - 0.5) * 0.2)
      setGrowthRate(prev => prev + (Math.random() - 0.5) * 2)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="relative container-modern grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair text-white mb-4 sm:mb-6 leading-tight">
              AI Marketing for{" "}
              <span className="text-gradient-primary">Developers</span>
            </h1>

            <div className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl min-h-[4rem] sm:min-h-[6rem] flex items-center">
              <Typewriter 
                text="The best way to create, automate, and optimize marketing campaigns. Deliver personalized content and drive real results at scale."
                speed={30}
                delay={1000}
                className="text-base sm:text-lg lg:text-xl text-gray-400"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Button
              size="lg"
              className="!bg-white !text-black hover:!bg-gray-100 font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/register'}
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-transparent rounded-xl font-medium transition-all duration-300"
              onClick={() => window.open('https://youtu.be/-0ULe8h2LrM?si=GlyUXsNFnfsZTzP5', '_blank')}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="gradient-card rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <div className="space-y-4 sm:space-y-6">
              {/* Live Dashboard Preview */}
              <div className="glass-dark rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-semibold text-sm sm:text-lg">Live Campaign</h3>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-green-400">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">+{growthRate.toFixed(1)}%</span>
                  </div>
                </div>

                {/* Dynamic Metric Display */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs sm:text-sm">{metrics[currentMetric].name}</span>
                    <span className={`text-white font-bold text-lg sm:text-xl bg-gradient-to-r ${metrics[currentMetric].color} bg-clip-text text-transparent`}>
                      {metrics[currentMetric].value.toFixed(1)}{metrics[currentMetric].unit}
                    </span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 sm:h-3 overflow-hidden">
                    <motion.div 
                      className={`bg-gradient-to-r ${metrics[currentMetric].color} h-2 sm:h-3 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(metrics[currentMetric].value / 15) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>

                  {/* Real-time Conversion Rate */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Conversion Rate</span>
                      <span className="text-white font-bold text-sm sm:text-base">{conversionRate.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2 mt-1 sm:mt-2">
                      <motion.div 
                        className="bg-gradient-to-r from-white to-gray-300 h-1.5 sm:h-2 rounded-full"
                        animate={{ width: `${(conversionRate / 20) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Tools Integration */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Experience AI-Powered Marketing</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Discover our suite of intelligent marketing tools</p>
                </div>
                
                <div className="text-center pt-1 sm:pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 bg-transparent rounded-xl transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                    onClick={() => {
                      // Scroll to AI tools section
                      const element = document.getElementById('ai-tools-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Explore AI Tools
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
