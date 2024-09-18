

import React from 'react';
import Image1 from "../../assets/images/a1.png"
import Image2 from "../../assets/images/a2.png"
import Image3 from "../../assets/images/a3.jpg"
import Image4 from "../../assets/images/a4.jpg"
const WorkProcess = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/150', label: '01' },
        { id: 2, src: 'https://via.placeholder.com/150', label: '02' },
        { id: 3, src: 'https://via.placeholder.com/150', label: '03' },
        { id: 4, src: 'https://via.placeholder.com/150', label: '04' },
    ];

    return (
        <div className="min-h-screen pt-16">
            <div className='flex justify-center items-center flex-col pt-4'>
                <h2 className="text-[30px] md:text-[47px] font-extrabold text-center text-white ">
                    OUR PROCESS
                </h2>
                <div className='h-[10px] w-[350px] bg-[#601d3fe3] rounded-full'>

                </div>
            </div>

            <p className="text-[17px] md:text-[22px] mb-6 mx-auto px-16 text-white pt-7 leading-8 pb-12" style={{ textAlign: "justify", textAlignLast: "center" }}>
                Our process begins with advanced AI tools and our proprietary state-of-the-art workflows, which
                refine the initial raw footage, briefs, and scripts for our editors and animators. This significantly
                speeds up the initial post-production phase. Next, our skilled human editors and animators take
                over, refining the material with their creative expertise to craft a polished and engaging final
                product. This seamless collaboration ensures faster turnaround times without compromising on
                quality.
            </p>

            <div className="flex justify-between gap-4 flex-wrap px-14">
                {images.map((image) => (
                    <div key={image.id} className="relative">
                        {/* Image */}
                        <img
                            src={image.src}
                            alt={`Image ${image.label}`}
                            className="w-[260px] h-[260px] rounded-full object-cover"
                        />

                        {/* Number Badge */}
                        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#8e154e] text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                            {image.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkProcess;
