import React from 'react';

const CreativeHiring = () => {
    return (
        <div className="py-16  flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0B0B0B] to-[#601d3fe3] ps-12 pe-7">
            <div className="w-[90%] md:w-[40%] rounded-lg h-[400px] md:h-[550px] me-8   mt-5" data-aos="zoom-in-down">
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Placeholder"
                    className=" h-full object-cover rounded-lg w-full"
                />
            </div>
            <div className="flex flex-col justify-center text-white py-12 w-full  md:w-[60%] px-4" data-aos="fade-left">
                <h1 className="text-[#911A57] text-2xl xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl font-[800] mb-4">
                    Hiring the right creative for your business is tough right?
                </h1>
                <p className="text-[18px] font-[600] mb-4">
                    Well that is why <span className="text-pink-500">LUDS</span> is here. Imagine scaling your business without that headache!
                </p>
                <p className="text-[18px] font-[500] mb-4">
                    Our editors and animators are pre-trained, hand-picked experts ready to become part of your team and seamlessly assimilating into your workflow. You would never have to run behind people to get your videos made any more. We understand how crucial it is for your business to get the projects done on time and that is why we have a complete system designed to make your life easier!
                </p>
                <p className="text-[18px] font-[500] mb-4">
                    We will ensure we cover all your bases when it comes to <span className="text-pink-500">video editing, motion Graphics, 2D animation and 3D animation</span>. The four principles we have designed our system around are:
                </p>
                <ul className="mb-4">
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">C</span>reativity</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">R</span>eliability</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">S</span>eamlessness</li>
                    <li className='text-[24px] font-[700]'><span className="text-pink-500">P</span>ocket-friendliness</li>
                </ul>
            </div>
        </div>
    );
};

export default CreativeHiring;
