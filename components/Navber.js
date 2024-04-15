import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'

export default function Navber() {
    return (
        <header className='bg-gray-800/50 backdrop-blur-sm z-20 shadow-md shadow-indigo-800/25 top-0 sticky border-b border-indigo-800/50'>
            <nav className="text-gray-300 container w-[90%]  mx-auto">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={logo} className="h-8 w-28" alt="Coding Academy Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0 ">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
