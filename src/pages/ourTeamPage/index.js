import React from 'react';
import { useNavigate } from 'react-router-dom';
import Person1 from "../../assets/images/person1.jpg"
import Person2 from "../../assets/images/person2.jpeg"
import Person3 from "../../assets/images/person3.webp"
import Person4 from "../../assets/images/person4.avif"
const teamMembers = [
  {
    name: 'Person 1',
    role: 'Video Editor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.',
    image: Person1, // Replace with the actual image URL or file path
    route: "/video-details"
  },
  {
    name: 'Person 2',
    role: '2D Animator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.',
    image: Person2, // Replace with the actual image URL or file path
    route: "/2danimation-details"
  },
  {
    name: 'Person 3',
    role: '3D Animator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.',
    image: Person3, // Replace with the actual image URL or file path
    route: "/3danimation-details"
  },
  {
    name: 'Person 4',
    role: 'Motion Graphic Artist',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.',
    image: Person4, // Replace with the actual image URL or file path
    route: "/motiongraphic-details"
  },
];

const Team = () => {
  const navigate = useNavigate()
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className='flex flex-col items-center justify-center pt-4'>
          <h2 className="text-[30px] md:text-[47px] font-extrabold text-center text-white ">
            Our Team
          </h2>
          <div className='h-[10px] w-[247px] bg-[#601d3fe3] rounded-full'>

          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-14">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              onClick={() =>
                navigate(member.route)
              }
              className="bg-[#6e6969] p-6 rounded-lg text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-md text-gray-300 font-bold mb-4">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
