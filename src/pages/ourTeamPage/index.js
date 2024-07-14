import React from 'react';
import Arrow from "../../assets/images/nextarrow.svg";

const teamMembers = [
    {
        title: 'Video Editors',
        description: 'Hire an expert video editor in your niche who exactly understands what your visual needs are',
        buttonText: 'Learn more',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        title: 'Motion Graphic Designers',
        description: 'Hire an expert motion graphic designer to create visually captivating animations, transitions, and visual effects for your company and clients',
        buttonText: 'Learn more',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        title: '3D Animators',
        description: 'Hire an expert 3D animator who understands everything in and out about your project. From 3D modelling to rigging and their animations. We’ve got every base covered.',
        buttonText: 'Learn more',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        title: '2D Animators',
        description: 'Hire an expert 2D animator to take care of all your 2D animation needs. From storyboarding to illustration and then the animations, our experts are ready to make your next project a reality.',
        buttonText: 'Learn more',
        imgSrc: 'https://via.placeholder.com/150'
    }
];

const TeamSection = () => {
    return (
        <div className="flex flex-col items-center bg-[#911A57] py-12">
            <h2 className="border-b-4 border-[#911A57] text-white text-3xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-bold mb-14 mt-3" data-aos="fade-down">
                OUR TEAM
            </h2>
            <div className="grid gap-8 px-16 
                xl:grid-cols-4 lg:grid-cols-4 
                md:grid-cols-2 sm:grid-cols-2 
                xs:grid-cols-1" data-aos="zoom-in-up">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center rounded-xl overflow-hidden"
                    >
                        <img
                            src={member.imgSrc}
                            alt={member.title}
                            className="w-full h-[350px] object-cover rounded-xl"
                        />
                        <div className="flex flex-col p-4">
                            <h3 className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[35px] font-[700] text-white mb-2 text-center">{member.title}</h3>
                            <p className="text-[15px] font-[300] text-white mb-4 text-center">{member.description}</p>
                            <button className="button flex items-center bg-[#333333] text-[16px] font-[600] text-white px-4 py-2 rounded-full hover:bg-gray-700 mx-auto">
                              <span className="button-text"> {member.buttonText}</span> 
                                <div className='rounded-full bg-[#727272] p-1 ms-2 button-text'>
                                    <img src={Arrow} alt='Arrow' />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
