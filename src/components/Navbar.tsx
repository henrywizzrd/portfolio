import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { spring } from '../lib/motion'
import { useActiveSection } from '../lib/useActiveSection'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <>
      {/* Hiệu ứng mép cuộn: nội dung mờ dần khi chạy dưới navbar */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 bg-linear-to-b from-black/80 to-transparent" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-6 pr-2">
          <a href="#home" className="press text-headline text-[17px]">
            Henry<span className="text-brand">.</span>
          </a>

          {/* Menu máy tính: viên nền trượt theo section đang xem */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id} className="relative">
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-white/10"
                  />
                )}
                <a
                  href={`#${link.id}`}
                  className={`press relative block rounded-full px-4 py-2 text-[14px] font-medium ${
                    active === link.id ? 'text-label' : 'text-muted hover:text-label'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="press hidden h-10 items-center rounded-full bg-brand px-5 text-[14px] font-medium text-white hover:bg-brand/85 md:flex"
          >
            Hire me
          </a>

          {/* Nút ☰ trên điện thoại */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="press flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
          >
            <span className={`h-[1.5px] w-5 bg-label transition ${open ? 'translate-y-[3.25px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] w-5 bg-label transition ${open ? '-translate-y-[3.25px] -rotate-45' : ''}`} />
          </button>
        </nav>

        {/* Menu điện thoại: mọc ra từ nút ☰ (góc phải trên) */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
              transition={spring}
              style={{ transformOrigin: 'top right' }}
              className="glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl p-2 md:hidden"
            >
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`press block rounded-2xl px-4 py-3 text-[17px] font-medium ${
                      active === link.id ? 'bg-white/10 text-label' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
