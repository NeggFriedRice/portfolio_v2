import React from 'react'
import AboutMoreModal from './AboutMoreModal'

export default function About() {
  return (
    <>
        
        <div className="font-light flex-col justify-center px-6 bg-teal-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
            <div className="inline text-[clamp(26px,10vw,48px)]">About</div>
            <div className="w-[80vw] h-[1px] bg-white rounded-sm"></div>
            <div className="flex py-6">
                <div className="w-[80vw]">
                    <p className="py-2">A bright-eyed 👀, squash-playing 🎾, car-enthusiast 🚗 junior web developer that likes tinkering with code and creating something a little special for your eyes.</p>
                    <p className="py-2">With experience in HTML, CSS, JavaScript, React along with some Python, I'm ready to hit the ground running to bring your ideas into reality.</p>
                </div>
                <div className="grid grid-cols-12 grid-rows-12 h-48 w-48 relative">
                    <img src="computer.png" className="col-span-8 col-start-3 row-start-6"></img>
                    <img src="stickerhead.png" className="col-span-6 col-start-6 row-start-1 animate-bobble origin-bottom"></img>
                </div>
            </div>
            <AboutMoreModal />
        </div>

    </>
  )
}
