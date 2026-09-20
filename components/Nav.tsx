"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { List, X } from "@phosphor-icons/react"
import { categories } from "../data/catalog"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="glow-text-sm group relative font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ember-strong"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ember-strong transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <motion.a
          href="#top"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink"
        >
          <span className="glow-text">CASK</span>
          <span
            className="glow-text-white bg-ember px-2 py-0.5 text-bg"
            style={{ boxShadow: "0 0 24px 2px rgba(139,92,246,0.5)" }}
          >
            EMBER
          </span>
        </motion.a>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              initial={reduce ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <NavLink href={`#${c.id}`}>{c.label}</NavLink>
            </motion.div>
          ))}
          <motion.a
            href="#visit"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + categories.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            className="glow-text-sm border border-ink px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-ember hover:text-ember-strong"
          >
            Visit us
          </motion.a>
        </nav>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {open ? <X size={24} /> : <List size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bg px-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1 pb-4 pt-2">
              {categories.map((c, i) => (
                <motion.li
                  key={c.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <a
                    href={`#${c.id}`}
                    onClick={() => setOpen(false)}
                    className="glow-text-sm block py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted hover:text-ember-strong"
                  >
                    {c.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: categories.length * 0.05 }}
              >
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="glow-text-sm mt-1 block border border-ink px-4 py-2.5 text-center font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  Visit us
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
