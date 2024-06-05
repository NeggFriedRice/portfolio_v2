import CARtificateModal from "../modals/CARtificateModal"
import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'


export default function Cartificate() {
  return (
    <article className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center my-4 ">
        <a aria-label="Link to CARtificate web app" href="https://cartificate.vercel.app/" target="_blank" className="perspective-1000">
          <video autoPlay loop muted src="/videos/cartificate-vid2.mp4" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transform rotate-y-[15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-all duration-300 delay-100 w-[300px] lg:h-[400px] lg:w-[400px] my-4"/>
        </a>
      </div>
    </div>
    <div className="m-2 lg:m-8">
      <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[3rem]">CARtificate</h3>
      <p className="text-[1.5rem] max-xs:text-[1rem]">A simple-to-use full stack web app to digitise all of your car information and maintenance.</p>
      <CARtificateModal />
      <div className="animate-float duration-1.35s">
        <div className={`${iconHolderStyles} flex flex-wrap justify-center bg-blue-900 hover:bg-blue-800 w-[210px] lg:w-[280px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img alt="html logo" src="/html.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="css logo" src="/css.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="tailwind css logo" src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="javascript logo" src="/js.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="react logo" src="/react.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="mongodb logo" src="/mongodb.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="express logo" src="/express.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="nodejs logo" src="/nodejs.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img alt="mongoose logo" src="/mongoose.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
      </div>
    </div>
  </article>
  )
}
