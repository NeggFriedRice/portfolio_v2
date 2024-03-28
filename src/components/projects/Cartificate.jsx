import CARtificateModal from "../modals/CARtificateModal"
import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'


export default function Cartificate() {
  return (
    <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center my-4 ">
        <a href="https://cartificate1.vercel.app/" target="_blank">
          <video autoPlay loop muted src="/videos/cartificate-vid2.mp4" width="300" height="300" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all duration-300 delay-100"/>
        </a>
      </div>
    </div>
    <div className="m-2 lg:m-8">
      <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[3rem]">CARtificate</h3>
      <p className="text-[1.5rem] max-xs:text-[1rem]">A simple-to-use full stack web app to keep track of all your car information and maintenance.</p>
      <CARtificateModal />
      <div className="animate-float duration-1.35s">
        <div className={`${iconHolderStyles} flex flex-wrap justify-center bg-blue-700 hover:bg-blue-800 w-[210px] lg:w-[280px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img src="/html.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/css.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/js.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/react.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/mongodb.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/express.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/nodejs.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/mongoose.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
      </div>
    </div>
  </div>
  )
}
