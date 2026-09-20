"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"
import { RealisticSmoke } from "./RealisticSmoke"
import { unsplashUrl } from "../data/catalog"

const wordVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -60, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    skewY: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-bg" style={{ perspective: 1000 }}>
      {/* SVG feTurbulence/feDisplacementMap filters are unreliable and expensive
          on mobile WebKit, so phones get a cheap static glow instead. */}
      <div
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(75% 65% at 78% 25%, rgba(139,92,246,0.75), transparent), radial-gradient(65% 55% at 22% 85%, rgba(34,211,238,0.5), transparent), radial-gradient(90% 70% at 50% 55%, rgba(139,92,246,0.25), transparent)",
        }}
      />

      {!reduce && (
        <div className="pointer-events-none absolute inset-0 hidden sm:block" style={{ contain: "paint" }}>
          <RealisticSmoke
            className="absolute inset-0 h-full w-full mix-blend-screen opacity-90"
            plumes={4}
            tint="#8b5cf6"
            tint2="#22d3ee"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glow-text-sm font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted"
          >
            Six Aisles, One Stop
          </motion.p>

          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <motion.span
              custom={0}
              initial={reduce ? false : "hidden"}
              animate="visible"
              variants={wordVariants}
              className="glow-text block"
            >
              Spirits, Smoke
            </motion.span>
            <motion.span
              custom={1}
              initial={reduce ? false : "hidden"}
              animate="visible"
              variants={wordVariants}
              className="glow-text block"
            >
              &amp;{" "}
              <span
                className="text-ember-strong"
                style={{ textShadow: "0 0 30px rgba(139,92,246,0.6), 0 0 70px rgba(34,211,238,0.3)" }}
              >
                Everything
              </span>
            </motion.span>
            <motion.span
              custom={2}
              initial={reduce ? false : "hidden"}
              animate="visible"
              variants={wordVariants}
              className="glow-text block"
            >
              Else.
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glow-text-sm mt-6 max-w-[46ch] text-base leading-relaxed text-ink-muted"
          >
            Beer to bourbon, cigars to disposables, and the odds and ends you
            forgot on the way. Open late, every day.
          </motion.p>

          <motion.a
            href="#categories"
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            className="glow-text-sm group relative mt-9 inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Shop the Shelves
            <motion.span
              animate={reduce ? undefined : { x: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.span>
          </motion.a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: -6, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={reduce ? undefined : { scale: 1.03, rotate: 1 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-ember/30 to-accent-2/20 blur-3xl" />
          <div className="h-full w-full overflow-hidden rounded-[28px] border border-line">
            <img
              src={unsplashUrl("photo-1576751412295-7e7360fa3f71", 900)}
              alt="Bourbon from the shelves"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
