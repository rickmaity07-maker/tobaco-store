"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

const STORAGE_KEY = "cask-ember-age-verified"

export function AgeGate() {
  const [status, setStatus] = useState<"checking" | "gate" | "verified" | "declined">("checking")
  const reduce = useReducedMotion()

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      setStatus(stored === "yes" ? "verified" : "gate")
    } catch {
      setStatus("gate")
    }
  }, [])

  function confirm() {
    try {
      localStorage.setItem(STORAGE_KEY, "yes")
    } catch {
      // ignore storage failures, still let them through this session
    }
    setStatus("verified")
  }

  function decline() {
    setStatus("declined")
  }

  if (status === "checking" || status === "verified") return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center bg-bg/95 backdrop-blur-sm px-4"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-md border border-line bg-surface p-8 text-center"
          initial={reduce ? false : { opacity: 0, y: 60, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          {status === "gate" && (
            <>
              <p className="glow-text-sm font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                Age verification
              </p>
              <h2 className="glow-text mt-3 text-2xl font-semibold text-ink">
                Are you 21 or older?
              </h2>
              <p className="glow-text-sm mt-3 text-sm text-ink-muted leading-relaxed">
                This site lists alcohol, tobacco, and vape products. You must
                confirm your age to continue.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.button
                  onClick={confirm}
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  style={{ boxShadow: "0 0 24px 2px rgba(139,92,246,0.5)" }}
                  className="glow-text-white bg-ember px-4 py-3 text-sm font-semibold text-bg hover:bg-ember-strong"
                >
                  Yes, I&apos;m 21+
                </motion.button>
                <motion.button
                  onClick={decline}
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  className="glow-text-sm border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
                >
                  No
                </motion.button>
              </div>
            </>
          )}
          {status === "declined" && (
            <>
              <h2 className="glow-text text-2xl font-semibold text-ink">
                Come back when you&apos;re 21.
              </h2>
              <p className="glow-text-sm mt-3 text-sm text-ink-muted leading-relaxed">
                We card everyone at the counter too. Non-restricted items
                like snacks and drinks are still fine to browse in person.
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
