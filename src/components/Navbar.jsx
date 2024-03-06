import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
        <ul className="flex w-auto justify-around text-sm p-4 bg-slate-50">
            <li>
                Home
            </li>
            <li>
                Projects
            </li>
            <li> 
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
        </div>

    </nav>

  )
}
