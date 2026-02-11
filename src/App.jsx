import { useEffect, useMemo, useState } from 'react'

const projects = [
  {
    title: 'Rentals Management System',
    tag: 'SaaS • Real Estate',
    visual: 'RM',
    points: [
      'Built Dockerized frontend/backend architecture with production-ready networking.',
      'Set up reverse proxy + HTTPS domain routing for stable public access.',
      'Added deployment workflow for faster release cycles.'
    ],
    cta: 'View Architecture',
    href: 'https://github.com/3Akram2/rentals-v2'
  },
  {
    title: 'Journey — Hospitality Platform',
    tag: 'Data + Search',
    visual: 'JR',
    points: [
      'Guest insights pipeline with real-time delivery and reliable event flow.',
      'Implemented Vertex AI Search for structured discovery and retrieval quality.',
      'Optimized media delivery via Cloudflare image transformations + CDN tuning.'
    ]
  },
  {
    title: 'Ibtkaar — AI Knowledge Base',
    tag: 'Enterprise AI',
    visual: 'AI',
    points: [
      'Designed NestJS middleware between frontend and AI service layer.',
      'Built schema + upload + RBAC visibility controls for secure access.',
      'Enabled asynchronous service communication using RabbitMQ.'
    ]
  }
]

const skillGroups = {
  Frontend: ['React', 'Vite', 'CSS Animation', 'Responsive UI'],
  Backend: ['Node.js', 'NestJS', 'Strapi', 'Express', 'Python'],
  DevOps: ['Docker', 'GitHub Actions', 'AWS', 'GCP', 'Nginx', 'Caddy']
}

const timeline = [
  { year: '2026', title: 'Scaled Production Deployments', text: 'Built reliable deployment flows and production-grade routing for real products.' },
  { year: '2025', title: 'AI & Backend Systems', text: 'Delivered AI-powered backend services and robust data pipelines.' },
  { year: '2024', title: 'Cloud-Native Foundations', text: 'Focused on Docker, cloud services, and scalable API architecture.' }
]

const companies = [
  'Journey',
  'Ibtkaar',
  'MyAtlas',
  'Self-Healers Circle',
  'FounderBrand',
  'Ascend Labs'
]

const scheduleGmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=omarakram302@gmail.com&su=Portfolio%20Inquiry%20-%20Schedule%20a%20Call&body=Hi%20Omar%2C%0A%0AI%20would%20like%20to%20schedule%20a%20call.%0A%0APreferred%20date%2Ftime%3A%0ATimezone%3A%0AProject%20details%3A%0A'

const highlights = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Delivered', value: '6+' },
  { label: 'Core Focus', value: 'Backend + DevOps' }
]

const featureHighlights = [
  'Production-ready API architecture',
  'Cloud deployments with Docker and CI/CD',
  'AI integrations and data pipelines'
]

export default function App() {
  const [progress, setProgress] = useState(0)
  const [mouse, setMouse] = useState({ x: 70, y: 20 })

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))

    const onScroll = () => {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      const value = total > 0 ? (h.scrollTop / total) * 100 : 0
      setProgress(value)
    }

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMouse({ x, y })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    onScroll()

    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const skillItems = useMemo(() => Object.entries(skillGroups), [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="cursor-glow" style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }} />

      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <header className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Backend Software Engineer</p>
            <h1>Omar Akram Muhammad</h1>
            <p className="lead">
              I build scalable backend systems, production APIs, and cloud-ready deployments.
              Focused on <strong>Node.js/NestJS</strong>, <strong>Strapi</strong>, and reliable DevOps workflows.
            </p>

            <div className="experience-badge">2+ years of professional experience</div>

            <div className="actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="https://www.linkedin.com/in/3akram2" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="https://github.com/3akram2" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <ul className="meta">
              <li>📍 Alexandria, Egypt</li>
              <li>📞 (+20) 1211204194</li>
              <li>✉️ omarakram302@gmail.com</li>
            </ul>
          </div>

          <div className="photo-wrap reveal delay-1">
            <img src="/assets/profile.jpg" alt="Omar Akram" className="photo" />
          </div>
        </div>
      </header>

      <div className="section-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

      <main className="container stack">
        <section className="card reveal">
          <h2>Quick Highlights</h2>
          <div className="stats-grid">
            {highlights.map((item) => (
              <article key={item.label} className="stat-card">
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </article>
            ))}
          </div>
          <ul className="feature-list">
            {featureHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="card reveal">
          <h2>Selected Projects</h2>
          <div className="projects">
            {projects.map((p, idx) => (
              <article className="project-card" key={p.title} style={{ transitionDelay: `${idx * 60}ms` }}>
                <div className="project-visual">
                  <span>{p.visual}</span>
                  <small>{p.tag}</small>
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <ul>
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  {p.href ? (
                    <a className="project-link" href={p.href} target="_blank" rel="noreferrer">{p.cta}</a>
                  ) : (
                    <p className="project-note">Case study available on request.</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card reveal">
          <h2>Skills & Technologies</h2>
          <div className="skills-groups">
            {skillItems.map(([group, list]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="chips">
                  {list.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card reveal">
          <h2>Companies & Products I’ve Worked On</h2>
          <div className="company-grid">
            {companies.map((company) => (
              <span key={company} className="company-chip">{company}</span>
            ))}
          </div>
        </section>

        <section className="card reveal timeline-card">
          <h2>Journey</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.year + item.title} className="timeline-item">
                <span className="dot" />
                <div>
                  <p className="year">{item.year}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-cta reveal">
          <p>Let’s build something powerful together.</p>
          <div className="cta-actions">
            <a className="btn primary" href={scheduleGmailUrl} target="_blank" rel="noreferrer">Start a Conversation</a>
            <a className="btn" href="https://www.linkedin.com/in/3akram2" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="https://github.com/3akram2" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Omar Akram Muhammad</p>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </>
  )
}
