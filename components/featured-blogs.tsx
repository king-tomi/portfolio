"use client"

import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import SectionHeading from "@/components/motion/section-heading"

export default function FeaturedBlogs() {
  const featuredPosts = [
    {
      title: "Functions and Functional Programming in Python",
      excerpt:
        "A deep dive into Functional Programming in Python, covering concepts like first-class functions, higher-order functions, and lambda expressions.",
      date: "October 8, 2020",
      imageUrl: "/images/blog/functional.webp",
      externalUrl:
        "https://medium.com/@ayodabooluwatomisin/functions-and-functional-programming-in-python-d7e1a53dda95",
      slug: "functions-and-functional-programming-in-python",
      tags: ["Python", "Functions", "Programming"],
    },
    {
      title: "Object Oriented Programming in Python Series I",
      excerpt:
        "Exploring Object Oriented Programming in Python, covering concepts like classes, objects, inheritance, and polymorphism.",
      date: "April 29, 2021",
      imageUrl: "/images/blog/oopI.webp",
      slug: "oop-in-python-series-i",
      externalUrl: "https://medium.com/star-gazers/object-oriented-programming-in-python-series-94d80cdd805f",
      tags: ["OOP", "Class", "Python"],
    },
    {
      title: "Object Oriented Programming in Python Series II",
      excerpt:
        "A further dive into Object Oriented Programming, covering concepts like instance methods, class methods, static methods, polymorphism and composition.",
      date: "February 10, 2023",
      imageUrl: "/images/blog/oopII.webp",
      slug: "oop-in-python-series-ii",
      externalUrl: "https://medium.com/@ayodabooluwatomisin/object-oriented-programming-in-python-series-a31256768bfd",
      tags: ["OOP", "Class", "Python"],
    },
  ]

  return (
    <section id="blog" className="scroll-mt-24 py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionHeading eyebrow="Notes" align="left" className="mb-0">
              Writing
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Notes on Python, data and AI engineering, and building things that scale.
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/blog" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                slug={post.slug}
                externalUrl={post.externalUrl}
                tags={post.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
