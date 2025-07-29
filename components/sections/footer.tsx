"use client"

import { motion } from "framer-motion"
import { Zap, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
    Resources: [
      { name: "Blog", href: "#BlogSection" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Security", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/admybrand?lang=en", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/admybrand/?originalSubdomain=in", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/admybrand/", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="https://us.admybrand.com/assets/svg/web_logo.svg"
                  alt="ADmyBRAND AI"
                  className="h-8 w-auto"
                />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your marketing strategy with AI-powered automation, personalized campaigns, and data-driven
                insights that drive real results.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>hello@admybrand.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns - All 4 in a row */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">© 2025 ADmyBRAND AI Suite. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with ❤️ for marketing professionals worldwide</p>
        </motion.div>
      </div>
    </footer>
  )
}
