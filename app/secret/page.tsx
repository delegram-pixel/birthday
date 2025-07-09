"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function SecretPage() {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showError, setShowError] = useState(false)
  const correctPassword = "iloveyou" // You can change this to something more personal

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true)
      setShowError(false)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const secretPoem = `My Birthday Girl,

If you've found this secret chamber of my heart,
It means you've journeyed through each loving part
Of this magical world.

This final spell I cast with words so sweet:
You make my world feel whole and complete.
Not just today, but every day,
You fill my life with magic everywhere.

So here's my secret, whispered soft and low:
You're the greatest gift I'll ever know.
Happy Birthday, my love, my heart, my kidneys,
You make everything in my world feel right.

Forever and always,
August ✨

P.S. - How about I take you out when you get back! ❤️`

  return (
    <div className="min-h-screen magical-gradient relative overflow-hidden">
      {/* Magical particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-enchanted-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center min-h-screen p-8">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="password"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="max-w-md mx-auto text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-cinzel text-4xl md:text-6xl text-enchanted-gold mb-8 animate-glow"
              >
                🔮 Secret Chamber 🔮
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl mb-8 border border-enchanted-gold/20"
              >
                <p className="font-great-vibes text-2xl text-gray-800 mb-6">
                  "Speak the magic words that unlock my heart..."
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the secret spell..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-lavender-mist focus:border-enchanted-gold outline-none font-libre text-gray-800 bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-lg px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Cast Spell ✨
                  </button>
                </form>

                {showError && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-libre mt-4">
                    Hmm, that's not quite right. Try again! 💫
                  </motion.p>
                )}

                <p className="font-libre text-sm text-gray-600 mt-4 opacity-70">
                  Hint: Three little words that mean everything 💕
                </p>
              </motion.div>

              <Link href="/star">
                <button className="bg-twilight text-enchanted-gold font-cinzel text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Back to Your Star
                </button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="secret"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-cinzel text-4xl md:text-6xl text-enchanted-gold mb-8 animate-glow"
              >
                🎁 The Final Secret 🎁
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl mb-8 border border-enchanted-gold/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                <pre className="font-great-vibes text-xl md:text-2xl text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {secretPoem}
                </pre>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="space-x-4"
              >
                <Link href="/">
                  <button className="bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
                    Start the Journey Again ✨
                  </button>
                </Link>
              </motion.div>

              {/* Celebration particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [-50, -100, -150],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                    }}
                  >
                    {["✨", "💖", "🎉", "⭐", "💫"][i % 5]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
