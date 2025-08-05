"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
  onError?: () => void
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  fallbackText,
  onError 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center ${className}`}>
        {fallbackText ? (
          <span className="text-white font-semibold text-sm">{fallbackText}</span>
        ) : (
          <ImageIcon className="w-6 h-6 text-gray-400" />
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center ${className}`}
        >
          <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
} 