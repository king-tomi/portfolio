"use client"

const ITEMS = [
  "Python",
  "FastAPI",
  "Apache Airflow",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Pinecone",
  "RAG",
  "Celery",
  "RabbitMQ",
  "Metabase",
  "Docker",
  "NestJS",
  "PostGIS",
  "TypeScript",
]

export default function TechMarquee() {
  return (
    <div className="relative flex overflow-hidden border-y bg-muted/20 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
