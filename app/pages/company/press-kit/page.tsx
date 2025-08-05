"use client"

import { motion } from "framer-motion"
import { Download, Image, FileText, Users, Award, Globe, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PressKitPage() {
  const pressAssets = [
    {
      title: "Company Logo",
      description: "High-resolution ADmyBRAND logos in various formats",
      formats: ["PNG", "SVG", "AI"],
      icon: Image,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines and style guide",
      formats: ["PDF", "DOCX"],
      icon: FileText,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our platform",
      formats: ["PNG", "JPG"],
      icon: Image,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Team Photos",
      description: "Professional headshots of our leadership team",
      formats: ["JPG", "PNG"],
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Fact Sheet",
      description: "Company facts, statistics, and key information",
      formats: ["PDF", "DOCX"],
      icon: FileText,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Media Kit",
      description: "Complete press kit with all assets and information",
      formats: ["ZIP", "PDF"],
      icon: Download,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const pressReleases = [
    {
      title: "ADmyBRAND Raises $10M Series A Funding",
      date: "December 15, 2024",
      summary: "Funding will accelerate product development and global expansion",
      category: "Funding"
    },
    {
      title: "ADmyBRAND Launches AI Content Studio",
      date: "December 10, 2024",
      summary: "Revolutionary AI-powered content creation platform now available",
      category: "Product Launch"
    },
    {
      title: "ADmyBRAND Partners with Major Marketing Agencies",
      date: "November 28, 2024",
      summary: "Strategic partnerships to expand market reach and capabilities",
      category: "Partnership"
    },
    {
      title: "ADmyBRAND Achieves SOC 2 Compliance",
      date: "November 15, 2024",
      summary: "Enterprise-grade security certification for customer trust",
      category: "Security"
    }
  ]

  const companyInfo = {
    founded: "2023",
    headquarters: "San Francisco, CA",
    employees: "50+",
    customers: "10,000+",
    funding: "$10M Series A",
    mission: "Democratizing AI-powered marketing for businesses of all sizes"
  }

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
              Press <span className="text-gradient-primary">Kit</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Everything you need to write about ADmyBRAND. Download our press assets, 
              read our latest news, and get in touch with our media team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Download className="w-4 h-4 mr-2" />
                Download Full Kit
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Mail className="w-4 h-4 mr-2" />
                Contact Media Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
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
              Company <span className="text-gradient-primary">Information</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Key facts and figures about ADmyBRAND
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(companyInfo).map(([key, value], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10">
                  <CardContent className="py-6 text-center">
                    <div className="text-2xl font-bold text-white mb-2">{value}</div>
                    <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Assets */}
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
              Press <span className="text-gradient-primary">Assets</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Download high-resolution logos, screenshots, and brand materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${asset.color} flex items-center justify-center mb-4`}>
                      <asset.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{asset.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 mb-4">
                      {asset.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {asset.formats.map((format, formatIndex) => (
                        <span key={formatIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                          {format}
                        </span>
                      ))}
                    </div>
                    <Button className="btn-modern w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
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
              Latest <span className="text-gradient-primary">News</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Recent press releases and company announcements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        {release.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {release.date}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{release.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 mb-4">
                      {release.summary}
                    </CardDescription>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Read Full Release →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  Need More Information?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Our media team is here to help. Contact us for interviews, 
                  additional assets, or any press-related inquiries.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="text-white font-semibold mb-1">Media Inquiries</h4>
                    <p className="text-gray-400 text-sm">press@admybrand.ai</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="text-white font-semibold mb-1">PR Contact</h4>
                    <p className="text-gray-400 text-sm">pr@admybrand.ai</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Media Team
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download All Assets
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