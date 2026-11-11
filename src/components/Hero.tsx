import { motion } from 'framer-motion'
import { materialize, spring, springSlow } from '../lib/motion'

const lines = [
  { text: 'I design.', gradient: false },
  { text: 'I create.', gradient: true },
  { text: 'I develop.', gradient: false },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ánh sáng nền tĩnh */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-center gap-16 px-6 pt-36 pb-20 md:flex-row md:justify-between md:gap-10">
        {/* Cột trái: chữ */}
        <div className="flex-1">
          <motion.p {...materialize} transition={spring} className="eyebrow">
            Henry Nguyen · Backend Developer & QA Tester
          </motion.p>

          <h1 className="text-display mt-5 text-[clamp(3.25rem,9vw,7rem)]">
            {lines.map((line, i) => (
              <motion.span
                key={line.text}
                {...materialize}
                transition={{ ...springSlow, delay: 0.08 + i * 0.08 }}
                className={`block pb-[0.06em] ${
                  line.gradient
                    ? 'bg-linear-to-r from-brand to-brand-light bg-clip-text text-transparent'
                    : ''
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...materialize}
            transition={{ ...springSlow, delay: 0.35 }}
            className="mt-8 max-w-md text-[19px] leading-relaxed text-muted"
          >
            Fourth-year IT student at International University (VNU-HCM). I build reliable backend
            systems and the tools that keep them running.
          </motion.p>

          <motion.div
            {...materialize}
            transition={{ ...springSlow, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="press flex h-12 items-center rounded-full bg-brand px-7 text-[16px] font-medium text-white hover:bg-brand/85"
            >
              View my work
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="press flex h-12 items-center rounded-full bg-white/10 px-7 text-[16px] font-medium text-label hover:bg-white/15"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Cột phải: ảnh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ ...springSlow, delay: 0.2 }}
          className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand to-brand-light shadow-[0_40px_120px_-30px_rgb(10_132_255/0.55)]"
        >
          <div className="absolute inset-0 bg-white/95 [clip-path:polygon(27%_0,73%_0,100%_42%,100%_78%,86%_100%,0_100%,0_32%)]" />
          <img src="/avatar.jpg" alt="Henry Nguyen" className="relative h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/15" />
        </motion.div>
      </div>
    </section>
  )
}
