import { useState, useEffect } from "react";
import Video from "../../assets/video/banner.mp4"

const HomePage = () => {

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
                <div className="relative z-10 flex flex-col  justify-center h-full text-white pt-10 px-[80px]" data-aos="zoom-in-up">
                    <h1 className="text-[64px] text-[#911A57] font-[800] m-0">Level Up Design Studios</h1>
                    <p className="text-[24px] font-[600]  w-[60%] my-0">Focus on your business and let us take care of all your editing and animation needs.</p>
                    <p className="text-[22px] font-[500] pt-3 w-[60%] my-0">Welcome to LUDS, a state-of-the-art post-production studio build on the principle of providing the best video editing, motion graphics, 2D animation and 3D animation services to its clients. Our editors and animators are pre vetted and handpicked industry experts, here to serve you and your business. Do you have a need for editors, animators, or graphic designers?</p>
                    <div>
                        <a href="#products">
                            <button
                                type="button"
                                className="text-[#ffffff] bg-[#8D8D8D6E] focus:outline-none font-medium rounded-full text-md mt-5 px-7 py-1 rounded-full text-center border-2 border-[#5f6464]"
                            >
                                Let's Talk
                            </button>
                        </a>


                    </div>

                </div>
            </div>
        </>
    )
}
export default HomePage;