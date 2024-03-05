import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-center">
        <ul className="flex w-[500px] justify-between text-xl py-4">
            <li>
                Home
            </li>
            <li>
                Projects
            </li>
            <li> 
                About Me
            </li>
            <li>
                Contact
            </li>
        </ul>
        </div>
    </nav>

  )
}
