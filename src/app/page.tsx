import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText, Twitter, Phone } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import HeroParticles from "@/components/hero-particles"
import FeaturedBlogs from "@/components/featured-blogs"
import SiteHeader from "@/components/site-header"
import TechMarquee from "@/components/tech-marquee"
import SectionHeading from "@/components/motion/section-heading"
import WordRotate from "@/components/motion/word-rotate"
import Magnetic from "@/components/motion/magnetic"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

const projects = [
  {
    title: "Dual-Product Analytics Platform",
    description:
      "ETL platform that turns three operational stores into a governed analytics warehouse feeding self-serve dashboards for a two-product SaaS pilot.",
    highlights: [
      "Extracts from two PostgreSQL databases and a MongoDB cluster into a dedicated Postgres warehouse",
      "Apache Airflow (TaskFlow API), four scheduled DAGs, fully idempotent ON CONFLICT upserts",
      "Once-daily LLM sentiment pass over new reviews and support tickets",
      "0–100 weekly engagement score per organization with at-risk and conversion-ready detection",
    ],
    tags: ["Airflow", "PostgreSQL", "MongoDB", "Python", "ETL", "Metabase"],
    imageUrl: "/images/projects/analytics-platform.svg",
  },
  {
    title: "LLM-Augmented Recommendation & Ranking System",
    description:
      "A cache-first personalized feed built from deterministic candidate retrieval and a multi-signal ranker, with the LLM confined to conversation.",
    highlights: [
      "Candidate retrieval plus a multi-signal ranker produce a reproducible feed served from Redis",
      "Every conversation and booking writes signals that recompute the feed in the background",
      "LLM operates only on pre-ranked candidates — it cannot invent items or IDs",
      "24h rolling chat sessions with Redis + Postgres dual-write and context recovery on cache eviction",
    ],
    tags: ["Python", "FastAPI", "Redis", "Ranking", "LLM", "Celery"],
    imageUrl: "/images/projects/recommendation-ranking.svg",
  },
  {
    title: "Multi-Tenant RAG Data Infrastructure",
    description:
      "The ingestion and vector layer for a B2B platform where each tenant gets an isolated, subscription-tiered retrieval stack.",
    highlights: [
      "Ingestion pipeline for CSV, JSON, TXT, DOCX and PDF: parsing, chunking, embedding",
      "Per-tenant isolated vector indexes in Pinecone with a failover vector store",
      "Three subscription-tiered embedding models (768 and 1024 dim) with canonical-dimension handling",
      "Build-time prototype-embedding intent classification precomputed into a shipped artifact",
    ],
    tags: ["Pinecone", "Embeddings", "RAG", "FastAPI", "MongoDB", "Multi-tenant"],
    imageUrl: "/images/projects/rag-infrastructure.svg",
  },
  {
    title: "ERP Data Architecture",
    description:
      "The foundational data-model specification for a modular ERP designed to grow module-by-module without re-architecting each time.",
    highlights: [
      "Two-tier tenancy (Organization → Tenant) separating the billing relationship from the operating entity",
      "Modules as data-driven entitlements, per-tenant and per-module RBAC",
      "One shared audit ledger with before/after JSONB instead of per-table history",
      "Polymorphic attachments, field-level sensitivity, and effective-dated status changes as primitives",
    ],
    tags: ["Data Modelling", "PostgreSQL", "Multi-tenant", "RBAC", "Architecture"],
    imageUrl: "/images/projects/erp-data-architecture.svg",
  },
  {
    title: "Configuration-Driven Academic Records Pipeline",
    description:
      "A digital result-processing pipeline moving student records through a multi-level approval chain, deployed to a pilot of 81 schools.",
    highlights: [
      "Result flow across teacher → principal → district → state board with full audit trails",
      "Offline-first capture with automatic sync when connectivity returns",
      "Configuration-driven so one codebase serves different education systems with no code changes",
      "REST API surface for integration with existing school and government systems",
    ],
    tags: ["Python", "PostgreSQL", "Offline-first", "Workflow", "REST API"],
    imageUrl: "/images/projects/academic-records-pipeline.svg",
  },
  {
    title: "Legacy Grants Data Migration",
    description:
      "Airflow-orchestrated migration of a government agency's legacy grants management system into a refactored platform.",
    highlights: [
      "Airflow DAGs coordinating extraction, transformation and load from legacy sources",
      "Reconciliation and data-quality checks to prove parity between old and new systems",
      "Repeatable, resumable migration runs rather than one-shot scripts",
    ],
    tags: ["Airflow", "Python", "Data Migration", "ETL", "Reconciliation"],
    imageUrl: "/images/projects/grants-migration.svg",
  },
]

export default function Portfolio() {
  const resumeLink = "https://docs.google.com/document/d/1ZL8pj0Afes6_31PEjHUvjVLrPIBL8DVT/export?format=pdf"
  const linkedInUrl =
    "https://www.linkedin.com/in/oluwatomisin-ayodabo-7b4b10169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  const contactEmail = "ayodabooluwatomisin@gmail.com"

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden pt-16">
        <div className="aurora" />
        <div className="absolute inset-0 bg-grid" />
        <HeroParticles />

        <div className="container relative z-10 px-4 text-center md:px-6">
          <Reveal direction="none" blur delay={0.1} trigger="mount">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to data &amp; AI engineering work
            </span>
          </Reveal>

          <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-6xl">
            <Reveal direction="up" delay={0.15} trigger="mount">
              <span className="text-gradient">Ayodabo Tomisin Kolawole</span>
            </Reveal>
          </h1>

          <Reveal direction="up" delay={0.28} trigger="mount">
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
              Data &amp; AI Engineer. I build{" "}
              <WordRotate
                className="font-semibold text-foreground"
                words={[
                  "ETL pipelines",
                  "analytics warehouses",
                  "ranking systems",
                  "RAG infrastructure",
                  "data platforms",
                ]}
              />{" "}
              that turn raw product data into decisions and intelligent features.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4} trigger="mount">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Magnetic>
                <Link
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/70 px-8 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 text-sm font-medium text-white shadow transition-opacity hover:opacity-90"
                >
                  Let's Connect
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex animate-bounce justify-center">
          <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
            <ArrowRight className="h-6 w-6 rotate-90" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </section>

      <TechMarquee />

      {/* About */}
      <section id="about" className="scroll-mt-24 relative overflow-hidden bg-muted/30 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading eyebrow="Background">About Me</SectionHeading>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <RevealGroup className="space-y-4">
              <RevealItem className="text-lg">
                I'm a data and AI engineer. Most of my work sits between the operational database and the
                people who need to act on what's in it: ETL and ELT pipelines, analytics warehouses,
                engagement scoring, and the retrieval-and-ranking systems behind recommendation feeds and
                RAG assistants.
              </RevealItem>
              <RevealItem className="text-lg">
                I've co-authored the data and analytics specs for a two-product pilot, designed the
                foundational data architecture for a modular ERP, and built multi-tenant vector
                infrastructure for a RAG platform. I care about pipelines that are idempotent, observable,
                and auditable rather than clever.
              </RevealItem>
              <RevealItem className="text-lg">
                My toolkit is Python, FastAPI, Airflow, PostgreSQL, MongoDB, Redis, and the usual
                vector-database and LLM-orchestration stack. When I'm not modelling data I'm reading about
                how other teams model theirs.
              </RevealItem>
            </RevealGroup>

            <Reveal direction="left" delay={0.1}>
              <div className="group relative h-80 overflow-hidden rounded-2xl border shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="absolute -inset-10 -z-10 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-2xl" />
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
                <img
                  src="/portfolio_image.jpg"
                  alt="Ayodabo Tomisin"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading eyebrow="Selected work">Featured Projects</SectionHeading>
          <Reveal direction="up">
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Six data-intensive systems. Most are proprietary or client work, so the write-ups describe
              the architecture and the outcome rather than linking source.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} isPrivate />
            ))}
          </div>

          <Reveal direction="up">
            <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted-foreground">
              Other work: travel-marketplace microservices (PostGIS catalog, transactional-outbox event
              flow, reconciliation ledgers), an{" "}
              <a
                href="https://github.com/youtonext/ai-provider-comparator"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                AI provider comparator
              </a>{" "}
              with semantic and factual-conflict analysis, and a{" "}
              <a
                href="https://github.com/youtonext/mushroom"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                multi-source agentic research tool
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 relative overflow-hidden bg-muted/30 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading eyebrow="Toolkit">Skills</SectionHeading>
          <SkillsSection />
        </div>
      </section>

      {/* Writing */}
      <FeaturedBlogs />

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading eyebrow="Say hello">Get In Touch</SectionHeading>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <RevealGroup className="space-y-6">
              <RevealItem className="text-lg">
                I'm open to discussing data platform work, analytics engineering, and AI/RAG systems.
              </RevealItem>
              <RevealItem>
                <div className="space-y-4">
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 hover:underline">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{contactEmail}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+234 909 130 5248</span>
                  </div>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <span>Oluwatomisin Ayodabo</span>
                  </a>
                  <a
                    href="https://github.com/king-tomi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <span>github.com/king-tomi</span>
                  </a>
                </div>
              </RevealItem>
            </RevealGroup>

            <Reveal direction="left" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ayodabo Tomisin. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/king-tomi", label: "GitHub", Icon: Github },
                { href: linkedInUrl, label: "LinkedIn", Icon: Linkedin },
                { href: "https://twitter.com/ayodabo_tomisin", label: "Twitter", Icon: Twitter },
                { href: "https://wa.me/2349091305248", label: "WhatsApp", Icon: Phone },
                { href: `mailto:${contactEmail}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
