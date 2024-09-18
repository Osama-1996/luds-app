import React from 'react';
import Intro from "../../assets/images/intro.png"
const CreativeHiring = () => {
    return (
        <div className="py-16  flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  min-h-screen  ps-12 pe-7">

            <div className="flex flex-col  text-white py-12 w-full  md:w-[60%] px-4" data-aos="fade-left">
                <div >
                    <h2 className="text-[30px] md:text-[49px] font-extrabold  text-white ">
                        Introduction
                    </h2>
                    <div className='h-[10px] w-[330px] bg-[#601d3fe3] rounded-full'>

                    </div>
                </div>
                <p className="text-[18px] md:text-[27px]  mb-4 pe-0 md:pe-16 pe-0 md:me-16 leading-8 pt-6" >
                    We’re a first-of-its-kind AI-powered and technology-driven post-production company. We take
                    pride in the fact that our state-of-the-art, sophisticated AI processes allow us to deliver results
                    50% faster and up to 5 times cheaper than conventional editing and animation studios.

                </p>
                {/* <p className="text-[18px] font-[500] mb-4">
                    Our editors and animators are pre-trained, hand-picked experts ready to become part of your team and seamlessly assimilating into your workflow. You would never have to run behind people to get your videos made any more. We understand how crucial it is for your business to get the projects done on time and that is why we have a complete system designed to make your life easier!
                </p> */}
                {/* <p className="text-[18px] font-[500] mb-4">
                    We will ensure we cover all your bases when it comes to <span className="text-pink-500">video editing, motion Graphics, 2D animation and 3D animation</span>. The four principles we have designed our system around are:
                </p>
                <ul className="mb-4">
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">C</span>reativity</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">R</span>eliability</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">S</span>eamlessness</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">P</span>ocket-friendliness</li>
                </ul> */}
            </div>
            <div className="w-[90%] md:w-[39%] rounded-lg h-[400px] md:h-[500px] me-8   mt-5" data-aos="zoom-in-down">
                <img
                    src={Intro}
                    alt="Placeholder"
                    className=" h-full object-cover rounded-lg w-full"
                />
            </div>
        </div>
    );
};

export default CreativeHiring;
