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
                <div className='flex justify-between mx-16  bg-black py-6 px-8'>
                {stats.map((stat, index) => (
                    <div key={index} className="bg-black text-white mx-4 p-6 rounded-md text-center border-[.5px] ">
                        <h3 className="text-[24px] font-[600]">{stat.title}</h3>
                        <p className="text-[24px] font-[600] mt-2">{stat.value}</p>
                    </div>
                ))}
                </div>
              
            </div>

            {/* Technologies Section */}
            <div className="bg-black py-8">
                <h2 className="text-center text-[36px] font-[500] text-white mb-8">
                    We are working on these <span className='border-b-4 border-[#911A57]'>technologies</span> 
                </h2>
                <div className="flex justify-center space-x-10 px-4">
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-gray-200 w-32 h-32 flex items-center justify-center rounded-lg shadow-md">
                            <img src={tech.src} alt={tech.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;
