"use client"

import { motion } from "framer-motion"
import { Shield, Lock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding px-4">
        <div className="container-modern max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-display font-playfair text-white mb-6">
              Platform <span className="text-gradient-primary">Security</span>
            </h1>
            <p className="text-body text-gray-400 max-w-2xl mx-auto mb-8">
              Learn how we keep your data and campaigns secure at ADmyBRAND.
            </p>
          </motion.div>
          <Card className="glass-dark border-white/10">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <CardTitle className="text-white">Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-300 space-y-6 text-left">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi. Etiam euismod, nisi eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi.</p>
                <p>Aliquam erat volutpat. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi. Etiam euismod, nisi eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi.</p>
                <p>Morbi euismod, nisi eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi. Etiam euismod, nisi eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nisi.</p>
                <p>For more information, contact us at security@admybrand.ai.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}