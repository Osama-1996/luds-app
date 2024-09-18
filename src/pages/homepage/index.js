import React, { useState } from 'react';
import Video from "../../assets/video/banner.mp4";
import Header from '../../components/header';
import Process from '../../pages/process/process';
import TestimonialsCarousel from '../../pages/testimonials';
import TechnologyStacks from "../../pages/technologyStack"
import MeetingDate from '../../pages/meetingDate';
import Contactus from '../../pages/contactUs';
import CreativeHiring from '../../pages/creativeHiring';
import PricingModel from '../../pages/pricingmodal';
import ProblemSolution from '../../pages/problemSolution';
import OurTeamPage from '../../pages/ourTeamPage';
import Footer from '../../components/footer';
import Hero from "../../assets/images/hero (2).png"
const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Header />
            <div className="relative h-screen overflow-hidden">
                {/* <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="150x150"
                >

                </img> */}
                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="flex items-center">
                    <div className="relative z-10 flex flex-col justify-center h-full text-white  px-[10px] md:px-[50px] leading-[60px] justify-center pt-[160px] mt-16" data-aos="fade-right">
                        <h1 className="text-[28px] md:text-[57px] text-[#911A57] font-[800] m-0">Level Up Design Studios <br /><span className='text-[20px] md:text-[40px] text-white'>Empowering Creativity with AI</span></h1>
                        <p className="text-[20px] font-[600] w-full  my-0 py-1">Hire Top-Tier, Pre-Vetted <b>Editors</b> ,<b> Motion Graphic Artists</b>, and <b>Animators</b> </p>
                        <div className="flex mt-5">
                            <a href="#products">
                                <button
                                    type="button"
                                    className="button text-black bg-[#FFFFFF] hover:opacity-75 focus:outline-none font-medium rounded-md text-sm px-6 py-5 text-center mr-4"
                                >
                                    <span className="button-text">CHECK OUR SERVICES</span>
                                </button>
                            </a>
                            {/* <button
                            onClick={toggleModal}
                            className="button text-[#ffffff] bg-[#911a57] hover:opacity-75 focus:outline-none font-medium rounded-full text-md px-7 py-1 text-center border-2 border-[#911a57] mr-4"
                            type="button"
                        >
                            <span className="button-text">Learn more</span>
                        </button> */}
                        </div>
                    </div>
                    <div className='relative z-10 flex flex-col justify-center items-center h-full text-white justify-center pt-16 mt-16 '>
                        <img src={Hero} alt='' className='w-[400px] h-[400px] me-10'/>
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Welcome to LUDS
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleModal}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-7 space-y-8">
                            <p className="text-[20px] leading-relaxed text-gray-500 dark:text-gray-400 font-[500]">
                                Welcome to LUDS, a state-of-the-art post-production studio built on the principle of providing the best video editing, motion graphics, 2D animation, and 3D animation services to its clients. Our editors and animators are pre-vetted and handpicked industry experts, here to serve you and your business. Do you have a need for editors, animators, or graphic designers?
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <CreativeHiring />
            <Process />
            <OurTeamPage />
            <PricingModel />
            <ProblemSolution />
            <TestimonialsCarousel />
            <TechnologyStacks />
            <MeetingDate />
            <Contactus />
            <Footer />
        </>
    );
};

export default HomePage;
