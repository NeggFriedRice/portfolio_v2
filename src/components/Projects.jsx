import Reveal from '../utils/Reveal'
import BeyBlade from './projects/BeyBlade'
import AnimeScreen from './projects/AnimeScreen'
import Cartificate from './projects/Cartificate'
import Cramhub from './projects/Cramhub'
import BodySolutions from './projects/BodySolutions'
import Blipmail from './projects/Blipmail'

export default function Projects() {


  return (
    <section id="projects">
        <div className="font-light flex justify-center px-6 bg-sky-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh] projects-gradient">
          <div className="xl:w-[55vw] lg:w-[70vw] mx-8 xxl:w-[50vw]">
            <Reveal direction={"right"} delay={0.35}>
              <div className="inline text-[clamp(26px,10vw,48px)]">Projects</div>
            </Reveal>
            <div className="xl:w-[55vw] xxl:w-[50vw] lg:w-[70vw] w-[80vw] h-[1px] bg-white rounded-sm"/>
            <Blipmail />
            <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-gray-500 rounded-sm"/>
            <Cartificate />
            <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-gray-500 rounded-sm"/>
            <BodySolutions />
            {/* <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-gray-500 rounded-sm"/>
            <PortfolioRedesign /> */}
            <div className="w-[80vw] lg:w-[60vw] xxl:w-[50vw] h-[1px] bg-gray-500 rounded-sm"/>
            <AnimeScreen />
            <div className="w-[80vw] lg:w-[60vw] h-[1px] xxl:w-[50vw] bg-gray-500 rounded-sm"/>
            <BeyBlade />
            <div className="w-[80vw] lg:w-[60vw] h-[1px] xxl:w-[50vw] bg-gray-500 rounded-sm"/>
            <Cramhub />
          </div>
        </div>
    </section>
  )
}
