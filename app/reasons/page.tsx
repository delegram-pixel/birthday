"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"


const reasons = [
  { id: 1, text: "Your laugh that makes me want to make you happy all the time", tag: "magical" },
  { id: 2, text: "Your incredible strength in difficult times.", tag: "funny" },
  { id: 3, text: "Your amazing brain and all it's random questions", tag: "deep" },
  { id: 4, text: "Your beautiul and sparkling brown eyes", tag: "deep" },
  { id: 5, text: "Your gorgeous forehead", tag: "funny" },
  { id: 6, text: "How you remember the smallest details about me", tag: "deep" },
  { id: 7, text: "Your terrible but adorable jokes", tag: "funny" },
  { id: 8, text: "Your silly dance moves", tag: "random" },
  { id: 9, text: "How you make me feel like the luckiest person alive", tag: "magical" },
  { id: 10, text: "Your ability to find beauty in simple things", tag: "deep" },
  { id: 11, text: "The way you steal my clothes and look better in them", tag: "funny" },
  { id: 12, text: "Your writings and peoms", tag: "magical" },
  { id: 13, text: "Your passion for the things you love", tag: "deep" },
  { id: 14, text: "The way you make pancakes", tag: "random" },
  { id: 15, text: "How you turn every day into an adventure", tag: "magical" },
  { id: 16, text: "Your yapping that always finds a way to put me to sleep", tag: "magical" },
  { id: 17, text: "You eating my spag (rolls eyes)", tag: "funny" },
  { id: 18, text: "How you make me want to be a better person every day", tag: "random" },
  { id: 19, text: "Your lips, your fingers, your voice, your hugs, your eyebrows, mehn its evertything at point (ps. i'm not obsessed.)", tag: "deep" },
  { id: 20, text: "Lastly, my dearest panda", tag: "deep" },
]

const allReasons = reasons

const tagColors = {
  magical: "bg-soft-purple text-white",
  deep: "bg-twilight text-enchanted-gold",
  funny: "bg-enchanted-gold text-twilight",
  random: "bg-lavender-mist text-twilight",
}

export default function ReasonsPage() {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleReasons((prev) => [...prev, id])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".reason-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen magical-gradient">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="font-cinzel text-5xl md:text-7xl text-enchanted-gold mb-4 animate-glow">
            20 Reasons I Love You
          </h1>
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              data-id={reason.id}
              className="reason-card bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-enchanted-gold/20"
              initial={{ opacity: 0, y: 50 }}
              animate={visibleReasons.includes(reason.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-cinzel text-lg text-gray-800 font-bold">#{reason.id}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[reason.tag as keyof typeof tagColors]}`}
                >
                 
                </span>
              </div>
              <p className="font-libre text-gray-700 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center"
        >
          <Link href="/magic">
            <button className="bg-gradient-to-r from-soft-purple to-lavender-mist text-white font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow mr-4">
              Continue the Magic ✨
            </button>
          </Link>
          <Link href="/">
            <button className="bg-twilight text-enchanted-gold font-cinzel text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Back to Beginning
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
