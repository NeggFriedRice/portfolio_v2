
import Reveal from "../utils/Reveal"

export default function Stack() {

  const stackStyle = "h-16 w-16 m-2 transition-all delay-75 animate-float"

  return (
    <>
    <div id="about" className="font-light flex justify-center px-6 text-white text-[clamp(16px,2vw,36px)] py-[4vh]"> 
      <div className="lg:w-70vw]">
          <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-indigo-500 rounded-sm"></div>
          <div className="flex py-6 justify-center">
              <div className="w-[60vw] px-4 grid grid-cols-3 place-items-center lg:flex lg:justify-center">
                  <img src="/html.svg" className={`${stackStyle} duration-1.9s`} />
                  <img src="/css.svg" className={`${stackStyle} duration-1.75s`}/>
                  <img src="/tailwindcss.svg" className={`${stackStyle} duration-1.5s`}/>
                  <img src="/js.svg" className={`${stackStyle} duration-1.35s`}/>
                  <img src="/react.svg" className={`${stackStyle} duration-1.6s`}/>
                  <img src="/nodejs.svg" className={`${stackStyle} duration-1.55s`}/>
                  <img src="/express.svg" className={`${stackStyle} duration-1.8s`}/>
                  <img src="/mongoose.svg" className={`${stackStyle} duration-1.95s`}/>
                  <img src="/mongodb.svg" className={`${stackStyle} duration-1.25s`}/>
                  <img src="/python.svg" className={`${stackStyle} duration-1.55s`}/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
