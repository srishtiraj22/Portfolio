import { useEffect, useRef } from 'react'
import './Education.css'

const timeline = [
  {
    type: 'education',
    title: 'B.Tech in CSE (IoT, Cybersecurity & Blockchain)',
    institution: 'Institute of Engineering & Management, Kolkata',
    period: '2023 – 2027',
    score: 'CGPA: 8.52',
    icon: '🎓',
    highlights: [
      'Specialisation in IoT, Cybersecurity & Blockchain Technology',
      'Building AI-powered web apps & cross-platform mobile apps',
      'Active contributor to team-based software projects',
    ],
  },
  {
    type: 'education',
    title: 'Senior Secondary (Class XII) — Science',
    institution: 'Banasthali Vidyapeeth, Rajasthan',
    period: '2021 – 2022',
    score: 'Percentage: 90.1%',
    icon: '📚',
    highlights: [
      'Science stream with strong academic performance',
      'Developed early interest in technology & programming',
    ],
  },
]

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('education--visible')
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="education section" id="education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Education</span>
          <h2 className="section-title">
            Academic <span className="highlight">Journey</span>
          </h2>
        </div>

        <div className="education__timeline">
          <div className="education__timeline-line" />
          {timeline.map((item, i) => (
            <div
              className="education__item"
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="education__item-dot">
                <span>{item.icon}</span>
              </div>
              <div className="education__item-card">
                <div className="education__item-header">
                  <div>
                    <h3 className="education__item-title">{item.title}</h3>
                    <p className="education__item-institution">{item.institution}</p>
                  </div>
                  <div className="education__item-meta">
                    <span className="education__item-period">{item.period}</span>
                    <span className="education__item-score">{item.score}</span>
                  </div>
                </div>
                <ul className="education__item-highlights">
                  {item.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
