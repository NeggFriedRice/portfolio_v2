import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'
import BeyBladeModal from '../modals/BeyBladeModal'

export default function BeyBlade() {
  return (
    <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
    <div className="flex justify-center items-center my-4">
      <a href="https://github.com/NeggFriedRice/terminal_app" target="_blank">
       <video autoPlay loop muted src="/videos/beyblade-vid2.mp4" width="400" height="300" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all duration-300 delay-100 border-r-1 border-b-1 border-slate-600"/>
       </a>
    </div>
      <div className="m-2 lg:m-8">
        <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[2.5rem]">BeyBlade Battle Sim</h3>
        <p className="text-[1.5rem] max-xs:text-[1rem]">A quick text, terminal-based three-round game planting you smack bang in the middle of the Beyblade Universe (<em>geeky, I know...)</em></p>
        <BeyBladeModal />
        <div className="animate-float duration-1.85s">
          <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[100px] lg:w-[150px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img src="/python.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
        </div>
      </div>
  </div>
  )
}
