"use client"

import { motion, useReducedMotion } from "motion/react"
import { MapPin, Clock, Phone, ShieldCheck } from "@phosphor-icons/react"
import { categories, unsplashUrl } from "../data/catalog"
import { business } from "../lib/site"

const columnVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, type: "spring" as const, stiffness: 120, damping: 16 },
  }),
}

const badges = [
  "Family Owned",
  "Open Late, Every Day",
  "ID Checked Every Time",
  "Six Aisles, One Stop",
  "21+ For Restricted Aisles",
]
const track = [...badges, ...badges]

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.streetAddress}, ${business.addressLocality}, ${business.addressRegion} ${business.postalCode}`
)}`

export function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer id="visit">
      <div className="group overflow-hidden border-y border-line bg-surface py-4">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="glow-text-sm shrink-0 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-ember">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="glow-text-white font-display text-2xl font-bold text-bg sm:text-3xl">
              Come By The Store
            </h2>
            <p className="glow-text-white mt-2 text-sm text-bg/80">
              {business.streetAddress}, {business.addressLocality}, {business.addressRegion}{" "}
              {business.postalCode} &middot; {business.telephone}
            </p>
          </motion.div>
          <motion.a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            initial={reduce ? false : { opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            className="glow-text-white inline-flex shrink-0 items-center justify-center border border-bg px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-bg transition-colors hover:bg-bg hover:text-ember"
          >
            Get Directions
          </motion.a>
        </div>
      </div>

      <div className="relative isolate overflow-hidden border-t border-line bg-bg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={unsplashUrl("photo-1768464705938-1d43e07023cf", 1600)}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              custom={0}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={columnVariants}
            >
              <p className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
                <span className="glow-text">CASK</span>
                <span className="glow-text-white bg-ember px-2 py-0.5 text-bg">EMBER</span>
              </p>
              <p className="glow-text-sm mt-3 max-w-[32ch] text-sm text-ink-muted">
                {business.description}
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={columnVariants}
            >
              <h3 className="glow-text-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Useful Links
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {categories.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="glow-text-sm text-sm text-ink-muted transition-colors hover:text-ink">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={columnVariants}
            >
              <h3 className="glow-text-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Contact Us
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="glow-text-sm flex gap-2 text-sm text-ink-muted">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-ember-strong" weight="light" />
                  <span>
                    {business.streetAddress}
                    <br />
                    {business.addressLocality}, {business.addressRegion} {business.postalCode}
                  </span>
                </li>
                <li className="glow-text-sm flex gap-2 text-sm text-ink-muted">
                  <Phone size={18} className="mt-0.5 shrink-0 text-ember-strong" weight="light" />
                  <span>{business.telephone}</span>
                </li>
                <li className="glow-text-sm flex gap-2 text-sm text-ink-muted">
                  <Clock size={18} className="mt-0.5 shrink-0 text-ember-strong" weight="light" />
                  <span>
                    Mon&ndash;Sat 9am&ndash;11pm
                    <br />
                    Sun 10am&ndash;9pm
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={columnVariants}
            >
              <h3 className="glow-text-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Age Verification
              </h3>
              <p className="glow-text-sm mt-4 flex items-start gap-2 text-sm text-ink-muted">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-ember-strong" weight="light" />
                <span>
                  Must be 21 or older to purchase alcohol, tobacco, and vape
                  products. We card everyone. Prices and availability vary by
                  location and are subject to change.
                </span>
              </p>
            </motion.div>
          </div>

          <div className="mt-12 border-t border-line pt-6 text-xs text-ink-muted">
            <p>
              Product photography via{" "}
              <a
                href="https://unsplash.com"
                className="underline decoration-line underline-offset-2 hover:text-ink"
              >
                Unsplash
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
