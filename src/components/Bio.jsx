import React from 'react'

export default function Bio() {
  return (
    <>
        {/* <div className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
            <div className="flex flex-wrap justify-center items-center align-middle">
              <div className="">
                <h1 className="text-[48px] font-['Poppins'] mx-12 text-white">Thomas Loo</h1>
                <h1 className="text-[26px] font-['Poppins'] rotate-90 relative top-[72px] right-[-132px] text-white whitespace-break-spaces">Juni     r Full Stack Developer</h1>
              </div>
                  <div className="flex justify-center items-center my-16 relative top-[170px] right-[410px]"> 
                      <img src="profile_pic3.png" className="shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square"/>
                  </div>
            </div>
        </div>  */}
        <div className="flex flex-wrap justify-center h-[100vh] items-center bg-cyan-600">
          <div>
            <div className="">
              <h1 className="text-[48px] font-['Poppins'] mx-12 text-white">Thomas Loo</h1>
              <h1 className="text-[26px] font-['Poppins'] rotate-90 relative top-[72px] right-[-132px] text-white whitespace-break-spaces">Juni     r Full Stack Developer</h1>
              <img src="profile_pic3.png" className="relative top-[-20px] right-[10px] shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300 aspect-square mx-4"/>
            </div>
          </div>
        </div>
    </>
  )
}
