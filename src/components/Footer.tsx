import { profile } from '../data/profile'
import { FacebookIcon, GithubIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-faint md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-2">
          {[
            { href: profile.github, label: 'GitHub', Icon: GithubIcon },
            { href: profile.facebook, label: 'Facebook', Icon: FacebookIcon },
            { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="press flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 hover:text-label"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
