import React from 'react'

export default function Bio() {
  return (
    <>
        <div className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
            <div className="flex-col w-auto justify-center items-center align-middle">
                    <h1 className="text-[64px] font-['Poppins'] mx-12 text-white">Thomas Loo</h1>
                    <div className="absolute rotate-90 right-[-60px] top-[550px]">
                        <h1 className="text-[26px] font-['Poppins'] text-white">Junior Full Stack Developer</h1>
                    </div>
                    <div className="flex justify-center items-center my-16 "> 
                        <img src="profile_pic3.png" className="shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square"/>
                    </div>

            </div>
        </div> 
    </>
  )
}
