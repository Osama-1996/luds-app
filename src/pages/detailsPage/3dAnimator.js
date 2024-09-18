import { useEffect } from "react";
import Tick from "../../assets/images/check.png";
import Person from "../../assets/images/skill.webp"
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"
import service4 from "../../assets/images/service4.png"
const ThreeDAnimation = () => {
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
        <h2 className="text-xl md:text-[41px] font-bold mb-5 pt-6">Skills of Our 3D Animators</h2>
        <p className="mb-16">
          Our team of 3D animators combines technical prowess with artistic vision. Here’s what sets
          them apart:
        </p>

        <ul className="text-left space-y-3">
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>

            <span className='text-lg'><span className='font-[600] text-2xl'>Digital Sculptors:</span> <br /> Think of our animators as digital sculptors. They mold virtual clay, shaping characters and
              environments. Imagine a wireframe transforming into a lifelike 3D model—a fusion of
              precision and imagination.
            </span>
          </li>

          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'><span className='font-[600] text-2xl'>Lighting Wizards:</span> <br /> Lighting is their canvas. Our animators play with shadows, reflections, and ambiance. Picture a
              dark room gradually illuminated by their magic—a symphony of light and texture.
            </span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'><span className='font-[600] text-2xl'>Rigging Architects:</span> <br /> Rigging is the backbone of animation. Our team constructs digital skeletons, allowing characters
              to move. Visualize joints connecting, like marionettes coming alive.</span>
          </li>
          <li className="flex items-start pb-8">
            <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'><span className='font-[600] text-2xl'>Fluid Motion Choreographers:</span> <br /> Every movement is choreographed. Our animators breathe life into characters—walking,
              dancing, or soaring. Imagine keyframes evolving into seamless motion—a dance of
              creativity.

            </span>
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40 mt-2">
        <h3 className="text-3xl font-bold mb-3">Animation Services
        </h3>
        <p>Our 3D animation services cater to various needs. Here’s what we offer:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="flex  items-center mb-0 md:mb-8">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service1} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-9px]'>Character Animation
            </span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10 mt-[0px] sm:mt-[-29px]">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service2} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-4px]'>Environmental Design
            </span>
          </div>
          <div className="flex  items-center">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service3} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-2px]'>Product Visualization
            </span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16 ps-0 md:ps-10">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service4} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-2px]'>Architectural Walkthroughs
            </span>
          </div>
        </div>
      </div>

      {/* AI-Powered Efficiency Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40">
        <h3 className="text-3xl font-bold mb-6">AI-Powered Efficiency</h3>
        <p className="mb-6">
          Our proprietary AI accelerates the process. Here’s how it works:
        </p>
        <ul className="space-y-4">
          <li className='  bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">1. Model Optimization:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Raw 3D models enter the AI pipeline. The AI optimizes geometry, reducing
              complexity.

            </p>
            <p className='font-[500] pt-2'> <span className='text-[10px]'>0</span> Show a detailed model simplifying into an efficient version.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className='  bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">2. Automated Rigging:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> The AI rigs characters automatically. Imagine strings attaching to joints, ready for
            animation.
            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Overlay a wireframe with rigged bones.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className='  bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">3.  Dynamic Physics Simulation:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px] '>0</span> AI algorithms simulate physics—cloth, hair, and fluid dynamics. Visualize fabric
flowing, water splashing.

            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Numbers (50%) emerge, signifying speed gains.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThreeDAnimation;
