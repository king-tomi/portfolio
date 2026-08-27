"use client"

import { motion, useReducedMotion } from "framer-motion"

interface SectionHeadingProps {
  children: string
  eyebrow?: string
  align?: "center" | "left"
  className?: string
}

export default function SectionHeading({
  children,
  eyebrow,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const reduce = useReducedMotion()
  const words = children.split(" ")
  const marginClass = /\bmb-/.test(className) ? "" : "mb-10"

  return (
    <div
      className={`${marginClass} flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {eyebrow}
        </motion.span>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {words.map((word, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.05em] align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? { opacity: 0 } : { y: "110%" }}
              whileInView={reduce ? { opacity: 1 } : { y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`mt-4 block h-1 w-24 origin-left rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  )
}
