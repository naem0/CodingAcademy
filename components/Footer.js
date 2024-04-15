import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-indigo-800 pt-20 pb-10'>
            <div class="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div class="space-y-3">
                        <h3 class="text-[20px] font-[600]  text-white">About</h3>
                        <ul class="space-y-4">
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/policy">Privacy Policy</a></li>
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/refund">Refund Policy</a></li>
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h3 class="text-[20px] font-[600]  text-white">Quick Links</h3>
                        <ul class="space-y-4">
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/courses">Courses</a></li>
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/about">Success Story</a></li>
                            <li><a class="text-base  text-gray-300 hover:text-white" href="/profile">My Account</a></li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h3 class="text-[20px] font-[600]  text-white">Social Links</h3>
                        <ul class="space-y-4">
                            <li><a class="text-base  text-gray-300 hover:text-white" target="_blank" href="https://www.youtube.com/@HabluProgrammer">Youtube</a></li>
                            <li><a class="text-base  text-gray-300 hover:text-white" target="_blank" href="https://www.linkedin.com/company/hablu-programmers">Linkedin</a></li>
                            <li><a class="text-base text-gray-300 hover:text-white" target="_blank" href="https://github.com/Hablu-Programmer">github</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-[20px] font-[600] text-white pb-3">Contact Info</h3>
                        <p class="text-base  text-gray-300 hover:text-white pb-2">Call Us: +880 1816986263</p>
                        <p class="text-base  text-gray-300 hover:text-white pb-2 ">Address: Dhaka,Bangladesh.</p>
                        <p class=" text-gray-300 hover:text-white  pb-2 ">Mail Us: <span class="lowercase text-[15px]">support@hablu-programmer.com</span></p>
                    </div>
                </div>

                <p class="text-center  text-white mt-6">Copyright © 2024 Hablu-Programmer | All Rights Reserved</p>
            </div>
        </footer>
    )
}
