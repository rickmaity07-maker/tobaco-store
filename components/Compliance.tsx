"use client"

import { motion, useReducedMotion } from "motion/react"
import { ShieldCheck } from "@phosphor-icons/react"
import { unsplashUrl } from "../data/catalog"

export function Compliance() {
  const reduce = useReducedMotion()

  return (
    <section id="compliance" className="relative isolate overflow-hidden border-t border-line bg-surface">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={unsplashUrl("photo-1657593091045-3927d4967afe", 1600)}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/35 to-surface" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 160, damping: 12 }}
          className="relative mx-auto flex h-16 w-16 items-center justify-center"
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-ember/40"
            animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <ShieldCheck size={36} className="relative text-ember" weight="light" />
        </motion.div>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="glow-text font-display mt-4 text-3xl font-bold leading-[1.15] text-ink sm:text-4xl"
        >
          We check ID. Every time. No exceptions.
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glow-text-sm mt-4 text-sm leading-relaxed text-ink-muted"
        >
          Alcohol, tobacco, and vape products are sold only to customers 21
          and older with valid, unexpired photo ID. We refuse sale to anyone
          who cannot provide it, and to anyone purchasing on behalf of a
          minor. This listing is informational and does not constitute an
          online sale.
        </motion.p>
      </div>
    </section>
  )
}
