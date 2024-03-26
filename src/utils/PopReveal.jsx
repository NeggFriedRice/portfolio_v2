import React, { useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


export default function PopReveal({children}) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    const popUpVariants = {
        hidden: { 
            opacity: 0,
            y: 75},
        visible: { 
            opacity: 1,  
            y: 0,
            transition: { duration: 1, staggerChildren: 0.12, ease: 'easeOut'} 
        }
    }

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref}>
        <motion.div
            variants={popUpVariants}
            initial="hidden"
            animate={mainControls}
            className="w-[60vw] px-4 grid grid-cols-3 place-items-center lg:flex lg:justify-center"
            >
            {children}
            </motion.div>
    </div>
  )
}
