import React from 'react'
import AboutMoreModal from './modals/AboutMoreModal'
import Reveal from '../utils/Reveal'

export default function About() {
  return (
    <>
        
        <div className="font-light flex justify-center px-6 bg-teal-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
            <div className="xl:w-[50vw] lg:w-[70vw] w-[100vw]">

                <div className="flex justify-items-end justify-end px-16">
                <Reveal direction={"left"}>
                    <div className="inline text-[clamp(26px,10vw,48px)]">About</div>
                </Reveal>
                </div>

                <div className="flex justify-items-end justify-end">
                    <div className="w-[83vw] lg:w-[70vw] h-[1px] bg-white rounded-sm mx-12"></div>
                </div>

                <div className="py-6 flex justify-center">
                    <div className="w-[80vw] md:grid md:grid-cols-2 flex flex-wrap justify-center">
                        <p className="py-2 col-start-1 col-span-2 text-[1.3rem] lg:text-[1.6rem]">A bright-eyed 👀, squash-playing 🎾, car-enthusiast 🚗 junior full stack web developer that likes tinkering with code and creating something <em>a little bit special</em> for your eyes.</p>
                        <div>
                            <p className="py-2 text-[1.3rem] lg:text-[1.6rem]">With experience in HTML, CSS, JavaScript, React along with some Python, I'm ready to hit the ground running to bring your ideas into reality.</p>
                            <AboutMoreModal />
                        </div>
                        <div className="grid grid-cols-12 grid-rows-12 h-48 w-48 relative justify-center justify-self-center z-10">
                            <img src="computer.png" className="col-span-8 col-start-3 row-start-6 max-h-36 max-w-72"></img>
                            <img src="stickerhead.png" className="col-span-6 col-start-8 row-start-1 animate-bobble origin-bottom hover:animate-bobbleFast transition-all max-h-27 max-w-24"></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
  )
}
