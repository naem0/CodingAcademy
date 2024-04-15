"use client"
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import Image from 'next/image';
import bkash from '@/public/qr.webp'

const ModalBtn = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className={`${className} px-8 py-4 font-bold rounded-2xl hover:opacity-50 mt-8`} onClick={openModal}>Enroll Now</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h1 className='font-semibold text-3xl text-center text-indigo-800'>পেমেন্ট করার জন্য নিচের নিয়ম গুলো সাবধানতার সাথে দেখুন।</h1>
          <div className='grid my-10 items-center grid-cols-3 gap-8 '>
            <div className='col-span-2'>
              <Image className='w-5/6 mx-auto' src={bkash} />
            </div>
            <ol className='flex flex-col gap-2'>
              <li>Bkash: 01310881055</li>
              <li>Nagad: 01310881055</li>
            </ol>
          </div>
          <div className='grid gap-6'>
            <p>
              কোর্সে এনরোলমেন্ট করার জন্য যেকোনো পার্সোনাল বিকাশ, নগদ বা রকেট অ্যাকাউন্ট নাম্বার থেকে ৫ হাজার টাকা নিচের উল্লিখিত নাম্বারে Send Money করতে হবে।
            </p>
            <p>
              সফলভাবে Send Money হওয়ার পরে Transaction ID, যে নাম্বার থেকে টাকা সেন্ড করেছেন সেই ফোন নাম্বার এবং পেমেন্টের একটি স্ক্রিনশট সাবমিট করুন পরবর্তী পেজে গিয়ে।
              অবশ্যই Send Money করবেন। নিচের নাম্বার গুলো পার্সোনাল নাম্বার। Send Money ব্যতীত অন্য কিছু হবে না।
            </p>
            <p className='text-red-500'>
              পেমেন্ট সম্পর্কিত সকল তথ্য এবং কীভাবে পেমেন্ট করবেন এই বিষয়ে বিস্তারিত জানতে বা পেমেন্ট নিয়ে সমস্যা হলে সরাসরি আমাদের সাথে যোগাযোগ করুনঃ 01310881055 / 013
            </p>
          </div>

        </div>
      </Modal>
    </div>
  );
};

export default ModalBtn;
