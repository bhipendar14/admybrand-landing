"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { GlassCard } from "./glass-card"

interface FAQItemProps {
  question: string
  answer: string
  delay?: number
}

export function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlassCard className="overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
        >
          <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6">
                <p className="text-gray-300 leading-relaxed">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  )
}
