"use client"

import type { Icon } from "@phosphor-icons/react"
import { Wine, Coffee, Flame, Cigarette, Cloud, Basket } from "@phosphor-icons/react"

export const categoryIcons: Record<string, Icon> = {
  alcohol: Wine,
  "non-alcoholic": Coffee,
  tobacco: Flame,
  cigarettes: Cigarette,
  vapes: Cloud,
  everyday: Basket,
}

export function CategoryVisual({
  categoryId,
  className = "",
  iconSize = 64,
}: {
  categoryId: string
  className?: string
  iconSize?: number
}) {
  const Icon = categoryIcons[categoryId] ?? Basket

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-surface-2 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgb(139 92 246 / 0.18), transparent 55%), radial-gradient(circle at 80% 85%, rgb(34 211 238 / 0.12), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-ink) 0px, var(--color-ink) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <Icon size={iconSize} weight="thin" className="relative text-ember" />
    </div>
  )
}
