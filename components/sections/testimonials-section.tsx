"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Star, Sparkles, Quote, ArrowRight, Users, TrendingUp } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content:
        "ADmyBRAND AI has transformed our marketing strategy completely. We've seen a 300% increase in conversion rates and our team is more productive than ever.",
      rating: 5,
      avatar: "https://english.cdn.zeenews.com/sites/default/files/2025/01/30/1650758-aaron-taylor.jpg",
      stats: "300% increase in conversions",
      gradient: "from-purple-800 to-pink-400"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "StartupLab",
      content:
        "The AI-powered content generation is incredible. What used to take our team days now takes minutes, and the quality is consistently outstanding.",
      rating: 5,
      avatar: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg",
      stats: "10x faster content creation",
      gradient: "from-blue-800 to-cyan-600"
    },
    {
      name: "Emily Johnson",
      role: "Growth Manager",
      company: "ScaleUp Co",
      content:
        "The analytics dashboard gives us insights we never had before. We can now predict customer behavior and optimize campaigns in real-time.",
      rating: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuUNDj31tc1m6TPAUrayNvpxzsRRw7vf76hhuKmAhkaoWQgl6Ep5Hf64r8TJ0d9uBxY8&usqp=CAU",
      stats: "Real-time insights",
      gradient: "from-green-800 to-emerald-500"
    },
    {
      name: "David Kim",
      role: "Digital Marketing Lead",
      company: "InnovateCorp",
      content:
        "Customer support is exceptional and the platform is incredibly intuitive. Our ROI has increased by 250% since switching to ADmyBRAND AI.",
      rating: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfLhp7N9AXCgMhshjPp9t2X9IKUm3Frk9oA&s",
      stats: "250% ROI increase",
      gradient: "from-orange-900 to-red-400"
    },
    {
      name: "Lisa Thompson",
      role: "Brand Manager",
      company: "CreativeAgency",
      content:
        "The brand consistency engine ensures all our campaigns maintain perfect brand alignment. It's like having a brand guardian that never sleeps.",
      rating: 5,
      avatar: "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      stats: "100% brand consistency",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      name: "Alex Morgan",
      role: "VP of Marketing",
      company: "GlobalTech",
      content:
        "Multi-channel campaign management has never been easier. We can orchestrate complex campaigns across all platforms from one dashboard.",
      rating: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8b_qtC8xoY9NibglDhLKnLZ4Svf9-VVtPA&s",
      stats: "Unified campaign management",
      gradient: "from-pink-800 to-rose-500"
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
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
            <span className="text-sm text-purple-300">Customer Success</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketing professionals who have transformed their campaigns with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Users, label: "50,000+", subtitle: "Active Users" },
            { icon: TrendingUp, label: "300%", subtitle: "Average ROI Increase" },
            { icon: Star, label: "4.9/5", subtitle: "Customer Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-purple-400 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${testimonial.gradient} bg-opacity-20 rounded-full px-3 py-1 mb-6`}>
                  <TrendingUp className="w-3 h-3 text-purple-400" />
                  <span className="text-xs text-purple-300 font-medium">{testimonial.stats}</span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover:border-purple-400 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your journey with ADmyBRAND AI and transform your marketing results like thousands of other successful teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
