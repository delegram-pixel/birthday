"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MagicPage() {
  const [owlPosition, setOwlPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveOwl = () => {
      setOwlPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
      })
    }

    const interval = setInterval(moveOwl, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen magical-gradient relative overflow-hidden">
      {/* Floating Books */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-16 h-20 bg-gradient-to-b from-yellow-800 to-yellow-900 rounded shadow-lg transform rotate-12">
          <div className="w-full h-2 bg-enchanted-gold rounded-t"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        <div className="w-14 h-18 bg-gradient-to-b from-purple-800 to-purple-900 rounded shadow-lg transform -rotate-6">
          <div className="w-full h-2 bg-lavender-mist rounded-t"></div>
        </div>
      </motion.div>

      {/* Flying Owl */}
      <motion.div
        className="absolute w-16 h-16 z-10"
        animate={{ x: owlPosition.x, y: owlPosition.y }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="text-6xl">🦉</div>
      </motion.div>

      {/* Magical Runes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-enchanted-gold text-2xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-cinzel text-6xl md:text-8xl text-enchanted-gold mb-8 animate-glow"
          >
            Our Magical World
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-enchanted-gold/20"
            >
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="font-cinzel text-2xl text-gray-800 mb-4">Our Castle</h3>
              <p className="font-libre text-gray-700">
                In our magical realm, we've built a castle of memories, where every room holds a special moment we've
                shared together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-enchanted-gold/20"
            >
              <div className="text-6xl mb-4">💫</div>
              <h3 className="font-cinzel text-2xl text-gray-800 mb-4">Our Spells</h3>
              <p className="font-libre text-gray-700">
                Every laugh is a happiness spell, every hug is a comfort charm, and every "I love you" is the most
                powerful magic of all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-enchanted-gold/20"
            >
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="font-cinzel text-2xl text-gray-800 mb-4">Our Adventures</h3>
              <p className="font-libre text-gray-700">
                From midnight conversations to spontaneous adventures, we've written our own magical story, chapter by
                chapter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-enchanted-gold/20"
            >
              <div className="text-6xl mb-4">💝</div>
              <h3 className="font-cinzel text-2xl text-gray-800 mb-4">Our Future</h3>
              <p className="font-libre text-gray-700">
                The best magic is yet to come. Together, we'll create countless more enchanted moments in the years
                ahead.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="space-x-4"
          >
            <Link href="/star">
              <button className="bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
                See Your Star ⭐
              </button>
            </Link>
            <Link href="/reasons">
              <button className="bg-twilight text-enchanted-gold font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Back to Reasons
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
