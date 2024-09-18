import React from 'react';

const stats = [
    { title: 'Working from', value: '8+ years' },
    { title: 'Projects completed', value: '2500+' },
    { title: 'Happy Clients', value: '200+' },
];

const technologies = [
    // Placeholder images; replace with actual image URLs
    { src: 'https://via.placeholder.com/150', alt: 'Technology 1' },
    { src: 'https://via.placeholder.com/150', alt: 'Technology 2' },
    { src: 'https://via.placeholder.com/150', alt: 'Technology 3' },
    { src: 'https://via.placeholder.com/150', alt: 'Technology 4' },
    { src: 'https://via.placeholder.com/150', alt: 'Technology 5' },
];

const CompanyOverview = () => {
    return (
        <div className=" ">
            {/* Statistics Section */}
            <div className="py-12 bg-gradient-to-r from-[#911A57] to-[#2B081A]">
                <div className='flex flex-col sm:flex-row justify-between mx-6 sm:mx-16  bg-black py-6 px-8'>
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black mb-4 sm:mb-0 text-white mx-4 p-6 rounded-md text-center border-[.5px] " data-aos="flip-up">
                            <h3 className="text-[19px] sm:text-[24px] font-[600]">{stat.title}</h3>
                            <p className="text-[19px] sm:text-[24px] font-[600] mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Technologies Section */}
            <div className="bg-black py-8">
                <h2 className="text-center text-[36px] font-[500] text-white mb-1" data-aos="fade-down">
                    We are working on these <span >technologies</span>
                </h2>
                <div className='flex justify-center w-full ms-[169px] ps-16 mb-12'>
                    <div className='h-[10px] w-[245px] bg-[#601d3fe3] rounded-full ms-16 '>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-10 px-4" data-aos="zoom-in-up">
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-gray-200 w-full h-[200px] mb-4 sm:mb-0 sm:w-32 sm:h-32 flex items-center justify-center rounded-lg shadow-md">
                            <img src={tech.src} alt={tech.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;
