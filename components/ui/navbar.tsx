"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#BlogSection" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="relative">
        {/* Scanning neon border animation */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-border shadow-[0_0_5px_rgba(236,72,153,0.6)]"></div>
          <div className="absolute top-0 right-0 w-[2px] h-1/4 bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-scan-border-vertical shadow-[0_0_5px_rgba(236,72,153,0.6)]" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-border-reverse shadow-[0_0_5px_rgba(236,72,153,0.6)]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-1/4 bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-scan-border-vertical-reverse shadow-[0_0_5px_rgba(236,72,153,0.6)]" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Main navbar content */}
        <GlassCard className="px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a href="#">
                <img
                  src="https://in.admybrand.com/assets/svg/web_logo.svg"
                  alt="ADmyBRAND AI"
                  className="h-8 w-auto"
                />
              </a>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              asChild
            >
              <a href="/register">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full"
                asChild
              >
                <a href="/register">Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </GlassCard>
    </div>
    </motion.nav>
  )
}
