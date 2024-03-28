import React from 'react'
import Reveal from '../utils/Reveal'
import PortfolioModal from './modals/PortfolioModal'
import AnimeScreenModal from './modals/AnimeScreenModal'
import CARtificateModal from './modals/CARtificateModal'
import BeyBladeModal from './modals/BeyBladeModal'
import BeyBlade from './projects/BeyBlade'
import AnimeScreen from './projects/AnimeScreen'
import PortfolioRedesign from './projects/PortfolioRedesign'
import Cartificate from './projects/Cartificate'

export default function Projects() {

  const iconHolderStyles = "rounded-[2rem] px-3 lg:px-8 mx-2 shadow-block-sm lg:shadow-block-smmd hover:shadow-block-smmd hover:lg:shadow-block-md transition-all duration-300 delay-75"
  const smallIcon = "h-10 w-10 m-2 hover:scale-110 transition-all delay-75"
  const largeIcon = "lg:h-14 lg:w-14 lg:m-2 hover:scale-110 transition-all delay-75"

  return (
    <div id="projects">
        <div className="font-light flex justify-center px-6 bg-sky-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
          <div className="xl:w-[55vw] lg:w-[70vw] mx-8 xxl:w-[50vw]">
            <Reveal direction={"right"}>
              <div className="inline text-[clamp(26px,10vw,48px)]">Projects</div>
            </Reveal>
            <div className="xl:w-[55vw] xxl:w-[50vw] lg:w-[70vw] w-[80vw] h-[1px] bg-white rounded-sm"/>
            <Cartificate />
            <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-sky-400 rounded-sm"/>
            <PortfolioRedesign />
            <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-sky-400 rounded-sm"/>
            <AnimeScreen />
            <div className="w-[80vw] lg:w-[60vw] h-[1px] xxl:w-[50vw] bg-sky-400 rounded-sm"/>
            <BeyBlade />
          </div>
        </div>
    </div>
  )
}
