"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
  aspectRatio?: "square" | "video" | "wide" | "tall"
  onError?: () => void
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className = "", 
  fallbackText,
  aspectRatio = "video",
  onError 
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[4/5]"
  }

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
      <div className={`bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center ${aspectRatioClasses[aspectRatio]} ${className}`}>
        {fallbackText ? (
          <span className="text-white font-semibold text-sm px-4 text-center">{fallbackText}</span>
        ) : (
          <ImageIcon className="w-8 h-8 text-gray-400" />
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center"
        >
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
} 