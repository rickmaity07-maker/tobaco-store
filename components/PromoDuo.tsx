"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import type { Category } from "../data/catalog"
import { ProductVisual } from "./ProductVisual"

function PromoTile({ category, index }: { category: Category; index: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-14%", "14%"])

  return (
    <motion.a
      ref={ref}
      href={`#${category.id}`}
      initial={reduce ? false : { opacity: 0, y: 60, scale: 0.85, rotate: index === 0 ? -4 : 4 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.12, type: "spring", stiffness: 120, damping: 16 }}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      className="group relative block aspect-[4/3] overflow-hidden sm:aspect-[16/11]"
    >
      <motion.div className="absolute inset-x-0 -top-[15%] h-[130%] w-full" style={{ y }}>
        <ProductVisual
          categoryId={category.id}
          photo={category.photo ?? category.bgPhoto}
          alt={category.label}
          className="h-full w-full transition-transform duration-700 group-hover:scale-110"
          iconSize={72}
          width={900}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
      <motion.span
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="glow-text absolute bottom-5 left-5 font-display text-2xl font-bold tracking-tight text-ink transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl"
      >
        {category.label}
      </motion.span>
    </motion.a>
  )
}

export function PromoDuo({ categories }: { categories: [Category, Category] }) {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((c, i) => (
          <PromoTile key={c.id} category={c} index={i} />
        ))}
      </div>
    </section>
  )
}
