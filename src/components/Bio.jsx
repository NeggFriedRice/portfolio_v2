import React from 'react'

export default function Bio() {
  return (
    <>
        <div className="flex justify-center">
            <div className="flex w-[300px] h-[300px]justify-center items-center">
                <div>
                    <h1 className="text-[48px]">Hi! I'm Tom</h1>
                    <p>Your friendly neighbourhood bargain hunter</p>
                </div>
            </div>
            <div className="flex w-[300px] h-[300px] bg-slate-200 justify-center items-center"> 
                <p className="bg-white h-8">Profile pic</p>
            </div>
        </div>
    </>
  )
}
