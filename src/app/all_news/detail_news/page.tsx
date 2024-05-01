import { detailnews, human1, logo1, logo2 } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import About from '@/organism/about';
import Footer from '@/organism/footer';

const DetailNews = () => {
    const image = true
    return (
        <section className="detail-news" id='detail-news'>
            <div className="flex justify-center items-center m-3 md:m-5 gap-5">
                <Image className='md:w-32 w-24  border-r-2 border-[#929292] pr-4' src={logo1} alt="logo" />
                <Image className='md:w-13 w-9' src={logo2} alt="logo" />
            </div>

            <section className="detail-content container mx-auto mt-16">
                <div className="title-date">
                    <h1 className='font-bold text-xl md:text-2xl text-justify' >Calorie restriction in humans builds strong muscle and stimulates healthy aging genes</h1>
                    <h2 className='font-bold text-xl md:text-2xl text-justify mt-4 text-primaryred' >30 Maret 2024</h2>
                </div>

                <div className="author flex justify-between mt-3 border-y-2 border-[#929292] py-3 px-2">
                    <div className="profile flex gap-4">
                        <Image className='w-10 h-10' src={human1} alt='profile' />
                        <div className="name">
                            <h1 className='text-base'>Ahmad Zilong</h1>
                            <h2 className='text-primaryred text-sm' >Author</h2>
                        </div>
                    </div>

                    <div className="contact flex gap-4 justify-center items-center">
                        <RiFacebookBoxLine size={31} />
                        <FaWhatsapp size={31} />
                        <MdOutlineEmail size={31} />
                    </div>
                </div>


                <div className="desc mt-3">
                    <p className='text-justify text-sm md:text-base' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        From April to December 2024, NIA will host a webinar series on Common Data Elements (CDE). The NIA CDE webinar series will allow the NIA community to connect with AD/ADRD and aging research while facilitating discussions about resulting research findings and other information as it relates to CDEs.
                        {image ? <Image className='my-3 mx-2 float-end w-55.5 ' src={detailnews} alt="detailnews" /> : null}
                        An NIA-funded study supports a predictive link between personality traits and dementia. The study found that conscientiousness, extraversion, and positive affect were associated with a lower risk for dementia while neuroticism and negative affect were associated with an increased risk. However, no associations were found between personality traits and dementia-related brain changes. The results, published in Alzheimer’s and Dementia, the Journal of the Alzheimer’s Association,
                        may help researchers understand whether changes in personality can predict one’s risk for dementia.
                    </p>

                </div>

                <div className="youtube my-8">
                    <iframe className="w-full aspect-video " src="https://www.youtube.com/embed/8BcPHWGQO44?si=ydHzOfAhHFZcmsq2"></iframe>
                </div>


            </section>

            <About />
            <Footer />
        </section>
    )
}

export default DetailNews