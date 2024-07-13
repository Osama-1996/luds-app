import React from 'react';
import Bulb from "../../assets/images/bulb.png"

const steps = [
    //   {
    //     step: 'Problem',
    //     title: 'Problem',
    //     description: 'Working with LUDS is very simple and straightforward! From the day of our first call with you to someone working on your videos will take around 24 hours. We believe in inducting the right talent in your team and our editors are pre-trained, hand-picked experts in your niche. From social media videos to full-length feature films, and everything in between. We have a talent who is tailored to your business needs.',
    //     image: 'https://via.placeholder.com/150',
    //   },
    {
        step: 'STEP : 1',
        title: 'Discovery call',
        description: 'Your journey at LUDS starts with a quick introductory call where we get to know each other. In this call we will set expectations, learn more about your requirements and bring you up to speed to the LUDS process.',
        image: 'https://via.placeholder.com/150',
    },
    {
        step: 'STEP : 2',
        title: 'Workflow Setup',
        description: 'We set you up with your own editor or animator and create a workflow which is tailored to your needs. We set up a direct communication and reporting line so that you are always informed about your work.',
        image: 'https://via.placeholder.com/150',
    },
    {
        step: 'STEP : 3',
        title: 'Review & Feedback',
        description: 'We constantly review the work being done and gather your feedback to ensure that everything is up to your expectations. Any necessary adjustments are made promptly.',
        image: 'https://via.placeholder.com/150',
    },
    {
        step: 'STEP : 4',
        title: 'Final Delivery',
        description: 'After incorporating your feedback, we deliver the final product. We ensure that the delivery is on time and meets the high standards we promise.',
        image: 'https://via.placeholder.com/150',
    }
];

const ProblemSolution = () => {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-16 ">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12" data-aos="flip-down">
                    <div className='bg-[#911A57] flex justify-between px-11 '>
                        <h2 className="text-[22px] md:text-[34px] lg:text-[44px] xl:text-[54px] font-[600] mb-2">Problem</h2>
                        <h1 className='text-[22px] md:text-[34px] lg:text-[44px] xl:text-[54px] font-[600] mb-2'>?</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center bg-black border-4 border-[#911A57] py-10 px-4 rounded-lg shadow-md">

                        <div className=" lg:w-[32%] me-2 p-1 bg-[#911A57]">
                            <img src='https://via.placeholder.com/150' alt="" className=" mb-4 lg:mb-0 w-full h-64 object-cover" />
                        </div>
                        <div className="lg:w-[67%] px-4 text-center lg:text-left">
                            <div className="relative mb-4">
                                {/* <FaLightbulb className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-purple-800 bg-black rounded-full p-2" size={40} /> */}
                            </div>

                            <h3 className="text-[32px] font-[600] mb-2 border-b-4 border-[#911A57] inline-flex">Problem</h3>
                            <p>'Working with LUDS is very simple and straightforward! From the day of our first call with you to someone working on your videos will take around 24 hours. We believe in inducting the right talent in your team and our editors are pre-trained, hand-picked experts in your niche. From social media videos to full-length feature films, and everything in between. We have a talent who is tailored to your business needs.',</p>
                        </div>
                    </div>
                </div>
                {steps.map((step, index) => (
                    <div key={index} className="mb-12 relative" data-aos="flip-up">
                        <div className='flex justify-between'>
                            {(index === 0 || index === 2) ? (
                                <>
                                    <h2 className="text-[28px] sm:text-[45px] font-[600] bg-[#911A57] py-3 px-5">{step.step}</h2>
                                    <img src={Bulb} alt='' className='absolute mt-[-26px] sm:mt-[0px] right-[10px] sm:right-[60px]' />
                                </>
                            ) : (
                                <>
                                    <img src={Bulb} alt='' className='absolute mt-[-26px] sm:mt-[0px] left-[10px] sm:left-[60px]' />
                                    <div className='flex justify-end w-full'>
                                        <h2 className=" text-end text-[28px]  sm:text-[45px] font-[600] bg-[#911A57] py-3 px-5">{step.step}</h2>
                                    </div>

                                </>
                            )}
                        </div>
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-black border-4 border-[#911A57] py-8 px-4 rounded-lg shadow-md`}>
                            <div className="lg:w-[40%] p-4">
                                <img src={step.image} alt={step.title} className="rounded-lg mb-4 lg:mb-0 w-full h-[300px] object-cover" />
                            </div>
                            <div className="lg:w-[60%] p-4 text-center lg:text-left">
                                <div className="relative mb-4">
                                    {/* <FaLightbulb className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-purple-800 bg-black rounded-full p-2" size={40} /> */}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProblemSolution;
