"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function StarPage() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Show message after delay
    const timer = setTimeout(() => setShowMessage(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-deep-purple via-twilight to-soft-purple">
      {/* Simple CSS Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-enchanted-gold rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Special Central Star */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-6xl animate-pulse">⭐</div>
      </div>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-4xl mx-auto p-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-cinzel text-4xl md:text-6xl text-enchanted-gold mb-8 animate-glow"
            >
              Your Star
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl mb-8 border border-enchanted-gold/20"
            >
              <p className="font-great-vibes text-2xl md:text-3xl text-gray-800 leading-relaxed">
                I named a star after you, I guess NASA might be coming for me soon
                Happy Birthday, my brightest star ⭐"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="space-x-4 pointer-events-auto"
            >
              <Link href="/secret">
                <button className="bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
                  One More Surprise 🎁
                </button>
              </Link>
              <Link href="/magic">
                <button className="bg-twilight text-enchanted-gold font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Back to Magic
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
