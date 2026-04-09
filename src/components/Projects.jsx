import { useState, useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'GemSpot',
    description:
      'A cross-platform mobile app built with React Native & Firebase that connects viewers with small YouTube creators (under 50K subscribers). Community-powered leaderboards, upvoting, and creator analytics.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'YouTube API', 'Context API'],
    category: 'Mobile App',
    github: 'https://github.com/srishtiraj22/GemSpot',
    emoji: '💎',
    color: 'var(--violet-400)',
  },
  {
    id: 2,
    title: 'AuthenticEye',
    description:
      'An AI-powered web application that analyses product reviews and detects whether a review is genuine or potentially fake using Google Gemini AI for intelligent authenticity insights.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Google Gemini API'],
    category: 'Web App',
    github: 'https://github.com/srishtiraj22/AuthenticEye',
    emoji: '🔍',
    color: 'var(--cyan-400)',
  },
  {
    id: 3,
    title: 'Vulnerability Scanner',
    description:
      'A security tool that scans source code for common vulnerabilities and uses Google Gemini API to provide concise explanations and immediate resolution steps — going beyond simple issue detection.',
    tech: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Google Gemini API'],
    category: 'Web App',
    github: 'https://github.com/srishtiraj22/website-vulnerability-scanner',
    emoji: '🛡️',
    color: 'var(--emerald-400)',
  },
  {
    id: 4,
    title: 'Finance Dashboard',
    description:
      'A modern personal finance dashboard to track transactions, visualise spending with interactive charts, manage budgets, and gain financial insights — all on the frontend with persistent local storage.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'Recharts'],
    category: 'Web App',
    github: 'https://github.com/srishtiraj22/my-financial-hub',
    emoji: '📊',
    color: 'var(--amber-400)',
  },
]

const categories = ['All', 'Web App', 'Mobile App']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('projects--visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Projects</span>
          <h2 className="section-title">
            Things I've <span className="highlight">Built</span>
          </h2>
        </div>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <div
              className="projects__card"
              key={project.id}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="projects__card-header">
                <span className="projects__card-emoji" style={{ background: `${project.color}22` }}>
                  {project.emoji}
                </span>
                <span className="projects__card-category">{project.category}</span>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span className="projects__tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="projects__card-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                  id={`github-${project.id}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              </div>

              {/* Hover glow effect */}
              <div
                className="projects__card-glow"
                style={{ background: project.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
