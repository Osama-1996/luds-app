import React,{useEffect} from 'react';
import Tick from "../../assets/images/check.png";
import Person from "../../assets/images/skill.webp"
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"
import service4 from "../../assets/images/service4.png"
const MotionGraphic = () => {
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
        <h2 className="text-3xl font-bold mb-4 pt-6"> Skills of Our Motion Graphic Artists</h2>
        <p className="mb-8">
          Our team of motion graphic artists combines artistic flair with technical finesse. Here’s what sets
          them apart:

        </p>

        <ul className="text-left space-y-3">
          <li className="flex items-start">
           <img src={Tick} alt='' className=' me-3 w-10 h-10'/>


            <span className='text-lg'><span className='font-[600] text-2xl'>Visual Storytellers:</span> <br /> Motion graphics are more than just animations—they’re visual narratives. Our artists craft
              stories using dynamic visuals. Imagine a storyboard unfolding, revealing scenes in motion—a
              symphony of design and movement.

            </span>
          </li>

          <li className="flex items-start">
         <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'> <span className='font-[600] text-2xl'>Design Wizards
              :</span> <br /> Every frame is meticulously designed. Our artists play with shapes, colors, and typography.
              Picture vector graphics morphing into intricate patterns—a dance of creativity.
            </span>
          </li>
          <li className="flex items-start">
         <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'><span className='font-[600] text-2xl'>Timing and Rhythm
              :</span> <br /> Motion graphics thrive on timing. Our team understands beats, transitions, and pacing. Visualize
              elements syncing seamlessly to music—a choreography of pixels.
            </span>
          </li>
          <li className="flex items-start">
         <img src={Tick} alt='' className=' me-3 w-10 h-10'/>
            <span className='text-lg'> <span className='font-[600] text-2xl'>Attention to Detail:</span> <br /> Pixel-perfect precision matters. Our artists obsess over alignment, gradients, and effects.
              Imagine a magnifying glass zooming in on a single frame, revealing hidden nuances.

            </span>
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40 mt-10">
        <h3 className="text-3xl font-bold mb-3"> Motion Graphics Services
        </h3>
        <p>Our motion graphics services cater to diverse needs. Here’s what we offer:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="flex  items-center">
            
            <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5] "><img src={service1} alt='' className='w-12 h-12 '/></div>
            <span className='font-bold text-[22px] ms-3 flex items-center mt-[-9px]'>Logo Animations

            </span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5]"><img src={service2} alt='' className='w-12 h-12'/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-4px]'>Explainer Videos

            </span>
          </div>
          <div className="flex  items-center">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5]"><img src={service3} alt='' className='w-12 h-12'/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-2px]'>Title Sequences

            </span>
          </div>
          <div className="flex  items-center ms-0 sm:ms-16">
          <div className=" mb-2 p-3 rounded-full bg-[#F5F5F5]"><img src={service4} alt='' className='w-12 h-12'/></div>
            <span className='font-bold text-[22px] ms-3 mt-[-2px]'>Social Media Assets
            </span>
          </div>
        </div>
      </div>

      {/* AI-Powered Efficiency Section */}
      <div className=" text-white py-10 px-5 md:px-20 lg:px-40">
        <h3 className="text-3xl font-bold mb-6">AI-Powered Efficiency</h3>
        <p className="mb-6">
          Our proprietary AI enhances motion graphics. Here’s how it works:
        </p>
        <ul className="space-y-4">
          <li className='bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">1. Automated Keyframing:</h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Raw designs enter the AI pipeline. The AI generates keyframes, defining motion
              paths.

            </p>
            <p className='font-[500] pt-2'> <span className='text-[10px]'>0</span> Show static graphics transforming into dynamic sequences.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className='bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">2. Dynamic Transitions:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> AI algorithms create smooth transitions. Imagine shapes morphing seamlessly.
            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span>  Overlay static shapes with fluid transitions.</p>
          </li>
          <div className='flex justify-center'>
            <div className='w-1 h-8 bg-[#929292]'></div>
          </div>
          <li className='bg-white px-4 py-4 text-black rounded-lg hover:bg-[#941958] hover:text-white'>
            <h4 className="text-xl font-semibold">3.  Efficient Rendering:
            </h4>
            <p className='font-[500] pt-2'><span className='text-[10px] '>0</span>  AI optimizes rendering settings. Visualize a render farm working efficiently.

            </p>
            <p className='font-[500] pt-2'><span className='text-[10px]'>0</span> Numbers (50%) emerge, signifying speed gains.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MotionGraphic;
