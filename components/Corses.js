import React from 'react'
import logo from '@/public/logo.png'
import ModalBtn from "./ModalBtn";
import Image from 'next/image';

export default function Corses() {
    return (
        <section className="my-20">
            <div className=' my-16'>
                <h2 className='font-bold text-2xl mb-4'> আমাদের কোর্স সমূহ</h2>

            </div>
            <div className="grid lg:grid-cols-2   gap-12 mb-8 ">
                <div className="grid gap-16 items-center bg-slate-900 rounded-3xl">
                    <div className='bg-indigo-800 rounded-t-3xl h-80'>
                        <Image src={logo} alt="MERN Stack Web Development" />
                    </div>
                    <div className='p-8'>
                        <h1 className="font-semibold text-4xl mb-4">ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ...</p>

                        <ModalBtn className="bg-indigo-800 text-white"></ModalBtn>
                    </div>
                </div>
                <div className="grid gap-16 items-center bg-slate-900  rounded-3xl">
                    <div className='bg-indigo-800 rounded-t-3xl h-80'>
                        <Image src={logo} alt="MERN Stack Web Development" />
                    </div>
                    <div className='p-8'>
                        <h1 className="font-semibold text-4xl mb-4">ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ........</p>

                        <ModalBtn className="bg-indigo-800 text-white"></ModalBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}
