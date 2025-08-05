"use client"

import { motion } from "framer-motion"
import { PricingCard } from "@/components/ui/pricing-card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Star, ArrowRight, Zap, Shield, Crown } from "lucide-react"
import { useState } from "react"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290,
      period: billingPeriod,
      description: "Perfect for small businesses and startups",
      icon: Zap,
      gradient: "from-gray-500 to-gray-600",
      features: [
        "Up to 5,000 contacts",
        "Basic AI content generation",
        "3 marketing channels",
        "Standard analytics",
        "Email support",
        "5 team members",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 990,
      period: billingPeriod,
      description: "Ideal for growing businesses",
      icon: Star,
      gradient: "from-gray-600 to-gray-700",
      features: [
        "Up to 50,000 contacts",
        "Advanced AI features",
        "All marketing channels",
        "Advanced analytics & reporting",
        "Priority support",
        "25 team members",
        "Custom integrations",
        "A/B testing suite",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      period: billingPeriod,
      description: "For large organizations",
      icon: Crown,
      gradient: "from-gray-500 to-gray-600",
      features: [
        "Unlimited contacts",
        "Custom AI model training",
        "White-label solution",
        "Advanced security features",
        "Dedicated account manager",
        "Unlimited team members",
        "Custom development",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const getCurrentPrice = (plan: any) => {
    return billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
  }

  const getSavings = (plan: any) => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = plan.monthlyPrice * 12
      const yearlyTotal = plan.yearlyPrice
      return monthlyTotal - yearlyTotal
    }
    return 0
  }

  return (
    <section id="pricing" className="section-padding px-4 relative overflow-hidden">
      <div className="container-modern relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display font-playfair text-white mb-6">
            Choose Your{" "}
            <span className="text-gradient-primary">
              Perfect Plan
            </span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features with no setup fees or hidden costs.
          </p>
        </motion.div>

        {/* Interactive Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-4 glass-dark rounded-full p-1 mb-6">
            <button 
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
          
          {billingPeriod === 'yearly' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300 font-medium">Save up to 17% with yearly billing</span>
            </motion.div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`relative h-full card-hover ${plan.popular ? 'gradient-card border-2 border-white/20' : 'gradient-card border border-white/10'} rounded-2xl p-8 backdrop-blur-sm hover:border-white/30 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${getCurrentPrice(plan)}</span>
                      <span className="text-gray-400">/{billingPeriod === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                    {billingPeriod === 'yearly' && getSavings(plan) > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-2"
                      >
                        <span className="text-sm text-green-400 font-medium">
                          Save ${getSavings(plan)}/year
                        </span>
                      </motion.div>
                    )}
                    {billingPeriod === 'yearly' && (
                      <div className="mt-2">
                        <span className="text-sm text-gray-400">
                          ${Math.round(getCurrentPrice(plan) / 12)}/month
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  size="lg"
                  className={`w-full btn-modern ${plan.popular ? 'bg-white hover:bg-gray-100 text-black' : 'bg-white/10 hover:bg-white/20 border border-white/20'} text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105 font-semibold`}
                  onClick={() => {
                    if (plan.cta === "Contact Sales") {
                      window.location.href = '/pages/company/contact'
                    } else {
                      window.location.href = '/register'
                    }
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-gray-400" />
              <h3 className="text-xl font-playfair text-white">Enterprise Security</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              All plans include bank-level security, SOC 2 compliance, and comprehensive data protection. 
              Your data is safe with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-lg px-8 py-4 bg-transparent rounded-xl transition-all duration-300"
                onClick={() => window.location.href = '/pages/legal/security'}
              >
                View Security Details
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-white/20 text-white hover:bg-white/5 text-lg px-8 py-4 bg-transparent rounded-xl transition-all duration-300"
                onClick={() => window.location.href = '/pages/company/contact'}
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
