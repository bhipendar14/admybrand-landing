"use client"

import { motion } from "framer-motion"
import { Users, Handshake, Globe, Award, Zap, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  const partners = [
    {
      name: "TechCorp",
      description: "Leading provider of cloud infrastructure and AI services.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "MarketGenius",
      description: "Innovative marketing automation platform for enterprises.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "AdConnect",
      description: "Global ad network with advanced targeting capabilities.",
      icon: Link,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "BrandBoost",
      description: "Brand management and analytics solutions.",
      icon: Award,
      color: "from-purple-500 to-indigo-500"
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
              Our <span className="text-gradient-primary">Partners</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              We collaborate with industry leaders to deliver the best marketing technology solutions. 
              Explore our strategic partnerships and integration partners.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Handshake className="w-4 h-4 mr-2" />
                Become a Partner
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Users className="w-4 h-4 mr-2" />
                View All Partners
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners List */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${partner.color} flex items-center justify-center mx-auto mb-4`}>
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center mb-4">
                      {partner.description}
                    </CardDescription>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Learn More →
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
                  Interested in Partnering?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We're always looking for new partners to expand our ecosystem. 
                  Contact us to discuss partnership opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Contact Partnership Team
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    Learn More
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