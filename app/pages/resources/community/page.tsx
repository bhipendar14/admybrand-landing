"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Heart, Award, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with marketers, developers, and AI enthusiasts worldwide.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Active Forums",
      description: "Join discussions, ask questions, and share your expertise.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Get help, feedback, and encouragement from peers.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Earn badges, rewards, and recognition for your contributions.",
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
              Join Our <span className="text-gradient-primary">Community</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Connect, collaborate, and grow with marketers and developers from around the world. 
              Share your knowledge, ask questions, and be part of the ADmyBRAND movement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Users className="w-4 h-4 mr-2" />
                Join the Forum
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Globe className="w-4 h-4 mr-2" />
                Community Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center mb-4">
                      {feature.description}
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
                  Ready to Get Involved?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Whether you're a marketer, developer, or AI enthusiast, there's a place for you in our community.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Join Now
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