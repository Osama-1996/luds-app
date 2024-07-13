import React, { useState } from 'react';
import Arrow from "../../assets/images/nextarrow.svg"

const tabs = [
    {
        title: 'Video Editor',
        content: 'Starting from $50/hr',
        cards: [
            { text: 'Video Editor Plan 1', price: '$50/hr' },
            { text: 'Video Editor Plan 2', price: '$75/hr' },
            { text: 'Video Editor Plan 3', price: '$100/hr' },
            { text: 'Video Editor Plan 4', price: '$125/hr' }
        ]
    },
    {
        title: '2D Animation',
        content: 'Starting from $70/hr',
        cards: [
            { text: '2D Animation Plan 1', price: '$70/hr' },
            { text: '2D Animation Plan 2', price: '$90/hr' },
            { text: '2D Animation Plan 3', price: '$110/hr' },
            { text: '2D Animation Plan 4', price: '$130/hr' }
        ]
    },
    {
        title: '3D Animation',
        content: 'Starting from $90/hr',
        cards: [
            { text: '3D Animation Plan 1', price: '$90/hr' },
            { text: '3D Animation Plan 2', price: '$110/hr' },
            { text: '3D Animation Plan 3', price: '$130/hr' },
            { text: '3D Animation Plan 4', price: '$150/hr' }
        ]
    },
    {
        title: 'Motion Graphic Designer',
        content: 'Starting from $80/hr',
        cards: [
            { text: 'Motion Graphic Plan 1', price: '$80/hr' },
            { text: 'Motion Graphic Plan 2', price: '$100/hr' },
            { text: 'Motion Graphic Plan 3', price: '$120/hr' },
            { text: 'Motion Graphic Plan 4', price: '$140/hr' }
        ]
    }
];

const PricingModel = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-black p-3 sm:p-8 text-white">
            <div className="px-[20px] pt-6 flex flex-col md:flex-row justify-between">
                <div className='w-full md:w-[50%] me-12' data-aos="fade-right">
                    <div className="bg-[#3D155F] p-4 rounded-t-lg ps-8">
                        <h1 className="border-b-4 border-[#911A57] pb-2 inline-flex text-xl xl:text-[38px] lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-[700]">
                            Pricing Model
                        </h1>
                    </div>
                    <div className="pt-12 pb-8">
                        <h2 className="text-2xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl  font-bold mb-5">
                            Unbeatable Pricing
                        </h2>
                        <p className="mb-5  text-[23px] md:text-[30px] font-[500]">
                            Level Up Design Studios offers you the best pricing and an unmatched quality. Our editor and animators are specifically trained to start being productive for your business from Day 1 and you won't have to waste any time finding the right fit for your team.
                        </p>
                        <p className=" mb-5 text-[29px] md:text-[36px] font-[600]">
                            We guarantee Top Dollar talent in Bottom Dollar price!
                        </p>
                        <p className="mb-6 text-[23px] xl:text-[30px] font-[500]">
                            We ran a survey of over 150 competitors and the results are in! Level Up Design Studios is 50% cheaper and than all the available options in the market for your video editing and animation needs.
                        </p>
                    </div>
                </div>


                <div className="w-full md:w-[49%] mt-3" data-aos="fade-down">
                    <div className="flex justify-center mb-8">
                        <div className="bg-[#393939] p-1 rounded-full inline-flex">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-2 md:px-4 py-3 text-[12px] md:text-[16px] rounded-full font-semibold ${activeTab === index ? 'bg-gradient-to-r from-[#911A57] to-[#3D155F]' : ''}`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 pt-3">
                            {tabs[activeTab].cards.map((card, index) => (
                                <div >
                                    <div key={index} className="transition-all duration-500  ease-in-out bg-[#292929] px-4 py-6  rounded-lg flex justify-between items-center">
                                        <div>
                                            <p className="text-white">{card.text}</p>
                                            <p className="text-gray-400">{card.price}</p>
                                        </div>
                                        <input type="radio" name="pricing" className="form-radio h-4 w-4 text-pink-600" />
                                    </div>
                                    <button className="flex mt-6 bg-[#333333] text-[16px] font-[600] text-white px-4 py-2 rounded-full hover:bg-gray-700">
                                        <p className='text-sm'>Learn more</p>
                                        <div className='rounded-full bg-[#727272] p-1 ms-2 '>
                                            <img src={Arrow} alt='' className='w-3 h-3' />
                                        </div>

                                    </button>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingModel;
