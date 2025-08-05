"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, BarChart3, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Brand Boosts ROI by 300%",
      company: "ShopEase",
      description: "How ShopEase used ADmyBRAND's AI tools to triple their marketing ROI in 6 months.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS Startup Scales Globally",
      company: "CloudSync",
      description: "CloudSync expanded to 20+ countries using automated campaigns and analytics.",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Agency Delivers Results for 50+ Clients",
      company: "MarketGenius",
      description: "MarketGenius streamlined client reporting and campaign management with our platform.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-display font-playfair text-white mb-6">
              Customer <span className="text-gradient-primary">Case Studies</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              See how businesses of all sizes are achieving real results with ADmyBRAND. Explore our featured case studies below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <BookOpen className="w-4 h-4 mr-2" />
                Download Full Report
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Users className="w-4 h-4 mr-2" />
                Share Your Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center mx-auto mb-4`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center mb-2">
                      {study.description}
                    </CardDescription>
                    <div className="text-gray-300 text-sm mb-2">{study.company}</div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass-dark border-white/10 max-w-4xl mx-auto">
              <CardContent className="py-12">
                <h3 className="text-2xl font-playfair text-white mb-4">
                  Want to Be Featured?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Share your success story with us and inspire others in the ADmyBRAND community.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Submit Your Story
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    Contact Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}