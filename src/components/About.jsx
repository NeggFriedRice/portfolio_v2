import React from 'react'
import AboutMoreModal from './modals/AboutMoreModal'
import Reveal from '../utils/Reveal'

export default function About() {
  return (
    <>
        <section className="font-light flex justify-center px-6 bg-gray-800 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
            <div className="xl:w-[50vw] lg:w-[70vw] w-[100vw] xxl:w-[40vw]">
                <div className="flex justify-items-end justify-end px-16">
                <Reveal direction={"left"} delay={0.35}>
                    <h1 className="inline text-[clamp(26px,10vw,48px)] font-semibold">About</h1>
                </Reveal>
                </div>
                <div className="flex justify-items-end justify-end">
                    <div className="w-[83vw] lg:w-[70vw] h-[1px] bg-white rounded-sm mx-12"></div>
                </div>
                <div className="py-6 flex justify-center">
                    <div className="w-[80vw] md:grid md:grid-cols-2 flex flex-wrap justify-center">
                        <p className="py-2 col-start-1 col-span-2 text-[1.5rem] max-xs:text-[1rem]">
                        Hi there! I'm Tom! I used to be a business analyst but now I'm on a pursuit of curiosity to build front ends and back ends and everything in between!<br></br><br></br> I'm a bright-eyed 👀, squash-playing 🎾, car-enthusiast 🚗 full stack web developer that likes tinkering with code and creating something <em>a little bit special</em>.</p>
                        <div>
                            <p className="py-2 text-[1.5rem] max-xs:text-[1rem] lg:mb-8">With experience in the MERN stack, HTML, CSS, JavaScript and a sprinkle of Python, I'm passionate about building engaging, interesting and fun apps!</p>
                            {/* <AboutMoreModal /> */}
                        </div>
                        <div className="grid grid-cols-12 grid-rows-12 h-48 w-48 relative justify-center justify-self-center z-10">
                            <img alt="Cartoon image of a person sitting at a computer" src="computer.png" className="col-span-8 col-start-3 row-start-6 max-h-36 max-w-72"></img>
                            <img alt="Cut out of Thomas Loo's head in sticker style" src="stickerhead.png" className="col-span-6 col-start-8 row-start-1 animate-bobble origin-bottom hover:animate-bobbleFast transition-all max-h-27 max-w-24"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
