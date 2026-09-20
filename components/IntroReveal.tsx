"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { RealisticSmoke } from "./RealisticSmoke"

const CASK = ["C", "a", "s", "k"]
const LETTER_DELAY = 0.09
const CASK_START = 0.35
const EMBER_START = CASK_START + CASK.length * LETTER_DELAY + 0.1

const TEXT_GLOW =
  "0 0 12px rgba(255,255,255,0.8), 0 0 36px rgba(139,92,246,0.85), 0 0 80px rgba(139,92,246,0.6), 0 0 130px rgba(34,211,238,0.4)"
const BADGE_GLOW = "0 0 50px 10px rgba(139,92,246,0.7), 0 0 100px 20px rgba(34,211,238,0.3)"

export function IntroReveal() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (reduce) {
      setVisible(false)
      return
    }
    const t = setTimeout(() => setVisible(false), 2700)
    return () => clearTimeout(t)
  }, [reduce])

  if (reduce) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-110 flex items-center justify-center overflow-hidden bg-bg"
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70 sm:hidden"
            style={{
              background:
                "radial-gradient(65% 55% at 50% 35%, rgba(139,92,246,0.4), transparent), radial-gradient(50% 40% at 50% 75%, rgba(34,211,238,0.25), transparent)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 hidden sm:block" style={{ contain: "paint" }}>
            <RealisticSmoke
              className="absolute inset-0 h-full w-full"
              plumes={5}
              tint="#8b5cf6"
              tint2="#22d3ee"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />

          {/* ignition spark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-ember-strong"
              initial={{ scale: 0, opacity: 0, boxShadow: "0 0 0px 0px rgba(139,92,246,0)" }}
              animate={{
                scale: [0, 1.8, 0],
                opacity: [0, 1, 0],
                boxShadow: ["0 0 0px 0px rgba(139,92,246,0)", "0 0 40px 14px rgba(139,92,246,0.7)", "0 0 0px 0px rgba(139,92,246,0)"],
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="relative flex flex-col items-center px-4">
            <div
              className="flex flex-wrap items-center justify-center gap-2 font-display text-4xl font-bold uppercase tracking-tight text-ink sm:gap-3 sm:text-7xl lg:text-8xl"
              style={{ perspective: 600 }}
            >
              <span className="flex" style={{ textShadow: TEXT_GLOW }}>
                {CASK.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: CASK_START + i * LETTER_DELAY,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <motion.span
                className="bg-ember px-4 py-1 text-bg"
                initial={{ opacity: 0, scale: 0.4, rotate: -12, boxShadow: "0 0 0px 0px rgba(139,92,246,0)" }}
                animate={{ opacity: 1, scale: 1, rotate: 0, boxShadow: BADGE_GLOW }}
                transition={{ delay: EMBER_START, type: "spring", stiffness: 260, damping: 16 }}
              >
                Ember
              </motion.span>
            </div>

            <motion.div
              className="mt-5 h-px bg-gradient-to-r from-transparent via-ember-strong to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: EMBER_START + 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "60%" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
