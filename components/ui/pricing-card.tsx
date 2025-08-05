"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "./glass-card"

interface PricingCardProps {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  delay?: number
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <GlassCard className={`p-8 h-full ${popular ? "ring-2 ring-purple-500/50 bg-white/15" : ""}`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-300 ml-1">/{period}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            popular
              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              : "bg-white/10 hover:bg-white/20 border border-white/20"
          }`}
          size="lg"
        >
          Get Started
        </Button>
      </GlassCard>
    </motion.div>
  )
}
