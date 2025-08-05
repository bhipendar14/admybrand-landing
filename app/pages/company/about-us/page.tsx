"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, Globe, Award, Heart, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  const stats = [
    { number: "10K+", label: "Active Users", icon: Users },
    { number: "500+", label: "Campaigns Created", icon: Target },
    { number: "99.9%", label: "Uptime", icon: Zap },
    { number: "50+", label: "Countries Served", icon: Globe }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and marketing technology.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your marketing goals.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and privacy protection for your data and campaigns.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a global community of marketers who share knowledge and best practices.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Marketing at TechCorp, 15+ years in digital marketing and AI.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Google engineer, AI/ML expert with 20+ years in software development.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product leader with experience at Facebook and Twitter, passionate about user experience.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Scaled engineering teams at Amazon and Netflix, expert in cloud architecture.",
      image: "/placeholder-user.jpg"
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
              About <span className="text-gradient-primary">ADmyBRAND</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              We're on a mission to democratize AI-powered marketing. Founded in 2023, ADmyBRAND has grown from 
              a simple idea to a platform trusted by thousands of marketers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Globe className="w-4 h-4 mr-2" />
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="glass-dark border-white/10">
                  <CardContent className="py-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Our <span className="text-gradient-primary">Mission</span>
            </h2>
            <p className="text-body text-gray-400 max-w-4xl mx-auto">
              To empower marketers with AI-driven tools that make campaign creation, optimization, and analysis 
              effortless, enabling businesses of all sizes to compete in the digital landscape.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair text-white mb-6">Why We Started</h3>
              <p className="text-gray-400 mb-6">
                In 2023, we noticed a growing gap between the promise of AI marketing and its practical implementation. 
                While large enterprises had access to sophisticated AI tools, small and medium businesses were left behind.
              </p>
              <p className="text-gray-400 mb-6">
                We built ADmyBRAND to bridge this gap, creating an intuitive platform that makes AI-powered marketing 
                accessible to everyone, regardless of technical expertise or budget.
              </p>
              <p className="text-gray-400">
                Today, we're proud to serve thousands of businesses worldwide, helping them create compelling campaigns, 
                optimize performance, and drive real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Award className="w-24 h-24 text-white/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Our <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Meet Our <span className="text-gradient-primary">Team</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind ADmyBRAND, dedicated to revolutionizing marketing technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 text-center">
                  <CardContent className="py-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
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
                  Join Our Mission
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who share our vision of democratizing AI marketing. 
                  Explore opportunities to join our growing team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    View Open Positions
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    Contact Us
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