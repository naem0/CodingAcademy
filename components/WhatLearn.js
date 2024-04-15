import Image from "next/image";
import html from '@/public/icon/html.webp'
import css from '@/public/icon/css.webp'
import git from '@/public/icon/git-icon.png'
import github from '@/public/icon/github.png'
import bootstrap from '@/public/icon/bootstrap.png'
import tailwindcss from '@/public/icon/tailwindcss.png'

export default function WhatLearn() {
    const datas = [
        {
            id: 1,
            logo: html,
            title: 'HTML 5',
            discripition: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
        },
        {
            id: 2,
            logo: css,
            title: 'CSS 3',
            discripition: ''
        },
        {
            id: 3,
            logo: git,
            title: 'Git',
            discripition: ''
        },
        {
            id: 4,
            logo: github,
            title: 'GitHub',
            discripition: ''
        },
        {
            id: 5,
            logo: bootstrap,
            title: 'Bootstrap',
            discripition: 'bootstrap'
        },
        {
            id: 6,
            logo: tailwindcss,
            title: 'Tailwind CSS',
            discripition: ''
        },
    ]
    return (
        <section className="my-20">
            <div className='text-center my-16'>
                <h1 className='font-bold text-3xl mb-4'>এক নজরে আমাদের রিয়্যাক্টিভ এক্সিলারেটর কোর্স</h1>
                <p>এই কোর্সে যা যা থাকছে</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mb-8 ">
                {
                    datas.map((data) =>
                        <div key={data.id} className=" z-0 text-center hover:scale-x-110 hover:scale-y-105  duration-200 ease-out rounded-2xl bg-gray-900 px-4 py-6">
                            <div className="w-[20%] mx-auto mt-5 ">
                                <Image className="" src={data.logo} alt={data.title} />
                            </div>
                            <p className="mt-3 text-gray-200 mb-3 font-semibold text-[17px]">{data.title}</p>
                            <p className="max-w-xs mx-auto mb-2 text-gray-400">{data.discripition}</p>
                        </div>
                    )
                }

            </div>
        </section>
    )
}
