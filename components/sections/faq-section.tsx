"use client"

import { motion } from "framer-motion"
import { FAQItem } from "@/components/ui/faq-item"
import { Sparkles, HelpCircle, MessageCircle, Shield, Zap, Users, ArrowRight } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "How does ADmyBRAND AI generate content?",
      answer:
        "Our AI uses advanced natural language processing and machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized, engaging content that resonates with your customers.",
      icon: Zap,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      question: "Can I integrate ADmyBRAND AI with my existing tools?",
      answer:
        "Yes! ADmyBRAND AI integrates seamlessly with over 100+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, and many more. Our API also allows for custom integrations with your proprietary systems.",
      icon: MessageCircle,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      question: "Is my data secure with ADmyBRAND AI?",
      answer:
        "Absolutely. We take data security seriously with SOC 2 Type II compliance, end-to-end encryption, and regular security audits. Your data is never shared with third parties and you maintain full ownership and control over all your marketing data.",
      icon: Shield,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most customers see improvements in their marketing metrics within the first 30 days. Our AI learns from your data and continuously optimizes campaigns, with many users reporting 200-300% improvements in conversion rates within 90 days.",
      icon: Zap,
      gradient: "from-orange-400 to-red-400"
    },
    {
      question: "Do you offer training and support?",
      answer:
        "Yes! We provide comprehensive onboarding, training materials, video tutorials, and 24/7 customer support. Professional and Enterprise plans include dedicated account managers and priority support to ensure your success.",
      icon: Users,
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. We also offer a 30-day money-back guarantee if you're not completely satisfied with ADmyBRAND AI Suite.",
      icon: HelpCircle,
      gradient: "from-pink-400 to-rose-400"
    },
    {
      question: "What makes ADmyBRAND AI different from other marketing tools?",
      answer:
        "ADmyBRAND AI combines advanced AI technology with deep marketing expertise. Unlike generic tools, our platform is specifically designed for marketing professionals, offering industry-specific features, predictive analytics, and automated optimization that delivers measurable ROI.",
      icon: Sparkles,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade to a paid plan anytime during or after your trial period.",
      icon: Zap,
      gradient: "from-purple-400 to-pink-400"
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? 
            <span className="text-purple-400 hover:text-purple-300 cursor-pointer"> Contact our support team</span>.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <FAQItem 
                      question={faq.question} 
                      answer={faq.answer} 
                      delay={index * 0.1} 
                    />
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
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of ADmyBRAND AI. 
              Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
