"use client"

import { motion, useReducedMotion } from "motion/react"
import { unsplashUrl, type Category } from "../../data/catalog"
import { ProductVisual } from "../ProductVisual"

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.88, rotate: -3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, delay: i * 0.07, type: "spring" as const, stiffness: 130, damping: 15 },
  }),
}

export function CategoryGrid({ category }: { category: Category }) {
  const reduce = useReducedMotion()

  return (
    <section id={category.id} className="relative isolate overflow-hidden border-t border-line bg-bg">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={unsplashUrl(category.bgPhoto, 1600)}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/35 to-bg" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="overflow-hidden">
            <motion.h2
              initial={reduce ? false : { opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glow-text font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {category.label}
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glow-text-sm mt-2 max-w-[52ch] text-sm text-ink-muted"
            >
              {category.blurb}
            </motion.p>
          </div>
          {category.restricted && (
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: 8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="glow-text-sm shrink-0 border border-ember/40 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-ember-strong"
            >
              21+ &middot; ID required
            </motion.span>
          )}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4" style={{ perspective: 1200 }}>
          {category.items.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover={reduce ? undefined : { y: -8, scale: 1.04 }}
              className="group"
            >
              <div className="overflow-hidden">
                <ProductVisual
                  categoryId={category.id}
                  photo={item.photo}
                  alt={item.name}
                  className="aspect-square transition-transform duration-500 group-hover:scale-110"
                  iconSize={44}
                  width={500}
                />
              </div>
              <p className="glow-text-sm mt-4 font-display text-base font-semibold text-ink">{item.name}</p>
              <p className="glow-text-sm mt-1 text-sm text-ink-muted">{item.detail}</p>
              <p className="glow-text-sm mt-2 font-display text-lg font-bold text-ink">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
