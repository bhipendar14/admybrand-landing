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
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_XAKqFiXUPYKF2qXPFZcDmzQ7SoDJj_OiQ&s",
      stats: "300% increase in conversions",
      gradient: "from-white to-gray-300"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "StartupLab",
      content:
        "The AI-powered content generation is incredible. What used to take our team days now takes minutes, and the quality is consistently outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      stats: "10x faster content creation",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Emily Johnson",
      role: "Growth Manager",
      company: "ScaleUp Co",
      content:
        "The analytics dashboard gives us insights we never had before. We can now predict customer behavior and optimize campaigns in real-time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      stats: "Real-time insights",
      gradient: "from-gray-300 to-gray-500"
    },
    {
      name: "David Kim",
      role: "Digital Marketing Lead",
      company: "InnovateCorp",
      content:
        "Customer support is exceptional and the platform is incredibly intuitive. Our ROI has increased by 250% since switching to ADmyBRAND AI.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      stats: "250% ROI increase",
      gradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Lisa Thompson",
      role: "Brand Manager",
      company: "CreativeAgency",
      content:
        "The brand consistency engine ensures all our campaigns maintain perfect brand alignment. It's like having a brand guardian that never sleeps.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      stats: "100% brand consistency",
      gradient: "from-white to-gray-400"
    },
    {
      name: "Alex Morgan",
      role: "VP of Marketing",
      company: "GlobalTech",
      content:
        "Multi-channel campaign management has never been easier. We can orchestrate complex campaigns across all platforms from one dashboard.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      stats: "Unified campaign management",
      gradient: "from-gray-300 to-gray-600"
    },
  ]

  return (
    <section id="testimonials" className="section-padding px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container-modern relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-gray-300">Customer Success</span>
          </div>
          
          <h2 className="text-display font-playfair text-white mb-6">
            Loved by{" "}
            <span className="text-gradient-primary">Thousands</span>
          </h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketing professionals who trust ADmyBRAND AI to power their campaigns and drive exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
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
              <div className="card-hover gradient-card rounded-2xl p-4 sm:p-6 h-full backdrop-blur-sm hover:border-white/30 transition-all duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-r from-gray-600 to-gray-700 flex-shrink-0 mobile-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Hide the image and show a fallback with initials
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback');
                        if (fallback) {
                          fallback.classList.remove('hidden');
                        }
                      }}
                    />
                    <div className="hidden avatar-fallback w-full h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs sm:text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium">
                    {testimonial.stats}
                  </span>
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-playfair text-white mb-4 sm:mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  <span className="text-gradient-primary">50K+</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  <span className="text-gradient-primary">99%</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  <span className="text-gradient-primary">300%</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Avg. ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  <span className="text-gradient-primary">24/7</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
