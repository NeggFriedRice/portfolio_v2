import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'
import PortfolioModal from '../modals/PortfolioModal'

export default function PortfolioRedesign() {
  return (
    <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
    <div className="flex justify-center items-center my-4">
      <a href="https://www.thomasloo.dev/" target="_blank">
      <video autoPlay loop muted src="/videos/portfolio-vid.mp4" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all duration-300 delay-100 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] my-4"/>
      </a>
    </div>
    <div className="m-2 lg:m-8">
      <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[3rem]">Portfolio redesign</h3>
      <p className="text-[1.5rem] max-xs:text-[1rem]">Something to keep me busy and an avenue to explore the bits and bobs I've learned from watching a long list of YouTube tutorials.</p>
      <PortfolioModal />
      <div className="animate-float duration-1.85s">
        <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[300px] lg:w-[400px] transition duration-2s my-4 mx-auto lg:mx-0`}>
            <img src="/html.svg" className={`${smallIcon} ${largeIcon}`}/>
            <img src="/css.svg" className={`${smallIcon} ${largeIcon}`}/>
            <img src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
            <img src="/js.svg" className={`${smallIcon} ${largeIcon}`}/>
            <img src="/react.svg" className={`${smallIcon} ${largeIcon}`}/>
        </div>
      </div>
    </div>
  </div>
  )
}
