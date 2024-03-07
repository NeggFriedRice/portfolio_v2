import React from 'react'

export default function Bio() {
  return (
    <>
        <div className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
            <div className="flex flex-wrap justify-center items-center align-middle">
                    <h1 className="text-[48px] font-['Poppins'] mx-12 text-white">Thomas Loo</h1>


                    <div className="flex justify-center items-center my-16"> 
                        <img src="profile_pic3.png" className="shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square"/>
                        <h1 className="text-[26px] font-['Poppins'] rotate-90 relative text-white">Junior Full Stack Developer</h1>
                    </div>
                    
            </div>
        </div> 
    </>
  )
}
