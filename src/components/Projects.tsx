import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import { reveal, spring, springSlow } from '../lib/motion'
import SectionHeading from './SectionHeading'

type Images = NonNullable<Project['gallery']>
type Phones = NonNullable<Project['phones']>

function Gallery({ images }: { images: Images }) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div className="flex-[1.3]">
      {/* Ảnh lớn */}
      <div className="card relative aspect-video overflow-hidden rounded-3xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="absolute inset-0 h-full w-full object-contain p-2"
          />
        </AnimatePresence>
      </div>
      <p className="mt-3 text-[14px] text-faint">{current.caption}</p>

      {/* Ảnh nhỏ: số cột tự theo số ảnh */}
      {images.length > 1 && (
        <div
          className="mt-4 grid gap-3"
          style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              onPointerDown={() => setActive(i)}
              aria-label={img.caption}
              className={`press aspect-video overflow-hidden rounded-xl ring-2 ${
                i === active ? 'ring-brand' : 'opacity-50 ring-transparent hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function PhoneShowcase({ phones, title }: { phones: Phones; title: string }) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* 3 điện thoại dọc */}
      <div className="grid grid-cols-3 items-end gap-4 md:gap-10">
        {phones.portrait.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            {...reveal}
            whileHover={{ y: -12 }}
            transition={{ ...springSlow, delay: i * 0.08 }}
            className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)]"
          />
        ))}
      </div>

      {/* Điện thoại ngang */}
      <motion.img
        src={phones.landscape}
        alt={`${title} landscape screenshot`}
        {...reveal}
        transition={{ ...springSlow, delay: 0.15 }}
        className="mx-auto mt-10 w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] md:w-[85%]"
      />
    </div>
  )
}

function ProjectInfo({ p }: { p: Project }) {
  return (
    <div className="flex-1">
      <p className="text-[14px] text-faint">{p.subtitle}</p>
      <h3 className="text-title mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)]">{p.title}</h3>
      <p className="mt-4 text-[17px] leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-6 space-y-3">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-label/85">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-brand/15 px-3 py-1 text-[13px] font-medium text-brand-light"
          >
            {t}
          </span>
        ))}
      </div>

      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="press mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-6 text-[15px] font-medium hover:bg-white/15"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Projects" title="Selected work." />

      <div className="mt-16 flex flex-col gap-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            {...reveal}
            viewport={{ once: true, amount: 0.1 }}
            transition={springSlow}
            className={
              p.phones
                ? 'flex flex-col gap-14'
                : `flex flex-col gap-10 md:items-start ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`
            }
          >
            {p.phones && <PhoneShowcase phones={p.phones} title={p.title} />}
            {!p.phones && p.gallery && <Gallery images={p.gallery} />}

            {p.phones ? (
              <div className="mx-auto w-full max-w-3xl">
                <ProjectInfo p={p} />
              </div>
            ) : (
              <ProjectInfo p={p} />
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
