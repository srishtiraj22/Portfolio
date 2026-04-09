import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 88 },
      { name: 'React Native', level: 82 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    title: 'Backend & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Firebase', level: 85 },
      { name: 'Firestore', level: 80 },
      { name: 'Firebase Auth', level: 82 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    title: 'AI & APIs',
    icon: '🤖',
    skills: [
      { name: 'Google Gemini API', level: 80 },
      { name: 'YouTube Data API', level: 75 },
      { name: 'NLP Concepts', level: 70 },
      { name: 'Prompt Engineering', level: 78 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Expo', level: 82 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
    ],
  },
  {
    title: 'Concepts',
    icon: '🧠',
    skills: [
      { name: 'Responsive Design', level: 90 },
      { name: 'State Management', level: 85 },
      { name: 'Component Architecture', level: 85 },
      { name: 'Cybersecurity', level: 72 },
    ],
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
              <div className="skills__list">
                {cat.skills.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <div className="skills__item-info">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ '--fill-width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
