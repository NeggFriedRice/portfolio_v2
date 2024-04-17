import { motion } from 'framer-motion'
import Reveal from '../utils/Reveal'

export default function Bio() {
  return (
    <>
        <header id="home" className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600 rounded-br-[20vh] lg:rounded-br-[30vh]">
          <div>
            <div className="">
            <Reveal direction={"left"} delay={1.25} >
              <h1 className="text-[48px] font-['Poppins'] mx-12 text-white overflow-hidden max-xs:text-[36px]">
                Thomas Loo
              </h1>
            </Reveal>
            <motion.div
              initial={{ x: 80, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1.5, delay: 2.1, type: "spring", stiffness: 80 }}>
              <h1 className="text-[26px] font-['Poppins'] rotate-90 relative top-[83px] right-[-76px] text-white whitespace-break-spaces max-xs:right-[-56px] max-xs:text-[20px] max-xs:top-[72px]">Fu        l Stack Developer</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.1, type: "spring", stiffness: 80 }}>
              <img src="profile_pic3.png" className="relative top-[-20px] right-[70px] shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square overflow-hidden max-xs:h-[180px] max-xs:right-[10px]"/>
            </motion.div>
            </div>
          </div>
        </header>
    </>
  )
}
