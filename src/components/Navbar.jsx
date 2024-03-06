import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
        <ul className="flex w-auto justify-end text-sm p-4 bg-slate-50">
            <li className="mx-8">
                Projects
            </li>
            <li className="mx-8"> 
                About
            </li>
            <li className="mr-4 ml-8">
                Contact
            </li>
        </ul>
        </div>

    </nav>

  )
}
