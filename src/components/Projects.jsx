import React from 'react'

export default function Projects() {
  return (
    <div>
        <div className="font-light flex justify-center px-6 bg-sky-600 text-white text-[clamp(16px,2vw,36px)] py-[5vh]">
          <div className="lg:w-[70vw]">
            <div className="inline text-[clamp(26px,10vw,48px)] px-8">Projects</div>
            <div className="lg:w-[70vw] w-[80vw] h-[1px] bg-white rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div>
                <h3 className="text-center">Portfolio redesign</h3>
                <p>Something to keep me busy, and allowing me to practice what I've wanted to practice.</p>
              </div>
            </div>
            <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-sky-400 rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div>
                <h3 className="text-center">AnimeScreen</h3>
                <p>Event scheduler aimed at the anime crowd; group project built with 2 CoderAcademy classmates.</p>
              </div>
            </div>
            <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-sky-400 rounded-sm"></div>
            <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
              <div className="h-36 w-64 bg-slate-300 shadow-block-md m-4"></div>
              <div>
                <h3 className="text-center">CARtificate</h3>
                <p>A work in progress. A simple-to-use web app to keep track of all your car maintenance, including photos of receipts.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
