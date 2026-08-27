"use client"

import { motion } from "framer-motion"

interface SkillGroup {
  category: string
  skills: string[]
}

const groups: SkillGroup[] = [
  {
    category: "Data Engineering",
    skills: [
      "ETL / ELT pipelines",
      "Apache Airflow",
      "Dimensional modelling",
      "PostgreSQL",
      "Data warehousing",
      "MongoDB",
      "Idempotent loads",
      "Data quality checks",
      "Metabase",
    ],
  },
  {
    category: "AI / ML Engineering",
    skills: [
      "RAG systems",
      "Vector databases (Pinecone)",
      "Embeddings & chunking",
      "Retrieval & ranking",
      "LLM orchestration",
      "Intent classification",
      "Prompt engineering",
      "Sentiment analysis",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Python",
      "FastAPI",
      "NestJS",
      "Django",
      "REST API design",
      "Celery / RabbitMQ",
      "Redis",
      "Transactional outbox",
      "Microservices",
    ],
  },
  {
    category: "Platform & Tooling",
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Git",
      "SQLAlchemy / TypeORM",
      "PostGIS",
      "OpenTelemetry / Prometheus",
    ],
  },
  {
    category: "Languages",
    skills: ["Python", "TypeScript / JavaScript", "SQL", "Go", "Java"],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function SkillsSection() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {groups.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />
            <h3 className="text-lg font-semibold">{group.category}</h3>
          </div>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.04 }}
                className="cursor-default rounded-full border bg-secondary/60 px-3 py-1 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
