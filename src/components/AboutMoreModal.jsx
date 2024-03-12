// Modal borrowed from Creative Tim Tailwind Starter Kit (https://www.creative-tim.com/)

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AboutMoreModal() {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
    
      <button
        className="bg-orange-500 text-white active:bg-orange-600 hover:bg-orange-400 font-bold uppercase text-sm my-5 px-6 py-3 rounded-[12px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all lg:text-[1.5rem] lg:rounded-[12px] flex"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span className="relative flex top-[1px] right-[12px] h-5 w-5 ">
          <span className="animate-ping absolute inline-flex h-full w-full  bg-blue-600 opacity-75"></span>
          <span className="relative inline-flex  h-5 w-5 bg-blue-500 hover:bg-green-500 hover:rotate-360 transition-all duration-500"></span>
        </span>
        More info please...

      </button>
          <AnimatePresence>
            {showModal && (
            <>
              <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden"
            >
            <motion.div
              variants={{
                hidden: { y: 75, opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: -75, opacity: 0},
              }}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="w-[80vw] relative my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-teal-900 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      As you wish!
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}>
                      <span className="bg-transparent text-white h-6 w-6 text-2xl block">
                      ⓧ
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="my-4 text-[clamp(22px,3vw,36px)] leading-relaxed font-light font-['Lilita_One']">
                        Things I did before software development:
                        <ul className="list-disc px-4 text-lg font-['Poppins']">
                            <li>Operations role in Melbourne</li>
                            <li>IT consultant in Hong Kong (worked on some <em>really</em> cool stuff)</li>
                            <li>Business Analyst in Hong Kong (less cool stuff, still big impact)</li>
                        </ul>
                      </div>
                      <div className="my-4 text-[clamp(22px,3vw,36px)] leading-relaxed font-light font-['Lilita_One']">
                        Things I do in my spare time:
                        <ul className="list-disc px-4 text-lg font-['Poppins']">
                            <li>Play squash and badminton 🏸</li>
                            <li>Play board games 🎲</li>
                            <li>Play video games 🎮</li>
                            <li>Watch anime 📺</li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: '25%' }}
              exit={{ opacity: 0 }}
              className="opacity-25 fixed inset-0 z-40 bg-black"></motion.div>
          </>
            )}
          </AnimatePresence>
        </>
  )
}

