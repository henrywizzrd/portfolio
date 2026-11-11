import { motion } from 'framer-motion'
import { experience } from '../data/profile'
import { reveal, springSlow } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've been." />

      <div className="mt-14 max-w-3xl space-y-4">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            {...reveal}
            transition={{ ...springSlow, delay: i * 0.06 }}
            className="card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-headline text-[21px]">{e.role}</h3>
              <p className="text-[14px] font-medium text-brand-light">{e.period}</p>
            </div>
            <p className="mt-1 text-[15px] text-faint">{e.place}</p>
            <ul className="mt-5 space-y-2.5">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
