import { motion } from 'framer-motion'
import { reveal, springSlow } from '../lib/motion'

export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...reveal} transition={springSlow}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-title mt-3 text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h2>
    </motion.div>
  )
}
