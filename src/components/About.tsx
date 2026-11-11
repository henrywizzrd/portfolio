import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import { reveal, springSlow } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="Backend at heart." />

      <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          {...reveal}
          transition={springSlow}
          className="space-y-6 text-[19px] leading-relaxed text-muted"
        >
          <p>
            I'm <span className="font-semibold text-label">Henry Nguyen</span>, a fourth-year
            Information Technology student at International University (VNU-HCM).
          </p>
          <p>
            During my internship at HPT Vietnam Corporation, I built and tested an automation tool
            that manages Zabbix agents across Linux hosts — from API design to Ansible playbooks to
            end-to-end testing.
          </p>
          <p>
            Outside of work I build <span className="font-semibold text-label">ZYX</span>, my own
            music app. I'm looking for roles as a{' '}
            <span className="font-semibold text-label">Backend Developer</span> or{' '}
            <span className="font-semibold text-label">QA Tester</span>.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              {...reveal}
              transition={{ ...springSlow, delay: i * 0.06 }}
              className="card rounded-3xl p-6"
            >
              <h3 className="text-headline text-[17px]">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/[0.07] px-3 py-1 text-[13px] font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
