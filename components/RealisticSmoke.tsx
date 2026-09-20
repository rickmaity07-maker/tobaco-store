"use client"

import { useId } from "react"

/**
 * Wispy, curling smoke rendered with SVG feTurbulence + feDisplacementMap.
 * No 3D, no WebGL, no external assets - just filters distorting soft
 * blurred blobs over time, which is the standard technique for convincing
 * procedural smoke on the web.
 *
 * Optional `tint2` alternates plume color for a layered, two-tone look
 * without paying for a second feTurbulence filter pass - all plumes share
 * one filtered <g>, which is the expensive part.
 */
export function RealisticSmoke({
  className = "",
  plumes = 3,
  tint = "#efe7da",
  tint2,
}: {
  className?: string
  plumes?: number
  tint?: string
  tint2?: string
}) {
  const uid = useId().replace(/:/g, "")

  return (
    <svg
      className={className}
      viewBox="0 0 400 700"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <filter id={`smoke-turb-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.010 0.028"
            numOctaves="4"
            seed="7"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="34s"
              values="0.010 0.028;0.014 0.022;0.009 0.031;0.010 0.028"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="110" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="2.5" />
        </filter>

        <radialGradient id={`smoke-grad-${uid}`} cx="50%" cy="100%" r="75%">
          <stop offset="0%" stopColor={tint} stopOpacity="0.95" />
          <stop offset="50%" stopColor={tint} stopOpacity="0.65" />
          <stop offset="100%" stopColor={tint} stopOpacity="0" />
        </radialGradient>

        {tint2 && (
          <radialGradient id={`smoke-grad2-${uid}`} cx="50%" cy="100%" r="75%">
            <stop offset="0%" stopColor={tint2} stopOpacity="0.85" />
            <stop offset="50%" stopColor={tint2} stopOpacity="0.55" />
            <stop offset="100%" stopColor={tint2} stopOpacity="0" />
          </radialGradient>
        )}
      </defs>

      <g filter={`url(#smoke-turb-${uid})`}>
        {Array.from({ length: plumes }).map((_, i) => {
          const cx = 120 + i * (160 / Math.max(1, plumes - 1)) + (i % 2 === 0 ? -20 : 20)
          const dur = 34 + i * 9
          const delay = i * 6
          const useSecondTint = tint2 && i % 2 === 1
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={640 - i * 30}
              rx={82 + i * 14}
              ry={290 + i * 45}
              fill={`url(#${useSecondTint ? `smoke-grad2-${uid}` : `smoke-grad-${uid}`})`}
              style={{
                transformOrigin: `${cx}px 640px`,
                willChange: "transform, opacity",
                animation: `smoke-rise-${uid} ${dur}s ease-in-out ${delay}s infinite`,
              }}
            />
          )
        })}
      </g>

      <style>
        {`
          @keyframes smoke-rise-${uid} {
            0%   { transform: translateY(0) scaleY(0.85) scaleX(0.9); opacity: 0; }
            18%  { opacity: 0.85; }
            75%  { transform: translateY(-330px) scaleY(1.35) scaleX(1.25); opacity: 0.5; }
            100% { transform: translateY(-480px) scaleY(1.5) scaleX(1.4); opacity: 0; }
          }
        `}
      </style>
    </svg>
  )
}
