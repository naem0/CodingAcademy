import React from 'react'
import ModalBtn from './ModalBtn'

export default function TumiRady() {
    return (
        <section className='my-20'>
            <div className="bg-indigo-800 mx-auto lg:max-w-[80%] rounded-3xl transition duration-200 ease-out">
                <div className=" mt-5 px-12 py-16 grid md:grid-cols-3 lg:grid-cols-4">
                    <div className=" col-span-2">
                        <h1 className='text-4xl font-bold mb-6'>তুমি রেডি তো...?</h1>
                        <p className=''>একজন দক্ষ প্রোগ্রমার হতে চাইলে এই কোর্সে জয়েন করো। শিখতে গেলে যা যা লাগবে সেগুলো প্রোভাইড করব আমরা তোমার শুধু লেগে থাকতে হবে, হার্ড ওয়ার্ক করতে হবে।</p>

                            <ModalBtn className ="bg-gray-100 text-indigo-800"></ModalBtn>
                            
                    </div>
                </div>
            </div>
        </section>
    )
}
