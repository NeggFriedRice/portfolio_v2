import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'
import BeyBladeModal from '../modals/BeyBladeModal'

export default function BeyBlade() {
  return (
    <article className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center my-4">
        <a href="https://github.com/NeggFriedRice/beyblade-battle-sim" target="_blank" className="perspective-800">
          <video autoPlay loop muted src="/videos/beyblade-vid2.mp4" className="shadow-block-md hover:shadow-block-md hover:scale-105 hover:rounded-lg transform rotate-y-[15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-all duration-300 delay-100 border-r-1 border-b-1 border-slate-600 w-[400px] lg:w-[475px] my-4"/>
          </a>
      </div>
      <div className="m-2 lg:m-8">
        <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[2.5rem]">BeyBlade Battle Sim</h3>
        <p className="text-[1.5rem] max-xs:text-[1rem]">A quick terminal-based three-round text-game planting you smack bang in the middle of the Beyblade Universe (<em>geeky, I know...)</em></p>
        <BeyBladeModal />
        <div className="animate-float duration-1.85s">
          <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[100px] lg:w-[150px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img src="/python.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
        </div>
      </div> 
    </article>
  )
}
