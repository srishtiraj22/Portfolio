import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-icon">SR</span>
              <span className="footer__logo-text">Srishti<span className="gradient-text">.</span></span>
            </a>
            <p className="footer__tagline">
              Full Stack Developer & AI Enthusiast — building intelligent digital experiences.
            </p>
          </div>

          <div className="footer__links-group">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__links-group">
            <h4>Socials</h4>
            <a href="https://github.com/srishtiraj22" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/srishti-raj-0a185120b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:srishti78900@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>© {year} Srishti Raj. Crafted with 💙 and React.</p>
          <p className="footer__credit">Designed & Built by Srishti Raj</p>
        </div>
      </div>
    </footer>
  )
}
