import React from 'react'

export default function GetFromUs() {
    return (
        <section className='my-40'>
            <div className='text-center my-16'>
                <h1 className='font-bold text-3xl mb-4'>কোর্স করে কি পাবেন</h1>
                <p>কোর্সটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                <div className="rounded-3xl cursor-pointer space-y-4 border border-gray-600 p-8 lg:w-96 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className="text-center font-semibold">কোর্স সার্টিফিকেট</h2>
                    <p className="text-center">যারা কোর্সের সবগুলো এসাইনমেন্ট ফাইনাল পরীক্ষায় অংশগ্রহণ করে কমপক্ষে<span className="font-medium text-[#07A8ED]">50% মার্ক পাবেন</span> তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই ডাউনলোড করতে পারবেন। কোন প্রিন্টেড কপি দেয়া হবে না।</p>
                </div>
                <div className="rounded-3xl cursor-pointer space-y-4 border p-8 lg:w-96 border-gray-600 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className="text-center font-semibold">লাইফটাইম কোর্স এক্সেস</h2>
                    <p className="text-center">যারা কোর্সটি একবার কিনবেন, তারা কোর্সের সকল কন্টেন্ট এর লাইফটাইম এক্সেস পাবেন এবং ভবিষ্যতের সকল আপডেট পেতে থাকবেন। এছাড়া প্রাইভেট সাপোর্ট চ্যানেলে আজীবন এক্সেস থেকে যাবে যেখানে কোর্সের পরে প্রশ্ন করলে আমরা উত্তর দেয়ার চেষ্টা করবো।</p>
                </div>
                <div className="rounded-3xl cursor-pointer space-y-4 border p-8 lg:w-96 border-gray-600 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className=" text-center font-semibold">জব ইন্টারভিউ এর জন্য তৈরী হয়ে যাবেন</h2>
                    <p className="text-center">জব মার্কেটে রিয়াক্ট এবং নেক্সট জেএস এর ডিমান্ড অনেক বেশি। কোর্সটি ভালভাবে শেষ করার পর আপনার আত্মবিশ্বাস জব ইন্টারভিউতে ভাল করতে সাহায্য করবে।</p>
                </div>
                
            </div>
        </section>
    )
}
