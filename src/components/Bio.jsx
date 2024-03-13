import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '../utils/Reveal'

export default function Bio() {
  return (
    <>
        {/* <div className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
            <div className="flex flex-wrap justify-center items-center align-middle">
              <div className="">
                <h1 className="text-[48px] font-['Poppins'] mx-12 text-white">Thomas Loo</h1>
                <h1 className="text-[26px] font-['Poppins'] rotate-90 relative top-[72px] right-[-132px] text-white whitespace-break-spaces">Juni     r Full Stack Developer</h1>
              </div>
                  <div className="flex justify-center items-center my-16 relative top-[170px] right-[410px]"> 
                      <img src="profile_pic3.png" className="shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square"/>
                  </div>
            </div>
        </div>  */}
        <div id="home" className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
          <div>
          
            <div className="">
            <Reveal direction={"left"}>
              <h1 className="text-[48px] font-['Poppins'] mx-12 text-white overflow-hidden">
                Thomas Loo
              </h1>
            </Reveal>
            <motion.div
              initial={{ x: 80, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1.5, delay: 0.75, type: "spring", stiffness: 80 }}>
              <h1 className="text-[26px] font-['Poppins'] rotate-90 relative top-[70px] right-[-132px] text-white whitespace-break-spaces">Juni     r Full Stack Developer</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.75, type: "spring", stiffness: 80 }}>
              <img src="profile_pic3.png" className="relative top-[-20px] right-[10px] shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square overflow-hidden "/>
            </motion.div>
              
            </div>
          </div>
        </div>
        
    </>
  )
}
