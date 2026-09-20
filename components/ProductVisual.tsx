"use client"

import { useState } from "react"
import { unsplashUrl } from "../data/catalog"
import { CategoryVisual } from "./CategoryVisual"

export function ProductVisual({
  categoryId,
  photo,
  alt,
  className = "",
  iconSize = 44,
  width = 700,
}: {
  categoryId: string
  photo?: string
  alt: string
  className?: string
  iconSize?: number
  width?: number
}) {
  const [failed, setFailed] = useState(false)

  if (!photo || failed) {
    return <CategoryVisual categoryId={categoryId} className={className} iconSize={iconSize} />
  }

  return (
    <div className={`overflow-hidden bg-surface-2 ${className}`}>
      <img
        src={unsplashUrl(photo, width)}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
