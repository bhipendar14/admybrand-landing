"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap, Activity, Target, BarChart3 } from "lucide-react"
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
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI-Powered Marketing Revolution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Brand</span>{" "}
              with AI
            </h1>

            <div className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl min-h-[6rem] flex items-center">
              <Typewriter 
                text="ADmyBRAND AI Suite revolutionizes your marketing strategy with intelligent automation, personalized campaigns, and data-driven insights that drive real results."
                speed={30}
                delay={1000}
                className="text-xl text-gray-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
              onClick={() => window.location.href = '/register'}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              onClick={() => window.open('https://youtu.be/-0ULe8h2LrM?si=GlyUXsNFnfsZTzP5', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <p className="text-gray-400 text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-gray-400 text-sm">ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-gray-400 text-sm">Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <GlassCard className="p-8">
            <div className="space-y-6">
              {/* Live Dashboard Preview */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-semibold text-lg">Live Campaign</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+{growthRate.toFixed(1)}%</span>
                  </div>
                </div>

                {/* Dynamic Metric Display */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{metrics[currentMetric].name}</span>
                    <span className={`text-white font-bold text-xl bg-gradient-to-r ${metrics[currentMetric].color} bg-clip-text text-transparent`}>
                      {metrics[currentMetric].value.toFixed(1)}{metrics[currentMetric].unit}
                    </span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className={`bg-gradient-to-r ${metrics[currentMetric].color} h-3 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(metrics[currentMetric].value / 15) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>

                  {/* Real-time Conversion Rate */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Conversion Rate</span>
                      <span className="text-white font-bold">{conversionRate.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 mt-2">
                      <motion.div 
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                        animate={{ width: `${(conversionRate / 20) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Icons with Hover Effects */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: "AI Automation", color: "from-purple-400 to-pink-400" },
                  { icon: Target, label: "Smart Targeting", color: "from-blue-400 to-cyan-400" },
                  { icon: BarChart3, label: "Real Analytics", color: "from-green-400 to-emerald-400" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
