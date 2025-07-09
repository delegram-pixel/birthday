"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const lovePoem = `My Shrink <3,

In this magical realm where our hearts intertwine,
I write these words with love so divine.
Like Harry found magic in the darkest of nights,
You brought enchantment and filled my life with lights.

Your laugh is my favorite spell to hear,
Your smile makes all my worries disappear.
In this universe of infinite stars above,
You are my greatest magic, my truest love.

Today we celebrate the day you were born,
The day the world became less forlorn
(I sound like Dumbledore, tehe).
So let me take you on a journey.`

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Show content immediately, then start typewriter effect
    let index = 0
    const timer = setInterval(() => {
      if (index < lovePoem.length) {
        setDisplayedText(lovePoem.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowButton(true), 1000)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-twilight via-deep-purple to-soft-purple">
      {/* Simplified Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
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

      {/* Floating Candles */}
      <div className="absolute top-20 left-10 floating-candle">
        <div className="w-4 h-8 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-full"></div>
        <div className="w-2 h-4 bg-enchanted-gold rounded-full mx-auto animate-pulse"></div>
      </div>
      <div className="absolute top-32 right-16 floating-candle" style={{ animationDelay: "2s" }}>
        <div className="w-4 h-8 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-full"></div>
        <div className="w-2 h-4 bg-enchanted-gold rounded-full mx-auto animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-8xl text-enchanted-gold mb-8 animate-glow">
            ✨ Happy Birthday ✨
          </h1>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-12 mb-8 shadow-2xl border border-enchanted-gold/20">
            <pre className="font-great-vibes text-lg md:text-2xl lg:text-3xl text-gray-800 leading-relaxed whitespace-pre-wrap">
              {displayedText}
              <span className="animate-pulse text-enchanted-gold">|</span>
            </pre>
          </div>

          {showButton && (
            <div className="animate-fadeInUp">
              <Link href="/reasons">
                <button className="bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
                  Begin the Journey ✨
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
