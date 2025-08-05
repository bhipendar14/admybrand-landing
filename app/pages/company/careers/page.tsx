"use client"

import { motion } from "framer-motion"
import { Users, MapPin, Clock, DollarSign, Heart, Zap, Globe, Award, Coffee, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with talented individuals from around the world.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Growth & Learning",
      description: "Continuous learning opportunities, conferences, and career development.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Coffee,
      title: "Great Culture",
      description: "Inclusive, collaborative environment with regular team events.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Work on cutting-edge AI and marketing technology.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our AI marketing platform.",
      requirements: ["React/Next.js", "TypeScript", "5+ years experience", "UI/UX focus"]
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
      description: "Develop and optimize AI models for content generation and campaign optimization.",
      requirements: ["Python", "TensorFlow/PyTorch", "3+ years experience", "NLP expertise"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and roadmap for our AI marketing platform.",
      requirements: ["Product experience", "Analytics skills", "3+ years experience", "Marketing background"]
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "New York",
      type: "Full-time",
      description: "Create compelling content and manage our brand presence across channels.",
      requirements: ["Content creation", "Social media", "2+ years experience", "Creative mindset"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help customers achieve success with our platform and drive retention.",
      requirements: ["Customer service", "Technical aptitude", "3+ years experience", "Problem-solving"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/GCP", "Docker/Kubernetes", "4+ years experience", "Infrastructure focus"]
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
              Join Our <span className="text-gradient-primary">Team</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Help us revolutionize marketing technology. We're looking for passionate individuals who want to 
              build the future of AI-powered marketing and make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Users className="w-4 h-4 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Heart className="w-4 h-4 mr-2" />
                Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work at <span className="text-gradient-primary">ADmyBRAND</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              We believe in taking care of our team. Here's what we offer to help you thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open <span className="text-gradient-primary">Positions</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Ready to join our mission? Explore our current openings and find your perfect role.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-white text-lg mb-2">{position.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-white text-sm font-medium mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <span key={reqIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="btn-modern w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display font-playfair text-white mb-6">
                Our <span className="text-gradient-primary">Culture</span>
              </h2>
              <p className="text-gray-400 mb-6">
                At ADmyBRAND, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
                Our team is diverse, inclusive, and passionate about making a difference.
              </p>
              <p className="text-gray-400 mb-6">
                We value creativity, ownership, and results. Whether you're an engineer, designer, or marketer, 
                you'll have the opportunity to work on cutting-edge technology and shape the future of marketing.
              </p>
              <p className="text-gray-400">
                Join us in building something amazing together.
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
                <Users className="w-24 h-24 text-white/50" />
              </div>
            </motion.div>
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
                  Don't See Your Role?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team. Even if you don't see a specific 
                  position, we'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Send Open Application
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    Contact Recruiting
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