import {iconHolderStyles, smallIcon, largeIcon} from '../../utils/iconStyles'
import BlipmailModal from '../modals/BlipmailModal'

export default function Blipmail() {
  return (
    <article className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center my-4">
        <a aria-label="Link to Blipmail Bot Github page" href="https://github.com/NeggFriedRice/blipmail-bot" target="_blank" className="perspective-800">
          <video autoPlay loop muted src="/videos/blipmail-bot-vid.mp4" className="shadow-block-md hover:shadow-block-md hover:scale-105 hover:rounded-lg transform hover:rotate-y-0 hover:rotate-x-0 transition-all duration-300 delay-100  w-[300px] lg:w-[300px] my-4"/>
          </a>
      </div>
      <div className="m-2 lg:m-8">
        <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[2.5rem]">Blipmail Bot</h3>
        <p className="text-[1.5rem] max-xs:text-[1rem]">An AI-powered Telegram bot that summarises emails into messages of 30 words or less.</p>

        <BlipmailModal />
        <div className="animate-float duration-1.85s">
          <div className={`${iconHolderStyles} flex justify-center bg-blue-900 hover:bg-blue-800 w-[100px] lg:w-[150px] transition duration-2s my-4 mx-auto lg:mx-0`}>
              <img alt="python logo" src="/python.svg" className={`${smallIcon} ${largeIcon}`}/>
          </div>
        </div>
      </div> 
    </article>
  )
}
