import React from 'react'

export default function Bio() {
  return (
    <>
        <div className="flex flex-wrap lg:grid lg:grid-cols-4 justify-center h-[80vh] items-center bg-cyan-600">
            <div className="flex w-auto h-[300px]justify-center items-center lg:col-start-2">
                <div>
                    <h1 className="text-[48px] font-['Lilita_One'] mx-12">Hi! I'm Tom</h1>
                    <h1 className="text-[42px] font-['Poppins'] mx-12">Hi! I'm Tom</h1>
                    <h1 className="text-[54px] font-['Honk'] mx-12">Hi! I'm Tom</h1>
                    <p>Your friendly neighbourhood xxxx</p>
                </div>
            </div>
            <div className="flex bg-slate-200 justify-center items-center"> 
                <img src="profile_pic2.png" className="shadow-block-md hover:scale-105 hover:rounded-lg transition-all ease-in-out delay-100 duration-300"/>
            </div>
        </div> 
    </>
  )
}
