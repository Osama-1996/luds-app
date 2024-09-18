import React, { useEffect } from 'react';
import Tick from "../../assets/images/check.png";
import Person from "../../assets/images/skill.webp"
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"
import service4 from "../../assets/images/service4.png"
const VideoEditorSkills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full h-full p-6">
      <div className='flex justify-center'>
        <div className='w-[90%] h-[80vh] bg-[#941958] rounded-md flex items-end justify-center'>
          <div className='rounded-full bg-black p-7 absolute '>
            <img src={Person} alt='' className='mb-[-27px] w-[370px] h-[370px]'/>
          </div>
        </div>
      </div>




      {/* Skills Section */}
      <div className="text-center text-white px-5 md:px-20 lg:px-40">
        <h2 className="text-xl md:text-[41px] font-bold mb-5 pt-6">SKILLS OF OUR VIDEO EDITORS</h2>
        <p className="mb-16">
          Our editors and animators are pre-trained, hand-picked experts ready to become a part of your
          team and seamlessly assimilating into your workflow. We hand pick and screen our video
          editors to make sure they bring top notch skills to the table. If you hire us, you’ll get
        </p>

        <ul className="text-left space-y-3">
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10' />

            <span className='text-lg '><span className='font-[600] text-2xl'>Creativity:</span> <br /> Our editors don’t just cut and splice; they weave narratives. Their creative flair transforms raw
              footage into compelling stories.
            </span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10' />
            <span className='text-lg'><span className='font-[600] text-2xl'>Experience That Matters:</span> <br /> Years of hands-on work have honed their skills. They’ve tackled diverse projects, from corporate
              videos to indie films.</span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10' />
            <span className='text-lg'> <span className='font-[600] text-2xl'>Reliability:</span> <br /> Deadlines are sacred to us. Our editors are like clockwork—consistent, dependable, and
              committed.
            </span>
          </li>
          <li className="flex items-start">
            <img src={Tick} alt='' className=' me-3 w-10 h-10' />
            <span className='text-lg'> <span className='font-[600] text-2xl'>Seamlessness:</span> <br /> Our team integrates seamlessly into your processes. They’re not just editors; they’re
              collaborators.
            </span>
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40 mt-2">
        <h3 className="text-3xl font-bold mb-3">OUR SERVICES</h3>
        <p>Our video editors provide a comprehensive suite of services tailored to your needs. Here’s what
          you can expect:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          <div className="flex  items-center mb-0 md:mb-8 ">
            <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service1} alt='' className='w-12 h-12 ' /></div>
            <span className='font-bold text-[22px] ms-3'>Dynamic Motion <br /> Graphics</span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10 mt-[0px] sm:mt-[-29px]">
            <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service2} alt='' className='w-12 h-12 ' /></div>
            <span className='font-bold text-[22px] ms-3'>Professional Color <br /> Grading</span>
          </div>
          <div className="flex  items-center">
            <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service3} alt='' className='w-12 h-12 ' /></div>
            <span className='font-bold text-[22px] ms-3 mt-[-8px]'>Sound Design</span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10">
            <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service4} alt='' className='w-12 h-12 ' /></div>
            <span className='font-bold text-[22px] ms-3 mt-[-7px]'>Precise Editing</span>
          </div>
        </div>
      </div>

      {/* AI-Powered Efficiency Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40">
        <h3 className="text-3xl font-bold mb-6">AI-Powered Efficiency</h3>
        <p className="mb-6">
          Our AI-powered editing tools optimize video editing workflows, reducing the time needed to process raw footage
          and allowing our team to focus on the creative aspects of your project.
        </p>
        <ul className="space-y-4">
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">1. Raw File Processing:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Imagine a conveyor belt feeding raw footage into an AI machine. The AI swiftly
              trims the fat, leaving behind a streamlined skeleton.
            </p>
            <p className='font-[500] pt-2'> <span className='text-[10px]'>0</span> To Show raw clips entering one end and emerging as simplified outlines at the
              other.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">2. Human Expertise Takes Over:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Our skilled editors step in. They’re like artists adding flesh to the bones. Picture
              an editor holding a brush, filling in details</p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Overlay the AI skeleton with an editor’s touch—details materializing.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">3. 50% Faster Workflow:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px] '>0</span> A stopwatch ticks faster as AI and human collaboration speeds up the process.
              Show gears interlocking, symbolizing efficiency.
            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Numbers (50%) emerge from the gears, emphasizing the speed gain.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoEditorSkills;
