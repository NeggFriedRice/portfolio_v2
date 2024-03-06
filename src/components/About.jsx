import React from 'react'
import AboutMoreModal from './AboutMoreModal'

export default function About() {
  return (
    <>
        
        <div className="font-light flex-col justify-center px-6 bg-teal-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
            <div className="inline text-[clamp(26px,10vw,48px)]">About</div>
            <div className="w-[80vw] h-[1px] bg-white rounded-sm"></div>
            <div className="py-6 flex justify-center">
                <div className="w-[80vw] grid grid-cols-2">
                    <p className="py-2 col-start-1 col-span-2">A bright-eyed 👀, squash-playing 🎾, car-enthusiast 🚗 junior web developer that likes tinkering with code and creating something <em>a little bit special</em> for your eyes.</p>
                    <p className="py-2">With experience in HTML, CSS, JavaScript, React along with some Python, I'm ready to hit the ground running to bring your ideas into reality.</p>
                    <div className="grid grid-cols-12 grid-rows-12 h-48 w-48 relative self-center aspect-square">
                    <img src="computer.png" className="col-span-8 col-start-3 row-start-6"></img>
                    <img src="stickerhead.png" className="col-span-6 col-start-6 row-start-1 animate-bobble origin-bottom hover:animate-bobbleFast transition-all"></img>
                    </div>
                </div>

            </div>
            <AboutMoreModal />
        </div>

    </>
  )
}
