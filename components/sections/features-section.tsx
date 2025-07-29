"use client"

import { motion } from "framer-motion"
import { Brain, Target, BarChart3, Zap, Users, MessageSquare, Palette, Shield, Sparkles, ArrowRight } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Generation",
      description:
        "Create compelling ad copy, social media posts, and marketing materials with advanced AI that understands your brand voice.",
      gradient: "from-purple-400 to-pink-400",
      stats: "10x faster content creation"
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description:
        "Leverage machine learning to identify and target your ideal customers with precision across all marketing channels.",
      gradient: "from-blue-400 to-cyan-400",
      stats: "300% better targeting accuracy"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description:
        "Get real-time insights into campaign performance with comprehensive analytics and predictive modeling.",
      gradient: "from-green-400 to-emerald-400",
      stats: "Real-time performance tracking"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description:
        "Automate your entire marketing funnel from lead generation to conversion with intelligent workflows.",
      gradient: "from-orange-400 to-red-400",
      stats: "24/7 automated campaigns"
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description:
        "Visualize and optimize every touchpoint in your customer journey for maximum engagement and conversion.",
      gradient: "from-indigo-400 to-purple-400",
      stats: "Complete journey visibility"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Campaigns",
      description:
        "Orchestrate seamless campaigns across email, social media, web, and mobile platforms from one dashboard.",
      gradient: "from-pink-400 to-rose-400",
      stats: "Unified campaign management"
    },
    {
      icon: Palette,
      title: "Brand Consistency Engine",
      description:
        "Maintain perfect brand consistency across all marketing materials with AI-powered brand guidelines enforcement.",
      gradient: "from-yellow-400 to-orange-400",
      stats: "100% brand compliance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and comprehensive privacy controls.",
      gradient: "from-gray-400 to-slate-400",
      stats: "SOC 2 compliant security"
    },
  ]

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
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
            <span className="text-sm text-purple-300">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Everything for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the complete suite of AI-powered tools designed to revolutionize your marketing strategy and drive exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300 font-medium">
                    {feature.stats}
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
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
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of marketers who are already using ADmyBRAND AI to create, automate, and optimize their campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/register'}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent hover:border-purple-400 transition-all duration-300"
              >
                View All Features
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
