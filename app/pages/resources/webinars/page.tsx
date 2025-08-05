"use client"

import { motion } from "framer-motion"
import { Video, Calendar, Users, PlayCircle, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WebinarsPage() {
  const webinars = [
    {
      title: "AI Marketing Trends 2025",
      date: "January 20, 2025",
      time: "10:00 AM PST",
      description: "Discover the latest trends in AI-powered marketing and how to stay ahead.",
      icon: Video,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Building Campaigns with ADmyBRAND",
      date: "February 5, 2025",
      time: "1:00 PM PST",
      description: "Step-by-step guide to creating high-performing campaigns using our platform.",
      icon: PlayCircle,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data-Driven Marketing Analytics",
      date: "March 10, 2025",
      time: "11:00 AM PST",
      description: "Learn how to leverage analytics for better marketing decisions.",
      icon: Calendar,
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
              Upcoming <span className="text-gradient-primary">Webinars</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Join our live webinars to learn from industry experts, discover new features, and get the most out of ADmyBRAND.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Calendar className="w-4 h-4 mr-2" />
                Register Now
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Users className="w-4 h-4 mr-2" />
                View All Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Webinars List */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${webinar.color} flex items-center justify-center mx-auto mb-4`}>
                      <webinar.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{webinar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center mb-2">
                      {webinar.description}
                    </CardDescription>
                    <div className="text-gray-300 text-sm mb-2">{webinar.date} • {webinar.time}</div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Register →
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
                  Want to Host a Webinar?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We're always looking for industry experts and community leaders to share their knowledge. Contact us to propose a webinar topic.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Propose a Webinar
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