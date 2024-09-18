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
const pricingOptions = [
  {
    feature: 'Cost Structure',
    payPerProject: 'Variable (based on project scope)',
    monthlyRetainer: '$3,000/month (40 hours per week)',
  },
  {
    feature: 'Flexibility',
    payPerProject: 'Pay-as-you-go, ideal for one-off projects',
    monthlyRetainer: 'Fixed monthly cost, best for ongoing needs',
  },
  {
    feature: 'Overall Cost Efficiency',
    payPerProject: 'Can be higher for frequent or large projects',
    monthlyRetainer: 'Lower overall cost for regular work',
  },
  {
    feature: 'Pros',
    payPerProject: 'No long-term commitment, ideal for sporadic work',
    monthlyRetainer:
      'Consistent expertise, significant savings for regular use',
  },
  {
    feature: 'Cons',
    payPerProject: 'Potentially higher cost for frequent use',
    monthlyRetainer: 'Requires monthly commitment, less flexibility',
  },
];
const PricingModel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-black p-3 sm:p-8 text-white mt-9">
      <div className=" pt-6 ">
        <div className=''>
          <div className='w-full   flex-col ' data-aos="fade-right">
            <div className=' pt-4'>
              <h2 className="text-[30px] md:text-[47px] font-extrabold  text-white ">
                Pricing Model
              </h2>
              <div className='h-[10px] w-[350px] bg-[#601d3fe3] rounded-full'>

              </div>
            </div>

            <div className="pt-4 pb-8 ">
             
              <p className="  text-[16px] md:text-[18px] ">
                Level Up Design Studios offers you the best pricing and an unmatched quality. Our editor and animators are specifically <br/> trained to start being productive for your business from Day 1 and you won't have to waste any time finding the right fit for your team.
              </p>
            
            </div>
          </div>
          <div className="overflow-x-auto w-full   " data-aos="zoom-out">
            <table className="min-w-full table-auto bg-[#601d3f] text-left text-white rounded-lg shadow-lg border-2 border-[#6e6969]">
              <thead className="bg-[#4a1632]">
                <tr>
                  <th className="py-4 px-6 text-xl font-semibold">Feature</th>
                  <th className="py-4 px-6 text-xl font-semibold">
                    Pay Per Project
                  </th>
                  <th className="py-4 px-6 text-xl font-semibold">
                    Monthly Retainer
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingOptions.map((option, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#4a1632] ${index % 2 === 0 ? 'bg-[#6b244d]' : 'bg-[#501a3a]'
                      }`}
                  >
                    <td className="py-4 px-6 text-lg font-medium">
                      {option.feature}
                    </td>
                    <td className="py-4 px-6 text-lg">{option.payPerProject}</td>
                    <td className="py-4 px-6 text-lg">{option.monthlyRetainer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>



        <div className="w-full  mt-16 h-full " data-aos="fade-down">
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
