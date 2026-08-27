"use client"

import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Lock } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  highlights?: string[]
  githubUrl?: string
  liveUrl?: string
  /** Client / proprietary work — renders a "Private" badge instead of repo links */
  isPrivate?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  highlights = [],
  githubUrl,
  liveUrl,
  isPrivate = false,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const hasLinks = Boolean(githubUrl || liveUrl)

  // pointer position for spotlight
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  // tilt
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${px}% ${py}%, hsl(var(--primary) / 0.15), transparent 70%)`

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    px.set(relX * 100)
    py.set(relY * 100)
    if (!reduce) {
      rx.set((0.5 - relY) * 8)
      ry.set((relX - 0.5) * 8)
    }
  }

  const onLeave = () => {
    setHovered(false)
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative h-full [transform-style:preserve-3d]"
    >
      {/* gradient glow border on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-pink-500/50 via-purple-500/50 to-cyan-500/50 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

      <Card className="relative flex h-full flex-col overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl">
        {/* spotlight overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative h-44 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            animate={{ scale: hovered && !reduce ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        </div>

        <CardHeader>
          <CardTitle className="leading-snug">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow space-y-4">
          {highlights.length > 0 && (
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {highlights.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-2">
          {isPrivate && !hasLinks ? (
            <span className="inline-flex items-center text-xs font-medium text-muted-foreground">
              <Lock className="mr-2 h-3.5 w-3.5" />
              Private / client work
            </span>
          ) : (
            <>
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button size="sm" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </a>
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
