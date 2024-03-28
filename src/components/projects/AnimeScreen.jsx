import React from 'react'
import AnimeScreenModal from '../modals/AnimeScreenModal'
import { iconHolderStyles, smallIcon, largeIcon } from '../../utils/iconStyles'

export default function AnimeScreen() {
  return (
    <div className="flex flex-wrap justify-center m-4 lg:grid lg:grid-cols-2">
    <div className="flex justify-center items-center my-4">
      <a href="https://animescreen.vercel.app/" target="_blank">
        <video autoPlay loop muted src="/videos/animescreen-vid.mp4" className="shadow-block-md hover:shadow-block-lg hover:scale-105 hover:rounded-lg transition-all duration-300  delay-100 h-[300px] w-[300px]"/>
      </a>
    </div>
    <div className="m-2 lg:m-8">
      <h3 className="text-center lg:text-left font-['Lilita_One'] text-[2rem] lg:text-[3rem]">AnimeScreen</h3>
      <p className="text-[1.5rem] max-xs:text-[1rem]">Full stack event scheduler app aimed squarely at the anime crowd; group project built with two other Coder Academy classmates.</p>
      <AnimeScreenModal />
      <div className="animate-float duration-2s">
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
