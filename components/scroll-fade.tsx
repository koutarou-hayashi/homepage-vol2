"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollFadeProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function ScrollFade({ children, className = "", delay = 0 }: ScrollFadeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}