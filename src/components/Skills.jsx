import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C++', 'C', 'Java'],
  },
  {
    title: 'Core CS',
    icon: '🧠',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating System', 'Computer Networks'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'React / Next.js'],
  },
  {
    title: 'Backend',
    icon: '☁️',
    skills: ['Firebase', 'Firestore', 'REST API'],
  },
  {
    title: 'Generative AI / Agentic AI',
    icon: '🤖',
    skills: ['LangChain', 'LangGraph', 'LLM Integration', 'RAG'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Expo', 'VS Code'],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skills--visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills</span>
          <h2 className="section-title">
            My <span className="highlight">Tech Stack</span>
          </h2>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              className="skills__category"
              key={cat.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{cat.icon}</span>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
