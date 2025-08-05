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
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "Can I integrate ADmyBRAND AI with my existing tools?",
      answer:
        "Yes! ADmyBRAND AI integrates seamlessly with over 100+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, and many more. Our API also allows for custom integrations with your proprietary systems.",
      icon: MessageCircle,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "Is my data secure with ADmyBRAND AI?",
      answer:
        "Absolutely. We take data security seriously with SOC 2 Type II compliance, end-to-end encryption, and regular security audits. Your data is never shared with third parties and you maintain full ownership and control over all your marketing data.",
      icon: Shield,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most customers see improvements in their marketing metrics within the first 30 days. Our AI learns from your data and continuously optimizes campaigns, with many users reporting 200-300% improvements in conversion rates within 90 days.",
      icon: Zap,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "Do you offer training and support?",
      answer:
        "Yes! We provide comprehensive onboarding, training materials, video tutorials, and 24/7 customer support. Professional and Enterprise plans include dedicated account managers and priority support to ensure your success.",
      icon: Users,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. We also offer a 30-day money-back guarantee if you're not completely satisfied with ADmyBRAND AI Suite.",
      icon: HelpCircle,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "What makes ADmyBRAND AI different from other marketing tools?",
      answer:
        "ADmyBRAND AI combines advanced AI technology with deep marketing expertise. Unlike generic tools, our platform is specifically designed for marketing professionals, offering industry-specific features, predictive analytics, and automated optimization that delivers measurable ROI.",
      icon: Sparkles,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade to a paid plan anytime during or after your trial period.",
      icon: Zap,
      gradient: "from-gray-500 to-gray-600"
    },
  ]

  return (
    <section id="faq" className="section-padding px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container-modern max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-gray-300">FAQ</span>
          </div>
          
          <h2 className="text-display font-playfair text-white mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-primary">
              Questions
            </span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? 
            <span className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-300"> Contact our support team</span>.
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-playfair text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of ADmyBRAND AI. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/pages/company/contact'}
                className="btn-modern !bg-white hover:!bg-gray-100 !text-black text-body px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-modern border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-body px-8 py-4 bg-transparent rounded-xl transition-all duration-300 flex items-center justify-center">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
