import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText, Twitter, Phone } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import HeroParticles from "@/components/hero-particles"
import FeaturedBlogs from "@/components/featured-blogs"
import ThemeToggle from "@/components/theme-toggle"

export default function Portfolio() {
  // Google Drive resume link
  const resumeLink = "https://drive.google.com/file/d/1U6Y0SUmW8GSeuegT9foAVvsB0innZUb6/view?usp=drive_link"

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container px-4 md:px-6 flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-lg">
            Ayodabo Tomisin
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Skills
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section with Particles */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <HeroParticles />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Hello, I'm Ayodabo Tomisin Kolawole
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            AI and Backend Engineer. Creating Scalable AI applications and making magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:opacity-90"
            >
              Let's Connect
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowRight className="h-6 w-6 rotate-90" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
            <p className="text-lg">
              I'm a dedicated AI and backend engineer passionate about building intelligent systems and scalable infrastructures. I specialize in creating smart, efficient solutions that power modern applications behind the scenes.
            </p>
            <p className="text-lg">
              With expertise in Python, FastAPI, Node.js, and cloud services, I design and implement reliable backends, powerful APIs, and AI-driven features that help businesses innovate and grow faster.
            </p>
            <p className="text-lg">
              When I'm not architecting systems or training models, you can find me diving into the latest AI research, contributing to open-source projects, or experimenting with new technologies that push the boundaries of what's possible.
            </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden border shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10"></div>
              <img src="/portfolio_image.jpg?height=400&width=600" alt="Your Name" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Spanish La Liga Analysis"
              description="The Spanish La Liga is the football competition held in Spain among the top twenty clubs of the country who vye for the top team in the country by winning the trophy.
              From 2009/10 to 2015/16, La Liga was known as La Liga BBVA, as parts of a sponsorship deal with BBVA, a financial service providers headquartered in Spain. From there onwards, Santander, a Spanish group of companies focused also, on financial services."
              tags={["Python", "Pandas", "La Liga", "Football"]}
              imageUrl="/images/projects/LaLiga.jpg?height=300&width=400"
              githubUrl="https://github.com/king-tomi/Spanish-La-liga-Analysis"
            />
            <ProjectCard
              title="Automated Queuing System (AQS) for Banking Sector"
              description="An automatic system for managing user queues in banks. Built for United Bank of Africa (UBA)."
              tags={["React", "Django", "Full Stack", "Web"]}
              imageUrl="/images/projects/uba_queue.jpg?height=300&width=400"
              githubUrl="https://github.com/king-tomi/queuing_system"
            />
            <ProjectCard
              title="Lung Cancer Detection Application"
              description="An AI powered web app where users can upload medicaly scanned images of lungs and get diagnosis."
              tags={["AI", "Python", "Streamlit", "Tensorflow", "API"]}
              imageUrl="/images/projects/lung_cancer.jpg?height=300&width=400"
              githubUrl="https://github.com/king-tomi/lung_cancer_detection"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
          <SkillsSection />
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <FeaturedBlogs />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>ayodabooluwatomisin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+234 909 130-5248</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a href="https://www.linkedin.com/in/oluwatomisin-ayodabo-7b4b10169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:underline">
                    Oluwatomisin Ayodabo
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a href="https://github.com/king-tomi" className="hover:underline">
                    github.com/king-tomi
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ayodabo Tomisin. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/king-tomi"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ayodabo_tomisin"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2349091305248"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:ayodabooluwatomisin@gmail.com.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
