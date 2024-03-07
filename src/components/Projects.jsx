import React from 'react'

export default function Projects() {

  const iconHolderStyles = "rounded-[2rem] px-3 lg:px-8 mx-2 shadow-block-sm lg:shadow-block-smmd"
  const smallIcon = "h-10 w-10 m-2 hover:scale-110 transition-all delay-75"
  const largeIcon = "lg:h-14 lg:w-14 lg:m-2 hover:scale-110 transition-all delay-75"

  return (
    <div>
        <div className="font-light flex justify-center px-6 bg-sky-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
          <div className="lg:w-[70vw]">
            <div className="inline text-[clamp(26px,10vw,48px)] px-8">Projects</div>
            <div className="lg:w-[70vw] w-[80vw] h-[1px] bg-white rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div className="m-2 lg:m-8">
                <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[5rem]">Portfolio redesign</h3>
                <p className="text-justify">Something to keep me busy and an opportunity to put into practice what I wanted to practice.</p>
                <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[300px] lg:w-[400px] transition duration-2s my-4 mx-auto lg:mx-0`}>
                    <img src="../../public/html.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/css.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/js.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/react.svg" className={`${smallIcon} ${largeIcon}`}/>
                </div>
              </div>
            </div>
            <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-sky-400 rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div className="m-2 lg:m-8">
                <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[5rem]">AnimeScreen</h3>
                <p className="text-justify">Event scheduler aimed at the anime crowd; group project built with 2 CoderAcademy classmates.</p>
                <div className={`${iconHolderStyles} flex flex-wrap justify-center bg-blue-700 hover:bg-blue-800 w-[270px] lg:w-[370px] transition duration-2s my-4 mx-auto lg:mx-0`}>
                    <img src="../../public/html.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/css.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/js.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/react.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/mongodb.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/express.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/mongoose.svg" className={`${smallIcon} ${largeIcon}`}/>
                </div>
              </div>
            </div>
            <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-sky-400 rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div className="m-2 lg:m-8">
                <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[5rem]">CARtificate</h3>
                <p>A work in progress. A simple-to-use web app to keep track of all your car maintenance, including photos of receipts.</p>
                <div className={`${iconHolderStyles} flex justify-center bg-blue-700 hover:bg-blue-800 w-[300px] lg:w-[400px] transition duration-2s my-4 mx-auto lg:mx-0`}>
                    <img src="../../public/html.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/css.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/js.svg" className={`${smallIcon} ${largeIcon}`}/>
                    <img src="../../public/react.svg" className={`${smallIcon} ${largeIcon}`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
