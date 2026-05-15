import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const tabs = [
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React.js', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Figma', icon: `${DEVICON}/figma/figma-original.svg` },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Flask', icon: `${DEVICON}/flask/flask-original.svg` },
      { name: 'FastAPI', icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', icon: `${DEVICON}/express/express-original.svg` },
    ],
  },
  {
    id: 'ml',
    label: 'ML / AI',
    items: [
      { name: 'XGBoost' },
      { name: 'TensorFlow', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: 'LangChain' },
      { name: 'BERT' },
      { name: 'SHAP' },
      { name: 'Scikit-learn', icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: 'Gemini' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Data',
    items: [
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
      { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg` },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: 'Tableau' },
      { name: 'Power BI' },
      { name: 'Google Cloud', icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: 'Vercel', icon: `${DEVICON}/vercel/vercel-original.svg` },
    ],
  },
]

function TechTile({ name, icon }) {
  return (
    <div className="glass-card glass-card-hover group flex flex-col items-center justify-center p-6 transition-all duration-200 hover:border-cyan/30">
      {icon ? (
        <img src={icon} alt="" className="mb-3 h-10 w-10 object-contain" width={40} height={40} />
      ) : (
        <motion.div
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-xs font-medium text-heading"
          aria-hidden
        >
          {name.slice(0, 2)}
        </motion.div>
      )}
      <span className="text-center text-xs text-muted group-hover:text-heading/80">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('languages')
  const current = tabs.find((t) => t.id === activeTab)

  return (
    <section id="tech" className="px-6 py-section md:px-8">
      <motion.div
        className="mx-auto max-w-content"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label mb-4 text-center md:text-left">// TECH STACK</p>
        <h2 className="mb-3 text-center text-3xl font-light text-heading md:text-left">
          Tools I Work With
        </h2>
        <p className="mb-10 text-center text-muted md:text-left">
          Technologies I use to bring ideas to life.
        </p>

        <motion.div
          className="mb-10 flex flex-wrap gap-6 border-b border-white/[0.06]"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-b-2 border-cyan text-cyan'
                  : 'text-muted hover:text-heading'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {current?.items.map((item) => (
              <TechTile key={item.name} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
