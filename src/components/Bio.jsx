import React from 'react'

export default function Bio() {
  return (
    <>
        <div className="grid lg:grid-cols-4 justify-center h-[50vh] items-center bg-cyan-100">
            <div className="flex w-auto h-[300px]justify-center items-center lg:col-start-2">
                <div>
                    <h1 className="text-[48px]">Hi! I'm Tom</h1>
                    <p>Your friendly neighbourhood xxxx</p>
                </div>
            </div>
            <div className="flex w-auto h-auto bg-slate-200 justify-center items-center square"> 
                <p >Profile pic</p>
            </div>
        </div>
    </>
  )
}
