
import Reveal from "../utils/Reveal"
import PopReveal from '../utils/PopReveal'
import { motion } from 'framer-motion'

export default function Stack() {

  const stackStyle = "h-16 w-16 m-2 transition-all delay-75 animate-float"

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }

  }

  return (
    <>
    <section id="about" className="font-light flex justify-center px-6 text-white text-[clamp(16px,2vw,36px)] py-[4vh]"> 
      <div className="lg:w-70vw]">
          <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-indigo-500 rounded-sm"></div>
          <div className="flex py-6 justify-center">
              {/* <div className="w-[60vw] px-4 grid grid-cols-3 place-items-center lg:flex lg:justify-center"> */}
                <PopReveal>
                  <motion.img variants={imgVariants} key="html" src="/html.svg" className={`${stackStyle} duration-1.9s`} />
                  <motion.img variants={imgVariants} key="css" src="/css.svg" className={`${stackStyle} duration-1.75s`}/>
                  <motion.img variants={imgVariants} key="tailwind" src="/tailwindcss.svg" className={`${stackStyle} duration-1.5s`}/>
                  <motion.img variants={imgVariants} key="js" src="/js.svg" className={`${stackStyle} duration-1.35s`}/>
                  <motion.img variants={imgVariants} key="node" src="/nodejs.svg" className={`${stackStyle} duration-1.55s`}/>
                  <motion.img variants={imgVariants} key="react" src="/react.svg" className={`${stackStyle} duration-1.6s`}/>
                  <motion.img variants={imgVariants} key="express" src="/express.svg" className={`${stackStyle} duration-1.8s`}/>
                  <motion.img variants={imgVariants} key="mongoose" src="/mongoose.svg" className={`${stackStyle} duration-1.95s`}/>
                  <motion.img variants={imgVariants} key="mongodb" src="/mongodb.svg" className={`${stackStyle} duration-1.25s`}/>
                  <motion.img variants={imgVariants} key="python" src="/python.svg" className={`${stackStyle} duration-1.55s`}/>
                </PopReveal>
              {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
