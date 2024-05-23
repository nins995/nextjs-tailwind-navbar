"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses() {
        let menuClasses = [];

        if (isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[60px]",
                "bg-gray-800",
                "w-full",
                "pl-5",
                "py-10",
                "left-0",
                "gap-5",
            ]
        } else {
            menuClasses = [
                'hidden',
                'md:flex'
            ]
        }

        return menuClasses.join(" ")
    }

    return (
        <nav className='bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href='#' className='text-2xl font-bold'>
                    Site Name
                </a>
                <div className={`${getMenuClasses()} flex-col md:flex-row`}>
                    <Link href="/" className="mx-2">
                        Home
                    </Link>
                    <Link href="/" className="mx-2">
                        Page 1
                    </Link>
                    <Link href="/" className="mx-2">
                        Page 2
                    </Link>
                </div>

                <div className='md:hidden flex items-center'>
                    <button
                        onClick={() => { setIsOpen(!isOpen) }}
                    >{isOpen ? (<span>Close Menu</span>) : (<span>Open Menu</span>)}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar