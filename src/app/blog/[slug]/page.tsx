"use client"

import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "functions-and-functional-programming-in-python": {
      title: "Functions and Functional Programming in Python",
      excerpt:
        "A deep dive into Functional Programming in Python, covering concepts like first-class functions, higher-order functions, and lambda expressions.",
      date: "October 8, 2020",
      content: `
        <p>A deep dive into Functional Programming in Python, covering concepts like first-class functions, higher-order functions, and lambda expressions.</p>
        
        <h2>First-Class Functions</h2>
        <p>In Python, functions are first-class citizens, which means they can be:</p>
        <ul>
          <li>Assigned to variables</li>
          <li>Passed as arguments to other functions</li>
          <li>Returned from other functions</li>
          <li>Stored in data structures like lists and dictionaries</li>
        </ul>
        
        <h2>Higher-Order Functions</h2>
        <p>Higher-order functions are functions that can:</p>
        <ul>
          <li>Accept other functions as arguments</li>
          <li>Return functions as results</li>
        </ul>
        <p>Common examples in Python include map(), filter(), and reduce().</p>
        
        <h2>Lambda Expressions</h2>
        <p>Lambda expressions allow you to create anonymous functions inline:</p>
        <pre><code>
# Regular function
def add(x, y):
    return x + y

# Equivalent lambda function
add = lambda x, y: x + y
        </code></pre>
        
        <h2>Functional Programming Concepts</h2>
        <p>Key concepts in functional programming include:</p>
        <ul>
          <li>Pure functions: Functions without side effects</li>
          <li>Immutability: Not modifying data after it's created</li>
          <li>Function composition: Building complex functions from simpler ones</li>
          <li>Recursion: Functions that call themselves</li>
        </ul>
        
        <h2>Functional Programming in Python</h2>
        <p>Python supports functional programming paradigms through:</p>
        <ul>
          <li>Built-in functions like map(), filter(), and reduce()</li>
          <li>List, dictionary, and set comprehensions</li>
          <li>Generator expressions</li>
          <li>The functools and itertools modules</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>While Python is not a purely functional language, it provides many tools and features that support functional programming paradigms, making it a versatile language for different programming styles.</p>
      `,
      imageUrl: "/images/blog/functional.webp",
      tags: ["Python", "Functions", "Programming"],
      externalUrl:
        "https://medium.com/@ayodabooluwatomisin/functions-and-functional-programming-in-python-d7e1a53dda95",
    },
    "oop-in-python-series-i": {
      title: "Object Oriented Programming in Python Series I",
      excerpt:
        "Exploring Objected Oriented Programming in Python, covering concepts like classes, objects, inheritance, and polymorphism.",
      date: "April 29, 2021",
      content: `
        <p>Exploring Objected Oriented Programming in Python, covering concepts like classes, objects, inheritance, and polymorphism.</p>
        
        <h2>Introduction to OOP</h2>
        <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (attributes), and code in the form of procedures (methods).</p>
        
        <h2>Classes and Objects</h2>
        <p>A class is a blueprint for creating objects:</p>
        <pre><code>
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    # Initializer / Constructor
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age    # Instance attribute
    
    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"
    
    # Instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

# Creating objects from the Dog class
buddy = Dog("Buddy", 9)
miles = Dog("Miles", 4)
        </code></pre>
        
        <h2>Inheritance</h2>
        <p>Inheritance allows a class to inherit attributes and methods from another class:</p>
        <pre><code>
class JackRussellTerrier(Dog):
    def speak(self, sound="Arf"):
        return super().speak(sound)
        
class Bulldog(Dog):
    def speak(self, sound="Woof"):
        return super().speak(sound)
        </code></pre>
        
        <h2>Encapsulation</h2>
        <p>Encapsulation is the bundling of data and methods that work on that data within a single unit (class).</p>
        <p>Python uses naming conventions to indicate the intended visibility of class attributes and methods:</p>
        <ul>
          <li>No prefix: Public</li>
          <li>Single underscore (_): Protected (convention only)</li>
          <li>Double underscore (__): Private (name mangling)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>This article covered the basics of Object-Oriented Programming in Python, including classes, objects, inheritance, and encapsulation. In the next part of this series, we'll explore more advanced OOP concepts in Python.</p>
      `,
      imageUrl: "/images/blog/oopI.webp",
      tags: ["OOP", "Class", "Python"],
      externalUrl: "https://medium.com/star-gazers/object-oriented-programming-in-python-series-94d80cdd805f",
    },
    "oop-in-python-series-ii": {
      title: "Object Oriented Programming in Python Series II",
      excerpt:
        "A further dive into Objected Oriented Programming, covering concepts like instance methods, class methods, static methods, polymorphism and composition.",
      date: "February 10, 2023",
      content: `
        <p>A further dive into Objected Oriented Programming, covering concepts like instance methods, class methods, static methods, polymorphism and composition.</p>
        
        <h2>Types of Methods in Python Classes</h2>
        <p>Python classes can have three types of methods:</p>
        
        <h3>Instance Methods</h3>
        <p>Instance methods are the most common type of methods in Python classes. They take self as the first parameter, which points to an instance of the class when the method is called:</p>
        <pre><code>
def description(self):
    return f"{self.name} is {self.age} years old"
        </code></pre>
        
        <h3>Class Methods</h3>
        <p>Class methods take cls as the first parameter, which points to the class itself. They are decorated with @classmethod:</p>
        <pre><code>
@classmethod
def from_birth_year(cls, name, birth_year):
    age = datetime.datetime.now().year - birth_year
    return cls(name, age)
        </code></pre>
        
        <h3>Static Methods</h3>
        <p>Static methods don't take self or cls parameters. They are decorated with @staticmethod:</p>
        <pre><code>
@staticmethod
def is_adult(age):
    return age >= 18
        </code></pre>
        
        <h2>Polymorphism</h2>
        <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass. It's often achieved through method overriding:</p>
        <pre><code>
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

def animal_sound(animal):
    return animal.speak()

dog = Dog()
cat = Cat()

print(animal_sound(dog))  # Output: Woof!
print(animal_sound(cat))  # Output: Meow!
        </code></pre>
        
        <h2>Composition</h2>
        <p>Composition is a design principle that states that classes should achieve polymorphic behavior and code reuse by their composition rather than inheritance:</p>
        <pre><code>
class Engine:
    def start(self):
        return "Engine started"
    
    def stop(self):
        return "Engine stopped"

class Car:
    def __init__(self):
        self.engine = Engine()
    
    def start(self):
        return self.engine.start()
    
    def stop(self):
        return self.engine.stop()
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>This article covered more advanced OOP concepts in Python, including different types of methods, polymorphism, and composition. Understanding these concepts will help you write more maintainable and flexible Python code.</p>
      `,
      imageUrl: "/images/blog/oopII.webp",
      tags: ["OOP", "Class", "Python"],
      externalUrl: "https://medium.com/@ayodabooluwatomisin/object-oriented-programming-in-python-series-a31256768bfd",
    },
  }

  return (
    posts[slug as keyof typeof posts] || {
      title: "Post Not Found",
      date: "",
      excerpt: "",
      content: "<p>The requested blog post could not be found.</p>",
      imageUrl: "/placeholder.svg?height=400&width=800",
      tags: [],
      externalUrl: "",
    }
  )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  return (
    <main className="min-h-screen py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>

          <div className="flex items-center text-muted-foreground mb-6">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{post.date}</span>
          </div>

          {post.imageUrl && (
            <img
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-8 object-cover aspect-video"
            />
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {post.externalUrl ? (
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                This article is available on an external site. Click the link below to read the full article.
              </p>
              <Link
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Read Full Article
              </Link>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </article>
      </div>
    </main>
  )
}