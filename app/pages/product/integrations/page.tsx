"use client"

import { motion } from "framer-motion"
import { Link, Zap, Database, MessageSquare, Calendar, BarChart3, Mail, Share2, CreditCard, ShoppingCart, Users, Settings, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegrationsPage() {
  const integrations = [
    {
      category: "Marketing Platforms",
      items: [
        {
          name: "Mailchimp",
          description: "Sync your email campaigns and subscriber lists seamlessly.",
          icon: Mail,
          color: "from-orange-500 to-red-500",
          status: "Available"
        },
        {
          name: "HubSpot",
          description: "Connect your CRM and marketing automation workflows.",
          icon: Users,
          color: "from-orange-500 to-yellow-500",
          status: "Available"
        },
        {
          name: "Salesforce",
          description: "Integrate with your sales pipeline and customer data.",
          icon: Database,
          color: "from-blue-500 to-cyan-500",
          status: "Available"
        }
      ]
    },
    {
      category: "Social Media",
      items: [
        {
          name: "Facebook & Instagram",
          description: "Manage ads and content across Meta platforms.",
          icon: Share2,
          color: "from-blue-600 to-indigo-600",
          status: "Available"
        },
        {
          name: "Twitter/X",
          description: "Schedule posts and analyze engagement metrics.",
          icon: MessageSquare,
          color: "from-blue-400 to-cyan-400",
          status: "Available"
        },
        {
          name: "LinkedIn",
          description: "Professional networking and B2B marketing automation.",
          icon: Users,
          color: "from-blue-700 to-indigo-700",
          status: "Available"
        }
      ]
    },
    {
      category: "Analytics & Tracking",
      items: [
        {
          name: "Google Analytics",
          description: "Track website performance and user behavior.",
          icon: BarChart3,
          color: "from-yellow-500 to-orange-500",
          status: "Available"
        },
        {
          name: "Google Ads",
          description: "Manage PPC campaigns and optimize ad performance.",
          icon: CreditCard,
          color: "from-blue-500 to-green-500",
          status: "Available"
        },
        {
          name: "Facebook Pixel",
          description: "Track conversions and build custom audiences.",
          icon: BarChart3,
          color: "from-blue-600 to-indigo-600",
          status: "Available"
        }
      ]
    },
    {
      category: "E-commerce",
      items: [
        {
          name: "Shopify",
          description: "Sync products, orders, and customer data.",
          icon: ShoppingCart,
          color: "from-green-500 to-emerald-500",
          status: "Available"
        },
        {
          name: "WooCommerce",
          description: "WordPress e-commerce integration and automation.",
          icon: ShoppingCart,
          color: "from-purple-500 to-pink-500",
          status: "Available"
        },
        {
          name: "Stripe",
          description: "Payment processing and subscription management.",
          icon: CreditCard,
          color: "from-purple-600 to-indigo-600",
          status: "Available"
        }
      ]
    },
    {
      category: "Productivity",
      items: [
        {
          name: "Slack",
          description: "Get notifications and alerts in your workspace.",
          icon: MessageSquare,
          color: "from-purple-500 to-pink-500",
          status: "Available"
        },
        {
          name: "Zapier",
          description: "Connect with 5000+ apps and automate workflows.",
          icon: Zap,
          color: "from-orange-500 to-red-500",
          status: "Available"
        },
        {
          name: "Google Calendar",
          description: "Schedule campaigns and sync important dates.",
          icon: Calendar,
          color: "from-blue-500 to-green-500",
          status: "Available"
        }
      ]
    },
    {
      category: "Custom Integrations",
      items: [
        {
          name: "Webhook Support",
          description: "Send data to any system with custom webhooks.",
          icon: Settings,
          color: "from-gray-500 to-gray-700",
          status: "Available"
        },
        {
          name: "REST API",
          description: "Build custom integrations with our comprehensive API.",
          icon: Link,
          color: "from-indigo-500 to-purple-500",
          status: "Available"
        },
        {
          name: "SDK Libraries",
          description: "Official SDKs for Node.js, Python, and PHP.",
          icon: Code,
          color: "from-green-500 to-emerald-500",
          status: "Available"
        }
      ]
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
              Powerful <span className="text-gradient-primary">Integrations</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Connect ADmyBRAND with your favorite tools and platforms. Automate workflows, sync data, 
              and create seamless marketing experiences across your entire tech stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <Zap className="w-4 h-4 mr-2" />
                View All Integrations
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Link className="w-4 h-4 mr-2" />
                Request Integration
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="section-padding px-4">
        <div className="container-modern">
          {integrations.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-playfair text-white mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                            {item.status}
                          </span>
                        </div>
                        <CardTitle className="text-white group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400 mb-4">
                          {item.description}
                        </CardDescription>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                          Learn More →
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                  Need a Custom Integration?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Don't see the integration you need? We can build custom integrations for your specific requirements. 
                  Our team works closely with you to ensure seamless connectivity.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    Request Custom Integration
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    Contact Sales
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