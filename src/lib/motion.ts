import type { Transition } from 'framer-motion'

/** Lò xo critically damped: không nảy, dừng êm. Dùng cho hầu hết UI. */
export const spring: Transition = { type: 'spring', bounce: 0, duration: 0.6 }

/** Lò xo chậm hơn cho khối lớn (ảnh, section). */
export const springSlow: Transition = { type: 'spring', bounce: 0, duration: 0.9 }

/** Hiện dần khi cuộn tới. Dùng: <motion.div {...reveal} transition={...}> */
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
} as const

/** Hiện như vật liệu: mờ -> rõ, nhỏ -> đúng cỡ. */
export const materialize = {
  initial: { opacity: 0, scale: 0.96, filter: 'blur(10px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
} as const
