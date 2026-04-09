import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about--visible')
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">
            Turning Ideas into <span className="highlight">Digital Reality</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__intro">
              I'm <strong>Srishti Raj</strong>, a passionate Computer Science student at the
              Institute of Engineering & Management, Kolkata, specialising in IoT, Cybersecurity
              and Blockchain Technology. I love building products that sit at the
              intersection of <span className="gradient-text">great design</span> and{' '}
              <span className="gradient-text">intelligent technology</span>.
            </p>
            <p>
              From developing community-driven mobile platforms with React Native & Firebase
              to crafting AI-powered web applications using Google Gemini, I'm always exploring
              how modern technologies can solve real-world problems. I believe in writing clean,
              maintainable code and creating experiences that delight users.
            </p>
            <p>
              When I'm not coding, I'm diving into new tech stacks, contributing to team projects,
              or exploring cybersecurity concepts. My goal is to grow as a full-stack developer
              who can bridge the gap between innovative AI capabilities and intuitive user interfaces.
            </p>

            <div className="about__highlights">
              <div className="about__highlight-item">
                <div className="about__highlight-icon">🎯</div>
                <div>
                  <strong>Focus</strong>
                  <span>Full Stack + AI Development</span>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">📍</div>
                <div>
                  <strong>Location</strong>
                  <span>Kolkata, India</span>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">🎓</div>
                <div>
                  <strong>Education</strong>
                  <span>B.Tech CSE (2023 – 2027)</span>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">💡</div>
                <div>
                  <strong>Interests</strong>
                  <span>AI, Mobile, Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__card">
            <div className="about__code-window">
              <div className="about__code-dots">
                <span /><span /><span />
              </div>
              <div className="about__code-title">about.ts</div>
            </div>
            <pre className="about__code">
              {`const srishti = {
  pronouns: "she/her",
  role: "Full Stack Developer",
  education: {
    degree: "B.Tech CSE",
    college: "IEM, Kolkata",
    cgpa: 8.52
  },
  currentlyLearning: [
    "Full Stack",
    "Data Sturucture & algorithm",
    "System Design"
  ],
  passions: [
    "Building AI apps",
    "Mobile development",
    "Clean UI/UX"
  ],
  funFact: "I turn ☕ into 💻"
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
