"use client";
import { useState } from "react"
const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
        <div className="cursor-pointer" onClick={() =>setIsOpen(!isOpen)}>
            <div className="filter-trigger">
               <figure>
                <img 
                src="/assets/icons/hamburger.svg"
                alt="menu"
                width={14}
                height={14}/>
                Most recent
               </figure>
               <img src="/assets/icons/arrow-down.svg"
               alt="arrow-down"
               height={20}
               width={20}/>
            </div>
        
        </div>
        {isOpen && (
            <ul className="dropdown">
                {['Most recent','Most liked'].map((option) => (
                    <li key={option} className="list-item">
                        {option}

                    </li>
                ))}
            </ul>
        )}
        </div>
  )
}

export default DropdownList