"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  distance?: number
  once?: boolean
  blur?: boolean
  as?: "div" | "section" | "li" | "span"
  /** "inView" (default) plays on scroll into view; "mount" plays immediately on load. */
  trigger?: "inView" | "mount"
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance }
    case "down":
      return { x: 0, y: -distance }
    case "left":
      return { x: distance, y: 0 }
    case "right":
      return { x: -distance, y: 0 }
    default:
      return { x: 0, y: 0 }
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  once = true,
  blur = true,
  as = "div",
  trigger = "inView",
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  const animationProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: { once, margin: "-80px" } }

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          filter: blur ? "blur(8px)" : "blur(0px)",
          ...offset(direction, distance),
        },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.2 : 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <MotionTag className={className} variants={variants} initial="hidden" {...animationProps}>
      {children}
    </MotionTag>
  )
}

/** Parent wrapper that staggers direct <Reveal> / motion children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Child item for use inside <RevealGroup>. */
export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 24,
  as = "div",
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  as?: "div" | "li" | "span"
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset(direction, distance), filter: "blur(6px)" },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: reduce ? 0.2 : 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}
