"use client"

import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FeaturedBlogs() {
  // This would typically come from a CMS or database
  const featuredPosts = [
    {
      title: "Functions and Functional Programming in Python",
      excerpt:
        "A deep dive into Functional Prograaming in Python, covering concepts like first-class functions, higher-order functions, and lambda expressions.",
      date: "October 8, 2020",
      imageUrl: "/images/blog/functional.webp?height=200&width=400",
      externalUrl: "https://medium.com/@ayodabooluwatomisin/functions-and-functional-programming-in-python-d7e1a53dda95",
      slug: "functions-and-functional-programming-in-python",

      tags: ["Python", "Functions", "Programming"],
    },
    {
      title: "Object Oriented Programming in Python Series I",
      excerpt:
        "Exploring Objected Oriented Prograaming in Python, covering concepts like classes, objects, inheritance, and polymorphism.",
      date: "April 29, 2021",
      imageUrl: "/images/blog/oopI.webp?height=200&width=400",
      slug: "oop-in-python-series-i",
      externalUrl: "https://medium.com/star-gazers/object-oriented-programming-in-python-series-94d80cdd805f",
      tags: ["OOP", "Class", "Python"],
    },
    {
      title: "Object Oriented Programming in Python Series II",
      excerpt:
        "A further dive into Objected Oriented Programming, covering concepts like instance methods, class methods, static methods, polymorphism and compositon.",
      date: "February 10, 2023",
      imageUrl: "/images/blog/oopII.webp?height=200&width=400",
      slug: "oop-in-python-series-ii",
      externalUrl: "https://medium.com/@ayodabooluwatomisin/object-oriented-programming-in-python-series-a31256768bfd",
      tags: ["OOP", "Class", "Python"],
    },
  ]

  return (
    <section id="blog" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Thoughts, ideas, and insights on Python, AI Engineering, and API Development.
            </p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link href="/blog" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {featuredPosts.map((post, index) => (
            <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            imageUrl={post.imageUrl}
            slug={post.slug}
            externalUrl={post.externalUrl} // Pass the external URL
            tags={post.tags}
          />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
