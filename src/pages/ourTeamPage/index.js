import React from 'react';

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
    <div className="flex flex-col items-center bg-gradient-to-b from-black to-purple-900 py-12">
      <h2 className="text-white text-3xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-bold mb-8">
        OUR TEAM
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-full xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-3/4 xs:w-11/12 flex flex-col items-center"
          >
            <img
              src={member.imgSrc}
              alt={member.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{member.title}</h3>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
                {member.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
