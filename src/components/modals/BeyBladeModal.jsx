// Modal borrowed from Creative Tim Tailwind Starter Kit (https://www.creative-tim.com/)

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BeyBladeModal() {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex">
        <a href="https://github.com/NeggFriedRice/beyblade-battle-sim" target="_blank">
          <button className="bg-teal-700 text-white active:bg-teal-600 hover:bg-teal-600 font-bold uppercase text-sm my-5 px-6 py-3 rounded-[12px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all lg:text-[1.5rem] lg:rounded-[12px] flex">
            <p className="px-2">View</p><span className="material-symbols-outlined lg:text-[20px] text-[17px] animate-ping">rocket_launch</span>
          </button>
        </a>
        <button
          className="bg-orange-700 text-white active:bg-orange-600 hover:bg-orange-600 font-bold uppercase text-sm my-5 px-6 py-3 rounded-[12px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all lg:text-[1.5rem] lg:rounded-[12px] flex"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <p className="px-2">Info</p><span className="animate-ping duration-2 s relative inline-flex h-full w-full">+</span>
        </button>
      </div>
          <AnimatePresence>
            {showModal && (
            <>
              <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden"
            >
            <motion.div
              variants={{
                hidden: { y: -75, opacity: 0 },
                visible: { y: 0, opacity: 1 },
                exit: { y: 75, opacity: 0},
              }}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.75, delay: 0.1, ease: 'backInOut' }}>
              <div className="w-[80vw] relative my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-900 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      BeyBlade* Battle Sim
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
                  <div className="relative px-4 flex-auto">
                      <div className="my-4 text-[clamp(22px,3vw,36px)] leading-relaxed font-light font-['Lilita_One']">
                        <ul className="list-disc px-8 text-base lg:text-xl font-['Poppins']">
                            <li className="my-4">Built completely in Python, this project was a huge step for me in understanding Python Classes and OOP concepts. I had <em>a lot</em> of fun building out this game.</li>
                            <li className="my-4">Played in the terminal, you get to name yourself, name your BeyBlade, upgrade it's stats and battle against some frenemies to take home the prize.</li>
                            <p className="my-4"><em>*BeyBlades are spinning tops, there's a whole multi-season anime series based around spinning tops, yes...</em></p>
                            <div className="py-2 transition-all delay-100 duration-300 hover:opacity-60">
                            <motion.div 
                              initial={{ opacity: 0, transform: 'scale(1.2)' }}
                              animate={{ opacity: 1, transform: 'scale(1)' }}
                              transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 200}}
                              className="flex items-center">
                              <svg className="h-[35px] lg:h-[40px]" viewBox="0 0 128 128">
                                  <g fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                              </svg>
                              <a href="https://github.com/NeggFriedRice/beyblade-battle-sim" target="_blank">
                              <p className="mx-2 text-[1rem] md:text-[1rem]">View GitHub repo</p>
                              </a>
                            </motion.div>
                            </div>
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

