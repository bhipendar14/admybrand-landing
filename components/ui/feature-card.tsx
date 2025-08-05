"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { GlassCard } from "./glass-card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <GlassCard className="p-6 h-full hover:bg-white/15 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  )
}
