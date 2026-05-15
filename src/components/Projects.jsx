import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Vaani Seva',
    description:
      'An ML pipeline matching rural Indian citizens to government schemes across 9 regional languages. XGBoost + SMOTE + Bayesian hyperparameter tuning, with SHAP per-prediction explainability and Google Speech-to-Text voice input to eliminate literacy barriers.',
    tech: ['Flask', 'XGBoost', 'SHAP', 'Gemini 2.5', 'Speech-to-Text'],
    live: 'https://vaaniseva.vercel.app/',
    github: 'https://github.com/amanshekhar0/hack2skill',
    code: `from xgboost import XGBClassifier\nfrom shap import Explainer\n\nmodel = XGBClassifier()\nmodel.fit(X_train, y_train)\nexplainer = Explainer(model)\nshap_values = explainer(X_test)`,
  },
  {
    title: 'FinSentinel',
    description:
      'Stacked ensemble (XGBoost + LightGBM + Random Forest) for real-time financial fraud detection on heavily imbalanced data. LangChain RAG pipeline generates context-aware fraud explanations. Async FastAPI backend with a React analyst dashboard for live scoring.',
    tech: ['XGBoost', 'LightGBM', 'LangChain', 'FastAPI', 'React.js'],
    github: 'https://github.com/sadhuram09/career-advisor-ai-agent',
    inDevelopment: true,
    code: `@app.post("/score")\nasync def score_transaction(tx: Transaction):\n    features = await extract_features(tx)\n    risk = ensemble.predict_proba(features)\n    explanation = await rag.explain(tx, risk)\n    return {"risk": risk, "why": explanation}`,
  },
  {
    title: 'SentinelFeed',
    description:
      'Real-time social media anomaly detection dashboard with a consensus-based engine — anomalies flagged only when 2+ algorithms agree, minimising false positives. Groq API (LLaMA 3.1 8B) powers natural-language anomaly explanations with live simulation.',
    tech: ['Groq API', 'LLaMA 3.1', 'React.js', 'Node.js', 'Recharts'],
    live: 'https://sentinel-feed-bice.vercel.app/',
    github: 'https://github.com/sadhuram09/sentinel-feed',
    code: `const consensus = detectors.filter(\n  d => d.flag(anomaly)\n).length >= 2;\n\nif (consensus) {\n  const explanation = await groq.explain({\n    model: "llama-3.1-8b",\n    anomaly\n  });\n}`,
  },
]

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function BrowserMock({ code }) {
  return (
    <div className="h-full min-h-[200px] overflow-hidden rounded-xl border border-white/[0.06] bg-[rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.7rem] leading-relaxed text-muted/90">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      {...cardMotion}
      transition={{ ...cardMotion.transition, delay: index * 0.08 }}
      className="group rounded-[20px] border border-white/[0.07] bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] md:p-10 md:px-12"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-[1.8rem] font-light text-heading">{project.title}</h3>
          <p className="mb-6 text-muted">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[0.85rem]">
            {project.inDevelopment ? (
              <span className="rounded-full border border-[rgba(245,158,11,0.2)] bg-[rgba(255,166,0,0.08)] px-3 py-1 text-[#f59e0b]">
                In Development
              </span>
            ) : (
              project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan transition-opacity hover:opacity-80"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              )
            )}
            {project.github && (
              <>
                {!project.inDevelopment && project.live && (
                  <span className="text-white/20">·</span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-cyan"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
              </>
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <BrowserMock code={project.code} />
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-section md:px-8">
      <motion.div
        className="mx-auto max-w-content"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label mb-4">// PROJECTS</p>
        <h2 className="mb-12 text-3xl font-light text-heading">Things I&apos;ve Built</h2>
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
