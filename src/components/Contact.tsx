import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'
import { reveal, spring, springSlow } from '../lib/motion'
import { FacebookIcon, GithubIcon, MailIcon, PhoneIcon } from './icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { label: 'Phone', value: profile.phone, href: profile.phoneLink, Icon: PhoneIcon },
    { label: 'GitHub', value: 'henrywizzrd', href: profile.github, Icon: GithubIcon },
    { label: 'Facebook', value: 'tysonneee', href: profile.facebook, Icon: FacebookIcon },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        {...reveal}
        transition={springSlow}
        className="card relative overflow-hidden rounded-[2.5rem] p-8 md:p-16"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />

        <p className="eyebrow relative">Contact</p>
        <h2 className="text-display relative mt-4 text-[clamp(2.75rem,7vw,5.5rem)]">
          Let's work
          <br />
          <span className="bg-linear-to-r from-brand to-brand-light bg-clip-text text-transparent">
            together.
          </span>
        </h2>
        <p className="relative mt-6 max-w-lg text-[19px] leading-relaxed text-muted">
          Open to Backend Developer and QA Tester roles. I usually reply within a day.
        </p>

        {/* Email + nút copy */}
        <div className="relative mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="press flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-[16px] font-medium text-white hover:bg-brand/85"
          >
            <MailIcon className="h-5 w-5" />
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="press relative h-12 w-36 overflow-hidden rounded-full bg-white/10 text-[16px] font-medium hover:bg-white/15"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={copied ? 'copied' : 'copy'}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={spring}
                className="block"
              >
                {copied ? 'Copied ✓' : 'Copy email'}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Các liên kết khác */}
        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="press group flex items-center gap-4 rounded-2xl bg-white/[0.05] p-4 hover:bg-white/[0.09]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07]">
                <Icon className="h-5 w-5 text-muted transition group-hover:text-brand-light" />
              </span>
              <span>
                <span className="block text-[12px] font-medium text-faint">{label}</span>
                <span className="block text-[15px] font-medium">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
