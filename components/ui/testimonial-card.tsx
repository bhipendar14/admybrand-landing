"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { GlassCard } from "./glass-card"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  delay?: number
}

export function TestimonialCard({ name, role, company, content, rating, avatar, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlassCard className="p-6 h-full">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
          ))}
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">"{content}"</p>

        <div className="flex items-center">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-gray-400 text-sm">
              {role} at {company}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
