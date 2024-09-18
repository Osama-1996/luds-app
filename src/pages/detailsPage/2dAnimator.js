import { useEffect } from "react";
import Tick from "../../assets/images/check.png";
import Person from "../../assets/images/skill.webp"
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"
import service4 from "../../assets/images/service4.png"
const TwoDAnimation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full h-full p-6">
      {/* Top Section with Image */}
      <div className='flex justify-center'>
        <div className='w-[90%] h-[80vh] bg-[#941958] rounded-md flex items-end justify-center'>
          <div className='rounded-full bg-black p-7 absolute '>
            <img src={Person} alt='' className='mb-[-27px] w-[370px] h-[370px]'/>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="text-center text-white px-5 md:px-20 lg:px-40">
        <h2 className="text-xl md:text-[41px] font-bold mb-5 pt-6">Skills of Our 2D Animators</h2>
        <p className="mb-16">
          Our team of 2D animators brings a blend of artistry and technical expertise. Here’s what sets
          them apart:
        </p>

        <ul className="text-left space-y-3">
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>

            <span className='text-lg '><span className='font-[600] text-2xl'>Creative Storytellers:</span> <br /> Our animators breathe life into characters and scenes. They’re not just skilled technicians;
              they’re storytellers. Imagine a storyboard unfolding, revealing characters in motion—a
              dance of creativity.
            </span>
          </li>

          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'> <span className='font-[600] text-2xl'>Hand-Drawn Mastery:</span> <br /> 2D animation thrives on hand-drawn artistry. Our animators wield digital pens like modern-day
              magicians. Picture an animator’s hand sketching intricate lines, forming characters and
              backgrounds.
            </span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'><span className='font-[600] text-2xl'>Timing and Pacing:</span> <br /> Years of hands-on work have honed their skills. They’ve tackled diverse projects, from corporate
              videos to indie films.</span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'> <span className='font-[600] text-2xl'>Attention to Detail:</span> <br /> Every frame matters. Our animators obsess over details—the twinkle in an eye, the flutter of a
              leaf. Imagine a magnifying glass zooming in on a single frame, revealing hidden nuances.

            </span>
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40 mt-2">
        <h3 className="text-3xl font-bold mb-3">Animation Services
        </h3>
        <p>Our 2D animation services cater to various needs. Here’s what we offer:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="flex  items-center ">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service1} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-9px]'>Character Animation
            </span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service2} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-8px]'>Motion Graphics</span>
          </div>
          <div className="flex  items-center pt-10">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service3} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-6px]'>Explainer Videos</span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10 pt-10">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service4} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-7px]'>Animated Shorts</span>
          </div>
        </div>
      </div>

      {/* AI-Powered Efficiency Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40">
        <h3 className="text-3xl font-bold mb-6">AI-Powered Efficiency</h3>
        <p className="mb-6">
          Our proprietary AI enhances efficiency. Here’s how it works.
        </p>
        <ul className="space-y-4">
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">1. Sketch Cleanup:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Raw sketches enter the AI pipeline. The AI refines lines, ensuring clean,
              consistent drawings
            </p>
            <p className='font-[500] pt-2'> <span className='text-[10px]'>0</span> Show rough sketches transforming into polished outlines.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">2.  In-Between Animation:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> The AI generates in-between frames, bridging gaps. Imagine a conveyor belt
              linking key poses.
            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Overlay keyframes with AI-generated in-betweens.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className=' bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">3. Fluid Motion:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px] '>0</span> AI algorithms add fluidity. Visualize a character moving smoothly—AI’s invisible
              touch.
            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Numbers (50%) emerge, signifying speed gains.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TwoDAnimation;
