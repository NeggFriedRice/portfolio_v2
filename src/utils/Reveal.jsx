import React, { useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


export default function Reveal({children, direction}) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.35 }}
            >
            {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { [direction]: 0 },
                    visible: { [direction]: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "orange",
                    zIndex: 20,
                }}>
            </motion.div>
    </div>
  )
}
