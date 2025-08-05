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
      gradient: "from-gray-600 to-gray-700",
      stats: "10x faster content creation"
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description:
        "Leverage machine learning to identify and target your ideal customers with precision across all marketing channels.",
      gradient: "from-gray-500 to-gray-600",
      stats: "300% better targeting accuracy"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description:
        "Get real-time insights into campaign performance with comprehensive analytics and predictive modeling.",
      gradient: "from-gray-600 to-gray-700",
      stats: "Real-time performance tracking"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description:
        "Automate your entire marketing funnel from lead generation to conversion with intelligent workflows.",
      gradient: "from-gray-500 to-gray-600",
      stats: "24/7 automated campaigns"
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description:
        "Visualize and optimize every touchpoint in your customer journey for maximum engagement and conversion.",
      gradient: "from-gray-600 to-gray-700",
      stats: "Complete journey visibility"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Campaigns",
      description:
        "Orchestrate seamless campaigns across email, social media, web, and mobile platforms from one dashboard.",
      gradient: "from-gray-500 to-gray-600",
      stats: "Unified campaign management"
    },
    {
      icon: Palette,
      title: "Brand Consistency Engine",
      description:
        "Maintain perfect brand consistency across all marketing materials with AI-powered brand guidelines enforcement.",
      gradient: "from-gray-600 to-gray-700",
      stats: "100% brand compliance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and comprehensive privacy controls.",
      gradient: "from-gray-500 to-gray-600",
      stats: "SOC 2 compliant security"
    },
  ]

  return (
    <section id="features" className="section-padding px-4 relative overflow-hidden">
      <div className="container-modern relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display font-playfair text-white mb-6">
            Everything for{" "}
            <span className="text-gradient-primary">
              Modern Marketing
            </span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
              <div className="card-hover gradient-card rounded-2xl p-6 h-full backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient-primary transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-medium">
                    {feature.stats}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-2 transition-transform duration-300" />
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
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of marketers who are already using ADmyBRAND AI to create, automate, and optimize their campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-body px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/register'}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-body px-8 py-4 bg-transparent rounded-xl transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
