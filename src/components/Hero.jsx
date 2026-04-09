import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      el.classList.add('hero--visible')
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Srishti Raj</span>
          </h1>

          <p className="hero__tagline">
            Full Stack Developer & AI Enthusiast
          </p>

          <p className="hero__description">
            I build intelligent, user-centric digital products — from AI-powered web apps
            to cross-platform mobile experiences. Passionate about turning complex problems
            into elegant, intuitive solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in Touch
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">4+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">AI Projects</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img
                src="/profile.png"
                alt="Srishti Raj"
                className="hero__avatar-img"
              />
            </div>
            {/* Floating tech badges */}
            <div className="hero__float-badge hero__float-badge--1">⚛️ React</div>
            <div className="hero__float-badge hero__float-badge--2">🔥 Firebase</div>
            <div className="hero__float-badge hero__float-badge--3">🤖 AI/ML</div>
            <div className="hero__float-badge hero__float-badge--4">📱 Mobile</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
