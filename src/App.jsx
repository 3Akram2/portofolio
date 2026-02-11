import { useEffect } from 'react'

const projects = [
  {
    title: 'Journey — Hospitality Platform',
    points: [
      'Guest Insights pipeline + real-time delivery.',
      'Vertex AI Search structured discovery.',
      'Cloudflare image transformations + CDN optimization.'
    ]
  },
  {
    title: 'Ibtkaar — AI Knowledge Base Platform',
    points: [
      'NestJS middleware between frontend and AI services.',
      'KB schema + upload + RBAC/visibility controls.',
      'RabbitMQ-based service communication.'
    ]
  },
  {
    title: 'MyAtlas — Health/Wellness Platform',
    points: [
      'Wearable data normalization (Apple/WHOOP/Fitbit).',
      'Silent FCM background sync + secure mobile APIs.',
      'AWS CI/CD with GitHub Actions (OIDC).'
    ]
  },
  {
    title: 'Rentals Management System',
    points: [
      'Dockerized frontend/backend production deployment.',
      'HTTPS + reverse proxy + domain routing.',
      'Routing and stability fixes for reliable production behavior.'
    ]
  },
  {
    title: 'Self-Healers Circle — Social Platform',
    points: [
      'Posts/comments/reactions/privacy modules.',
      'Scheduled publishing with Lambda + EventBridge.',
      'Strapi backend workflow reliability improvements.'
    ]
  },
  {
    title: 'FounderBrand / Ascend Labs — Content Automation',
    points: [
      'Zoom transcript → editorial-ready LinkedIn drafts.',
      'Review/approval workflow for human-in-the-loop quality.',
      'Python + LangChain integrated with Strapi APIs.'
    ]
  }
]

const skills = [
  'Node.js','NestJS','Strapi v5','Express','Python','Java','PostgreSQL','Oracle SQL','BigQuery','Redis','RabbitMQ',
  'AWS Lambda','AWS EventBridge','S3/CloudFront','GCP Cloud Run','Docker','Kubernetes','GitHub Actions','Socket.IO','FCM','Vertex AI Search','Cloudflare CDN'
]

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <header className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Backend Software Engineer</p>
            <h1>Omar Akram Muhammad</h1>
            <p className="lead">
              Backend-focused engineer specializing in <strong>Node.js/NestJS</strong> and <strong>Strapi</strong> on AWS/GCP,
              building reliable, scalable APIs, data pipelines, and production cloud systems.
            </p>

            <div className="actions">
              <a className="btn primary" href="mailto:omarakram302@gmail.com">Contact Me</a>
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

      <main className="container stack">
        <section className="card reveal">
          <h2>Selected Projects</h2>
          <div className="projects">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <h3>{p.title}</h3>
                <ul>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card skills reveal">
          <h2>Skills & Technologies</h2>
          <div className="chips">
            {skills.map((s) => <span key={s}>{s}</span>)}
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
