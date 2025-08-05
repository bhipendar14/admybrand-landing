"use client"

import { motion } from "framer-motion"
import { Zap, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const handleFooterClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Handle navigation
    if (href.startsWith('#')) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollToSection', targetId)
        try {
          window.location.href = '/'
        } catch (error) {
          console.error('Navigation error:', error)
          window.open('/', '_self')
        }
        return
      }
      
      if (targetElement) {
        // Use scrollIntoView with better options for smooth scrolling
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
        
        // Ensure scrolling is enabled after navigation
        setTimeout(() => {
          document.body.style.overflow = 'auto'
          document.documentElement.style.overflow = 'auto'
        }, 100)
      }
    } else {
      // Handle external links
      try {
        window.location.href = href
      } catch (error) {
        console.error('Navigation error:', error)
        window.open(href, '_self')
      }
    }
  }

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "/pages/product/api-documentation" },
      { name: "Integrations", href: "/pages/product/integrations" },
      { name: "Changelog", href: "/pages/product/changelog" },
    ],
    Company: [
      { name: "About Us", href: "/pages/company/about-us" },
      { name: "Careers", href: "/pages/company/careers" },
      { name: "Press Kit", href: "/pages/company/press-kit" },
      { name: "Contact", href: "/pages/company/contact" },
      { name: "Partners", href: "/pages/company/partners" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "/pages/resources/community" },
      { name: "Webinars", href: "/pages/resources/webinars" },
      { name: "Case Studies", href: "/pages/resources/case-studies" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/pages/legal/privacy-policy" },
      { name: "Terms of Service", href: "/pages/legal/terms-of-service" },
      { name: "Cookie Policy", href: "/pages/legal/cookie-policy" },
      { name: "GDPR", href: "/pages/legal/gdpr" },
      { name: "Security", href: "/pages/legal/security" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/Bhipendar", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bhipendar-kumar/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/bhipendar14/", label: "Instagram" },
    { icon: Github, href: "https://github.com/bhipendar14", label: "GitHub" },
  ]

  return (
    <footer className="glass-dark border-t border-white/10">
      <div className="container-modern py-16">
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
                <h3 className="text-white text-2xl font-bold font-playfair">ADmyBRAND</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-body">
                Transform your marketing strategy with AI-powered automation, personalized campaigns, and data-driven
                insights that drive real results.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-caption">bhipendarkumar31@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-caption">+91 8091220431</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-caption">Gujarat, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
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
                <h3 className="text-white font-semibold mb-4 text-subheading">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleFooterClick(link.href, e)}
                        className="text-gray-300 hover:text-white transition-all duration-300 text-caption hover:translate-x-1 inline-block cursor-pointer"
                      >
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
          <p className="text-gray-400 text-caption">© 2025 ADmyBRAND AI Suite. All rights reserved.</p>
          <p className="text-gray-400 text-caption mt-4 md:mt-0">Made with ❤️ for marketing professionals worldwide</p>
        </motion.div>
      </div>
    </footer>
  )
}
