import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-center aboslute">
            <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 1.5, duration: 2, type: 'spring', stiffness: 200}}
            className="flex absolute w-auto text-[1rem] lg:text-[25px] text-white p-4">
                <li className="mx-4 lg:mx-12">
                    <a href="#about">
                    About
                    </a>
                </li>
                <li className="mx-4 lg:mx-12">
                    <a href="#projects">
                    Projects
                    </a>
                </li>
            </motion.ul>
        </div>

    </nav>

  )
}
