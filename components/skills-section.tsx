"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "Django", level: 85, color: "bg-blue-600" },
    { name: "FastAPI", level: 95, color: "bg-orange-500" },
    { name: "Go", level: 75, color: "bg-red-800" },
    { name: "Java", level: 75, color: "bg-red-500" },
    { name: "Data Engineering", level: 85, color: "bg-indigo-500" },
    { name: "AI Engineering", level: 95, color: "bg-cyan-500" },
    { name: "API Engineering", level: 90, color: "bg-purple-500" },
    { name: "Web Development", level: 70, color: "bg-green-600" },
    { name: "Data Visualization", level: 95, color: "bg-green-500" },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{skill.name}</h3>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${skill.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
