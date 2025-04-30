"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  imageUrl: string
  slug: string
  externalUrl?: string // Add this new prop
  tags?: string[]
}

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  imageUrl, 
  slug, 
  externalUrl, // Accept the new prop
  tags = [] 
}: BlogCardProps) {
  // Determine if we should use an external link
  const linkProps = externalUrl 
    ? { 
        href: externalUrl,
        target: "_blank",
        rel: "noopener noreferrer" 
      } 
    : { 
        href: `/blog/${slug}` 
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link {...linkProps} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer">
          <div className="relative overflow-hidden h-48">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {externalUrl && (
              <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-full">
                <ExternalLink className="h-4 w-4" />
              </div>
            )}
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {title}
              {externalUrl && <ExternalLink className="inline-block ml-2 h-4 w-4" />}
            </h3>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          </CardContent>
          {tags.length > 0 && (
            <CardFooter className="pt-0">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          )}
        </Card>
      </Link>
    </motion.div>
  )
}