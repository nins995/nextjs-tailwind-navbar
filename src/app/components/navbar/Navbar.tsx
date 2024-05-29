"use client"
import Link from 'next/link'
import React, { use, useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react';
import autoAnimate from '@formkit/auto-animate'

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;

}

const navItems: NavItem[] = [
    {
        label: "Page1",
        link: "/page1",
    },
    {
        label: "Page2",
        children: [
            {
                label: "Page2/1",
                link: "/page2/sub1",
            },
            {
                label: "Page2/2",
                link: "/page2/sub2",
            }
        ],
    },
    {
        label: "Page3",
        link: "/page3",
    }
]

function MobileNavbar({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden'>
            <div className='h-full w-[65%] bg-white px-4 py-4'>
                <section className='flex justify-end'>
                    <span className='cursor-pointer' onClick={closeSideMenu}>Close</span>
                </section>

                <div className='flex flex-col  text-base gap-2 transition-all'>
                    {navItems.map((item, index) => (
                        <SingleNavItem key={index} label={item.label} iconImage={item.iconImage} link={item.link}>
                            {item.children}
                        </SingleNavItem>
                    ))}
                </div>


                <section className='flex flex-col items-center gap-8 mt-4'>
                    <button className='h-fit text-neutral-400 transition-all hover:text-black/90'>
                        Login
                    </button>
                    <button className='w-full rounded-xl px-4 py-2 border-2 border-neutral-400 text-neutral-400 transition-all hover:text-black/90'>
                        Register
                    </button>
                </section>
            </div>
        </div>
    )
}


function SingleNavItem(item: NavItem) {
    const [isItemOpen, setItem] = useState(false)

    function toggleItem() {
        return setItem(!isItemOpen)
    }

    const animationParent = useRef(null)

    useEffect(() => {
        animationParent.current && autoAnimate(animationParent.current)
    }, [animationParent])

    return (
        <div
            ref={animationParent}
            className='relative group px-2 py-3 transition-all'
        >
            <Link
                onClick={toggleItem}
                href={item.link ?? "#"}>
                <p className='flex cursor-pointer items-center gap-2 text-neutral-400'>
                    <span>{item.label}</span>
                    {item.children && (
                        <ChevronDown className={`${isItemOpen ? "rotate-180 " : ""} transition-all text-xs`} />
                    )}
                </p>
            </Link>


            {/* Dropdown */}
            {isItemOpen && item.children && (
                <div className='w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex'>
                    {item.children.map((subitem, index2) => (
                        <Link
                            key={index2}
                            href={subitem.link ?? "#"}
                            className='flex cursor-pointer items-center py-1 pr-6 pl-8 text-neutral-400 hover:text-black'
                        >
                            {subitem.label}
                        </Link>
                    ))}

                </div>
            )}

        </div>
    )
}

function Navbar() {

    const [isSideMenuOpen, setSideMenuOpen] = useState(false)

    function openSideMenu() {
        setSideMenuOpen(true)
    }

    function closeSideMenu() {
        setSideMenuOpen(false)
    }


    const animationParent = useRef(null)

    useEffect(() => {
        animationParent.current && autoAnimate(animationParent.current)
    }, [animationParent])


    return (
        <div className='mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm'>
            {/* Left side */}
            <section ref={animationParent} className='flex items-center gap-10'>
                LOGO
                {isSideMenuOpen && <MobileNavbar closeSideMenu={closeSideMenu} />}
                <div className='hidden md:flex items-center gap-4 transition-all'>
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className='relative group px-2 py-3 transition-all'
                        >
                            <Link
                                href={item.link ?? "#"}>
                                <p className='flex cursor-pointer items-center gap-2 text-neutral-400'>
                                    <span>{item.label}</span>
                                    {item.children && (
                                        <ChevronDown className='rotate-180 transition-all group-hover:rotate-0' />
                                    )}
                                </p>
                            </Link>


                            {/* Dropdown */}
                            {item.children && (
                                <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
                                    {item.children.map((subitem, index2) => (
                                        <Link
                                            key={index2}
                                            href={subitem.link ?? "#"}
                                            className='flex cursor-pointer items-center py-1 pr-6 pl-8 text-neutral-400 hover:text-black'
                                        >
                                            {subitem.label}
                                        </Link>
                                    ))}

                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </section>

            {/* Right Side */}
            <section className='hidden md:flex items-center gap-8'>
                <button className='h-fit text-neutral-400 transition-all hover:text-black/90'>
                    Login
                </button>
                <button className='h-fit rounded-xl px-4 py-2 border-2 border-neutral-400 text-neutral-400 transition-all hover:text-black/90'>
                    Register
                </button>
            </section>

            <Menu onClick={openSideMenu} className='cursor-pointer md:hidden text-4xl' />
        </div>
    )
}

export default Navbar