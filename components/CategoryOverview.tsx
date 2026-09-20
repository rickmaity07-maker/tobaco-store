"use client"

import { motion, useReducedMotion } from "motion/react"
import { categories, unsplashUrl } from "../data/catalog"
import { ProductVisual } from "./ProductVisual"

const tileVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8, rotate: -6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, delay: i * 0.08, type: "spring" as const, stiffness: 140, damping: 14 },
  }),
}

export function CategoryOverview() {
  const reduce = useReducedMotion()

  return (
    <section id="categories" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={unsplashUrl("photo-1758247706694-7830caadea8d", 1600)}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glow-text text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Product Categories
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="glow-text-sm mx-auto mt-3 max-w-[50ch] text-center text-sm text-ink-muted"
        >
          Six aisles, one stop. Pick one.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6" style={{ perspective: 1200 }}>
          {categories.map((c, i) => (
            <motion.a
              key={c.id}
              href={`#${c.id}`}
              custom={i}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={tileVariants}
              whileHover={reduce ? undefined : { y: -10, rotate: -2, scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className="group flex flex-col items-center text-center"
            >
              <ProductVisual
                categoryId={c.id}
                photo={c.photo ?? c.bgPhoto}
                alt={c.label}
                className="aspect-square w-full shadow-lg shadow-black/0 transition-shadow duration-300 group-hover:shadow-ember/20"
                iconSize={44}
                width={400}
              />
              <span className="glow-text-sm mt-4 font-display text-sm font-semibold text-ink transition-colors group-hover:text-ember-strong sm:text-base">
                {c.label}
              </span>
              {c.restricted && (
                <motion.span
                  animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="glow-text-sm mt-1 font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ember-strong"
                >
                  21+ only
                </motion.span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
