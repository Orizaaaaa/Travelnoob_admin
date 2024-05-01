'use client'

import { image1, image2, image3 } from '../image'
import Image from 'next/image'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Modal from '@/components/fragemnts/modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';



const AllNewsAdmin = () => {
    const router: any = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const datahero3 = [
        {
            image: image1,
            title: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            image: image2,
            title: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            image: image3,
            title: 'Lorem Ipsum is simply dummy text of the.'
        }
    ]


    const openModal = (item: any) => {
        // nanti item adalah id yang di passing dari hasil mapping news
        setModalIsOpen(true);

    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleUpdate = () => {
        router.push('/update_article');
    };


    const handleDetail = () => {
        router.push('/all_news/detail_news')
    }


    return (
        <DefaultLayout>
            <section className='news mb-12' id='news' >
                <div className="container mx-auto px-2 lg:p-0">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5  md:mx-0">
                        <h1 className='font-bold text-xl md:text-2xl' >Semua Berita</h1>
                    </div>
                    {/* hero 2 bottom*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                        {datahero3.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='shadow-6 p-2 rounded-md' >
                                    <Image className='w-full rounded-md' src={item.image} alt='news_btm' />
                                    <p className='text-sm md:text-base' >{item.title}</p>

                                    <div className="button-action mt-3 grid gap-2 grid-cols-2 text-sm md:text-base md:grid-cols-3 justify-between">
                                        <button className='update bg-black rounded-md py-1 px-2 text-white' onClick={handleUpdate}>
                                            Update
                                        </button>

                                        <button className='update bg-black rounded-md py-1 px-2 text-white' onClick={handleDetail}>
                                            Detail
                                        </button>

                                        <button className='update bg-red rounded-md py-1 px-2 text-white' onClick={openModal}>
                                            Delete
                                        </button>
                                    </div>

                                    {/* modal  delete*/}
                                    <Modal isOpen={modalIsOpen} >
                                        <p>Apakah anda yakin akan menghapus artikel ini ?</p>
                                        <div className="flex gap-3 mt-3">
                                            <button className='bg-black py-1 px-2 rounded-md text-white'  >Yes</button>
                                            <button className='bg-red py-1 px-2 rounded-md text-white' onClick={closeModal} >Close</button>
                                        </div>
                                    </Modal>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </section>
        </DefaultLayout>
    )
}

export default AllNewsAdmin