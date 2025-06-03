"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glow effect background */}
          <circle cx="24" cy="24" r="20" fill="url(#glowGradient)" />

          {/* Creative A - Mountain/Peak shape representing reliability */}
          <path d="M12 32 L24 12 L36 32 L32 32 L24 20 L16 32 Z" fill="url(#primaryGradient)" opacity="0.9" />

          {/* A crossbar - but as a floating element */}
          <rect x="18" y="24" width="12" height="2" rx="1" fill="currentColor" />

          {/* Creative S - Circuit/Wave pattern representing SRE/Tech */}
          <path
            d="M10 36 Q14 34 18 36 T26 36 Q30 38 34 36 T42 36"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* Tech dots - representing monitoring/systems */}
          <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="32" cy="16" r="1.5" fill="currentColor" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="24" cy="8" r="1" fill="currentColor" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Connection lines - representing network/infrastructure */}
          <path
            d="M16 16 L24 8 L32 16"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </motion.div>
  )
}
