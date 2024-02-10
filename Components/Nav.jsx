import React from 'react'
import "./global.css"


const page = () => {
  return (
    <div className="Nav flex pt-4 flex-wrap justify-around text-lg" >
        <h1 className="text-lg font-bold">Todo APP</h1>
        <ul className="flex text-sm gap-x-40 justify-around">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>

  )
}

export default page