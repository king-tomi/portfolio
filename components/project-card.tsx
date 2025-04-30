"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl = "#",
  liveUrl = "#",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={liveUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
