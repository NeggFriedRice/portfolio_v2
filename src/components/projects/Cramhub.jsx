import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'
import CramhubModal from '../modals/CramhubModal'

export default function Cramhub() {
  return (
    <article className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center my-4">
        <a href="https://github.com/NeggFriedRice/CramHub" target="_blank">
        <video autoPlay loop muted src="/videos/cramhub.mp4" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all duration-300 delay-100 border-r-1 border-b-1 border-slate-600  w-[300px] lg:h-[400px] lg:w-[400px] my-4"/>
        </a>
      </div>
      <div className="m-2 lg:m-8">
        <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[2.5rem]">CramHub Web API</h3>
        <p className="text-[1.5rem] max-xs:text-[1rem]">A complete API backend for a hypothetical student-sourced study platform, endearingly named CramHub, with the ability to submit user-tagged posts and comments</p>
        <CramhubModal />
        <div className="animate-float duration-1.85s">
          <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[200px] lg:w-[260px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img src="/python.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/flask.svg" className={`${smallIcon} ${largeIcon}`}/>
              <img src="/postgresql.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
        </div>
      </div>
  </article>
  )
}
