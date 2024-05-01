import TextEditor from '@/components/fragemnts/TextEditor/TextEditor'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import React from 'react'


const UpdateArticle = () => {

    return (
        <DefaultLayout >
            <div className="flex justify-between border-b-2 border-gray-300 py-3  md:mx-0">
                <h1 className='font-bold text-xl md:text-2xl' >Update Article</h1>
            </div>

            <section className="content-articles mt-7">

                <div className="title-article my-3">
                    <div className="input-search flex bg-slate-300 justify-between items-center py-3 px-2 rounded-md">
                        <input className='bg-transparent outline-none w-[100%] placeholder-slate-500 font-medium' type="text" placeholder='Masukan Judul Artikel' />
                    </div>
                </div>

                <div className="link-vidio my-3">
                    <div className="input-vidio flex bg-slate-300 justify-between items-center py-3 px-2 rounded-md">
                        <input className='bg-transparent outline-none w-[100%] placeholder-slate-500 font-medium' type="text" placeholder='Masukan Link Vidio Youtube' />
                    </div>
                </div>

                <div className="image-article ">
                    <input className=" bg-slate-300 justify-between items-center py-3 px-2 w-full rounded-md cursor-pointer text-slate-500 " type="file" />
                </div>

                <div className="flex justify-between border-b-2 border-gray-300 py-3 my-10 md:mx-0">
                    <h1 className='font-bold text-xl md:text-2xl' >Deskripsi</h1>
                </div>

                <TextEditor desc='ini adalah data yang nanti di passing saat update' />
            </section>
        </DefaultLayout >
    )
}

export default UpdateArticle