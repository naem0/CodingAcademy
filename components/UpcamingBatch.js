import React from 'react'

export default function UpcamingBatch() {
    return (
        <section>
            <div className="my-40">
                <h1 className="text-center  max-w-lg mb-8 font-sans  leading-none tracking-tight text-white sm:text-4xl md:mx-auto text-3xl font-bold ">Upcoming <span className="text-gradient ">Batch Schedule</span></h1>
                <div className="grid gap-8 mb-8 lg:grid-cols-1 mx-auto lg:max-w-[80%]  ">
                    <div className="px-5 py-10 text-center lg:px-5 lg:py-16 xl:py-20 transform hover:scale-x-110 hover:scale-y-105 transition duration-200 ease-out  mt-5 bg-gradient-to-l to-indigo-800/5 from-indigo-800/75 border border-indigo-800 rounded-3xl">
                        <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4 ">
                            <div className="">
                                <h4 className="font-semibold text-2xl text-[#7dd3fc]">Enrollment Starts</h4>
                                <p className="text-gray-300 font-semibold text-xl mt-5 ">5 March, 2024</p>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-2xl text-[#7dd3fc]">Enrollment Ends</h4
                                ><p className="text-gray-300 font-semibold text-xl mt-5">15 April, 2024</p>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-2xl text-[#7dd3fc]">Orientation Starts</h4>
                                <p className="text-gray-300 font-semibold text-xl mt-5">16 April, 2024</p>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-2xl text-[#7dd3fc]">Class Starts</h4>
                                <p className="text-gray-300 font-semibold text-xl mt-5">17 April, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
