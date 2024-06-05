import React from 'react'
import BodySolutionsModal from '../modals/BodySolutionsModal'
import { iconHolderStyles, smallIcon, largeIcon } from '../../utils/iconStyles'

export default function BodySolutions() {
  return (
    <article className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center my-4">
        <a aria-label="Link to Body Solutions PDR website" href="https://bodysolutionspdr.com.au/" target="_blank" className="perspective-800">
          <video autoPlay loop muted src="/videos/bodysolutionspdr-vid.mp4" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transform rotate-y-[-10deg]  rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-all duration-300 delay-100 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] my-4"/>
        </a>
      </div>
      <div className="m-2 lg:m-8">
        <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[3rem]">Body Solutions PDR</h3>
        <p className="text-[1.5rem] max-xs:text-[1rem]">Website design & build for a local trade business specialising in mobile paintless dent repair.</p>
        <BodySolutionsModal />
        <div className="animate-float duration-2s">
            <div className={`${iconHolderStyles} flex justify-center bg-blue-900 hover:bg-blue-800 w-[300px] lg:w-[400px] transition duration-2s my-4 mx-auto lg:mx-0`}>
                <img alt="html logo" src="/html.svg" className={`${smallIcon} ${largeIcon}`}/>
                <img alt="css logo" src="/css.svg" className={`${smallIcon} ${largeIcon}`}/>
                <img alt="tailwind css logo" src="/tailwindcss.svg" className={`${smallIcon} ${largeIcon}`}/>
                <img alt="javascript logo" src="/js.svg" className={`${smallIcon} ${largeIcon}`}/>
                <img alt="react logo" src="/react.svg" className={`${smallIcon} ${largeIcon}`}/>
            </div>
        </div>
      </div>
    </article>
  )
}
