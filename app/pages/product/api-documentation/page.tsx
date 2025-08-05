"use client"

import { motion } from "framer-motion"
import { Code, BookOpen, Zap, Shield, Database, Globe, Cpu, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function APIDocumentationPage() {
  const apiFeatures = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Clean, intuitive REST endpoints for seamless integration with your existing systems.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Docs",
      description: "Detailed documentation with examples, SDKs, and interactive API playground.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "WebSocket support for real-time campaign updates and analytics streaming.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "OAuth 2.0, API keys, rate limiting, and SOC 2 compliance for enterprise use.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Export",
      description: "Export campaign data, analytics, and reports in multiple formats (JSON, CSV, Excel).",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Lightning-fast API responses with global CDN distribution and 99.9% uptime.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "AI Endpoints",
      description: "Access our AI models for content generation, sentiment analysis, and optimization.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics API",
      description: "Real-time analytics and reporting endpoints for campaign performance tracking.",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Generate Content",
      code: `const response = await fetch('https://api.admybrand.ai/v1/content/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Create a social media post about AI marketing',
    platform: 'twitter',
    tone: 'professional'
  })
});

const content = await response.json();`
    },
    {
      language: "Python",
      title: "Analyze Campaign",
      code: `import requests

response = requests.post(
    'https://api.admybrand.ai/v1/analytics/campaign',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'campaign_id': 'camp_123',
        'metrics': ['engagement', 'reach', 'conversions']
    }
)

analytics = response.json()`
    },
    {
      language: "cURL",
      title: "Get User Profile",
      code: `curl -X GET "https://api.admybrand.ai/v1/user/profile" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
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
              API <span className="text-gradient-primary">Documentation</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Integrate ADmyBRAND's powerful AI marketing capabilities into your applications with our comprehensive REST API. 
              Build custom workflows, automate campaigns, and access real-time analytics with simple HTTP requests.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <BookOpen className="w-4 h-4 mr-2" />
                View Full Documentation
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Code className="w-4 h-4 mr-2" />
                API Playground
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
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
              Powerful API <span className="text-gradient-primary">Features</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Everything you need to build powerful marketing automation and AI-driven campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
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
              Quick <span className="text-gradient-primary">Examples</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Get started with these common API calls and integrate ADmyBRAND into your workflow.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      {example.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {example.language}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
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
                  Ready to Get Started?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers who are already using ADmyBRAND's API to build amazing marketing applications.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Get API Key
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    View SDKs
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