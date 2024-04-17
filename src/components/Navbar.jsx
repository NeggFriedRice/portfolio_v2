import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-center aboslute">
            <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 3, duration: 1.5}}}
            className="flex absolute w-auto text-[1rem] lg:text-[25px] text-white p-4">
                <li className="mx-4 lg:mx-12">
                    <motion.a 
                    href="#about"
                    whileHover={{ opacity: 0.5 }}>
                    About
                    </motion.a>
                </li>
                <li className="mx-4 lg:mx-12">
                    <motion.a 
                    href="#projects"
                    whileHover={{ opacity: 0.5 }}>
                    Projects
                    </motion.a>
                </li>
            </motion.ul>
        </div>
    </nav>

  )
}
