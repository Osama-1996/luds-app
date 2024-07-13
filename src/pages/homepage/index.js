import React, { useState } from 'react';
import Video from "../../assets/video/banner.mp4";
import AnimatedCursor from "react-animated-cursor";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="relative h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center h-full text-white pt-10 px-[10px] md:px-[80px]" data-aos="fade-right">
                    <h1 className="text-[28px] md:text-[64px] text-[#911A57] font-[800] m-0">Level Up Design Studios</h1>
                    <p className="text-[23px] font-[600] w-full sm:w-[90%] md:w-[60%] my-0 py-3">Focus on your business and let us take care of all your editing and animation needs.</p>
                    <div className="flex mt-5">
                        <a href="#products">
                            <button
                                type="button"
                                className="text-[#ffffff] bg-[#8D8D8D6E] hover:opacity-75 focus:outline-none font-medium rounded-full text-md px-7 py-1.5 text-center border-2 border-[#5f6464] mr-4 button-animation"
                            >
                                Let's Talk
                            </button>
                        </a>
                        <button
                            onClick={toggleModal}
                            className="text-[#ffffff] bg-[#911a57] hover:opacity-75 focus:outline-none font-medium rounded-full text-md px-7 py-1.5 text-center border-2 border-[#911a57] mr-4 button-animation"
                            type="button"
                        >
                           Learn more
                        </button>
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
        </>
    );
};

export default HomePage;
