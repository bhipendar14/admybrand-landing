"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-2xl p-8 backdrop-blur-sm text-center"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-red-400" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-white hover:bg-gray-100 text-black font-semibold rounded-xl"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full border-white/20 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                href="/pages/company/about-us"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/pages/product/api-documentation"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                API Docs
              </Link>
              <Link 
                href="/pages/company/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/register"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 