import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import BlogCard from "@/components/blog-card"

export default function BlogPage() {
  // This would typically come from a CMS or database
  const blogPosts = [
    {
      title: "Functions and Functional Programming in Python",
      excerpt:
        "A deep dive into Functional Programming in Python, covering concepts like first-class functions, higher-order functions, and lambda expressions.",
      date: "October 8, 2020",
      imageUrl: "/images/blog/functional.webp",
      slug: "functions-and-functional-programming-in-python",
      externalUrl: "https://medium.com/@ayodabooluwatomisin/functions-and-functional-programming-in-python-d7e1a53dda95",
      tags: ["Python", "Functions", "Programming"],
    },
    {
      title: "Object Oriented Programming in Python Series I",
      excerpt:
        "Exploring Objected Oriented Programming in Python, covering concepts like classes, objects, inheritance, and polymorphism.",
      date: "April 29, 2021",
      imageUrl: "/images/blog/oopI.webp",
      slug: "oop-in-python-series-i",
      externalUrl: "https://medium.com/star-gazers/object-oriented-programming-in-python-series-94d80cdd805f",
      tags: ["OOP", "Class", "Python"],
    },
    {
      title: "Object Oriented Programming in Python Series II",
      excerpt:
        "A further dive into Objected Oriented Programming, covering concepts like instance methods, class methods, static methods, polymorphism and composition.",
      date: "February 10, 2023",
      imageUrl: "/images/blog/oopII.webp",
      slug: "oop-in-python-series-ii",
      externalUrl: "https://medium.com/@ayodabooluwatomisin/object-oriented-programming-in-python-series-a31256768bfd",
      tags: ["OOP", "Class", "Python"],
    },
    // Add more blog posts here
  ]

  return (
    <main className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4">My Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts, ideas, and insights on Python, AI Engineering, and API Development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageUrl={post.imageUrl}
              slug={post.slug}
              externalUrl={post.externalUrl}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </main>
  )
}