"use client"

import { motion } from "framer-motion"
import { Calendar, Zap, Bug, Star, AlertTriangle, CheckCircle, Plus, Minus, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChangelogPage() {
  const changelogEntries = [
    {
      version: "2.1.0",
      date: "December 15, 2024",
      type: "major",
      title: "AI Content Studio Launch",
      description: "Introducing our revolutionary AI-powered content creation studio with advanced templates and real-time collaboration.",
      changes: [
        { type: "feature", text: "New AI Content Studio with 50+ templates" },
        { type: "feature", text: "Real-time collaboration for team content creation" },
        { type: "feature", text: "Advanced AI writing assistant with brand voice training" },
        { type: "improvement", text: "Enhanced content analytics and performance tracking" },
        { type: "fix", text: "Resolved issues with social media scheduling" }
      ]
    },
    {
      version: "2.0.5",
      date: "December 8, 2024",
      type: "minor",
      title: "Enhanced Analytics Dashboard",
      description: "Major improvements to our analytics dashboard with new metrics, custom reports, and better data visualization.",
      changes: [
        { type: "feature", text: "New custom report builder" },
        { type: "feature", text: "Advanced funnel analysis tools" },
        { type: "improvement", text: "Faster data loading and processing" },
        { type: "improvement", text: "Enhanced mobile responsiveness" },
        { type: "fix", text: "Fixed dashboard refresh issues" }
      ]
    },
    {
      version: "2.0.0",
      date: "November 30, 2024",
      type: "major",
      title: "Complete Platform Redesign",
      description: "A complete overhaul of the ADmyBRAND platform with modern UI, improved performance, and new features.",
      changes: [
        { type: "feature", text: "Complete UI/UX redesign with dark theme" },
        { type: "feature", text: "New campaign automation workflows" },
        { type: "feature", text: "Enhanced AI model with better content generation" },
        { type: "improvement", text: "50% faster page load times" },
        { type: "improvement", text: "Improved mobile app experience" },
        { type: "fix", text: "Resolved all known bugs from v1.x" }
      ]
    },
    {
      version: "1.9.2",
      date: "November 15, 2024",
      type: "patch",
      title: "Bug Fixes and Performance Improvements",
      description: "Critical bug fixes and performance optimizations to ensure smooth operation.",
      changes: [
        { type: "fix", text: "Fixed email campaign delivery issues" },
        { type: "fix", text: "Resolved social media API connection problems" },
        { type: "improvement", text: "Optimized database queries for faster performance" },
        { type: "improvement", text: "Enhanced error handling and logging" }
      ]
    },
    {
      version: "1.9.0",
      date: "November 1, 2024",
      type: "minor",
      title: "Social Media Integration Updates",
      description: "New social media features and improved integration with major platforms.",
      changes: [
        { type: "feature", text: "Added TikTok integration" },
        { type: "feature", text: "Enhanced Instagram Stories support" },
        { type: "feature", text: "New social media analytics dashboard" },
        { type: "improvement", text: "Better content scheduling across platforms" },
        { type: "fix", text: "Fixed LinkedIn posting issues" }
      ]
    },
    {
      version: "1.8.5",
      date: "October 20, 2024",
      type: "patch",
      title: "Security and Stability Updates",
      description: "Important security updates and stability improvements.",
      changes: [
        { type: "fix", text: "Security vulnerability patches" },
        { type: "fix", text: "Resolved authentication issues" },
        { type: "improvement", text: "Enhanced data encryption" },
        { type: "improvement", text: "Better error recovery mechanisms" }
      ]
    }
  ]

  const getChangeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Plus className="w-4 h-4 text-green-400" />
      case "improvement":
        return <Star className="w-4 h-4 text-blue-400" />
      case "fix":
        return <CheckCircle className="w-4 h-4 text-orange-400" />
      case "breaking":
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      default:
        return <Code className="w-4 h-4 text-gray-400" />
    }
  }

  const getVersionBadge = (type: string) => {
    switch (type) {
      case "major":
        return "bg-red-500/20 text-red-400"
      case "minor":
        return "bg-blue-500/20 text-blue-400"
      case "patch":
        return "bg-green-500/20 text-green-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
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
              Product <span className="text-gradient-primary">Changelog</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Stay up to date with the latest features, improvements, and bug fixes. 
              We're constantly working to make ADmyBRAND better for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Calendar className="w-4 h-4 mr-2" />
                Subscribe to Updates
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Code className="w-4 h-4 mr-2" />
                API Changelog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="section-padding px-4">
        <div className="container-modern max-w-4xl">
          {changelogEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="glass-dark border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getVersionBadge(entry.type)}`}>
                        {entry.type.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-playfair text-white">
                        v{entry.version}
                      </h3>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {entry.date}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg mb-2">
                    {entry.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {entry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {entry.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start space-x-3">
                        <div className="mt-1">
                          {getChangeIcon(change.type)}
                        </div>
                        <span className="text-gray-300 text-sm">
                          {change.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
                  Stay Updated
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Never miss an update! Subscribe to our changelog and get notified about new features, 
                  improvements, and important announcements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    <Zap className="w-4 h-4 mr-2" />
                    Subscribe to Updates
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    View Roadmap
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