"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function Typewriter({ text, speed = 50, delay = 0, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsComplete(true)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayText("")
      setIsComplete(false)
    }, delay)

    return () => clearTimeout(initialDelay)
  }, [delay])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
} 