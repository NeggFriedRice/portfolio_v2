import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-center">
            <ul className="flex absolute w-auto  text-sm p-4">

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
