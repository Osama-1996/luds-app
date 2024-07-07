import { useState, useEffect } from "react";
import Video from "../../assets/video/banner.mp4"
import Monitor from "../../assets/images/pc.PNG"
import AOS from 'aos';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const Aboutdata = [
        {
            title: "WHAT WE DO?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel convallis quam. Vivamus ornare, enim eget mattis aliquet, nunc ex eleifend ex, eu ultricies nibh ligula vel risus."
        },
        {
            title: "WHAT WE BELIEVE?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel convallis quam. Vivamus ornare, enim eget mattis aliquet, nunc ex eleifend ex, eu ultricies nibh ligula vel risus."
        },
        {
            title: "REACH",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel convallis quam. Vivamus ornare, enim eget mattis aliquet, nunc ex eleifend ex, eu ultricies nibh ligula vel risus."
        }
    ];
    const teamMembers = [
        {
            name: "John Doe",
            image: "https://source.unsplash.com/random/100x100?person1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Jane Smith",
            image: "https://source.unsplash.com/random/100x100?person2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Michael Brown",
            image: "https://source.unsplash.com/random/100x100?person3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
        {
            name: "Emily White",
            image: "https://source.unsplash.com/random/100x100?person4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod enim et volutpat ornare.",
        },
    ];

    return (
        <>
            {/* navbar */}
            <nav className="w-full bg-transparent absolute z-10 top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src={Logo} className="h-8" alt="Logo" /> */}
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="flex">
                            <a href="#products">
                                <button
                                    type="button"
                                    className="text-[#ffffff] bg-[#5f6464] focus:outline-none font-medium rounded-sm text-md px-7 py-1 rounded-full text-center border-2 border-[#5f6464]"
                                >
                                    Contact Us
                                </button>
                            </a>

                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 ps-2`}
                        id="navbar-sticky"
                    >
                        <ul className=" flex flex-col px-4 items-center font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#home"
                                    className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] hover:border-b-4 border-b-4 border-transparent hover:border-[#901854] font-[700]"
                                    aria-current="page"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] hover:border-b-4 border-b-4 border-transparent hover:border-[#901854] font-[700]"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] hover:border-b-4 border-b-4 border-transparent hover:border-[#901854] font-[700]"
                                >
                                    Our Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] hover:border-b-4 border-b-4 border-transparent hover:border-[#901854] font-[700]"
                                >
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] hover:border-b-4 border-b-4 border-transparent hover:border-[#901854] font-[700]"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="relative h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col  justify-center h-full text-white px-[80px]" data-aos="zoom-in-up">
                    <h1 className="text-5xl font-[500]">Level Up Design Studios</h1>
                    <p className="text-[18px] font-[400] my-7">Focus on your business and let us take care of all your editing and animation needs.</p>
                    <div>
                        <a href="#products">
                            <button
                                type="button"
                                className="text-[#ffffff] bg-[#5f6464] focus:outline-none font-medium rounded-sm text-md px-7 py-1 rounded-full text-center border-2 border-[#5f6464]"
                            >
                                Let's Talk
                            </button>
                        </a>


                    </div>

                </div>
            </div>

            {/* aboutus */}
            <div className="bg-black text-white p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos="fade-down">
                            <h2 className="text-4xl font-bold  border-b-4" style={{ display: 'inline', borderBottomColor: '#86164e' }} >ABOUT US</h2>
                            <p className="mb-4 pt-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel convallis quam.
                                Vivamus ornare, enim eget mattis aliquet, nunc ex eleifend ex, eu ultricies nibh ligula vel risus.
                                Morbi euismod tincidunt libero, in viverra ipsum pellentesque et. Curabitur u llamcorper non nibh sit
                                amet efficitur. Morb i tellus sapien, iaculis ut massa vel, pretium blandit nunc. Duis consequat auctor
                                semper. Nullam dapibus erat eu erat porta bland.
                            </p>
                        </div>
                        <div className="flex justify-center items-center" data-aos="zoom-in-up">
                            <img src={Monitor} alt="" className="w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-6" data-aos="fade-up"
                    >
                        {Aboutdata.map((item, index) => (
                            <div key={index} className="flex flex-col items-center w-full">
                                <h3 className="text-2xl text-center font-bold mb-2 border-b-2" style={{ display: 'inline', borderBottomColor: '#86164e' }}>{item.title}</h3>
                                <p className="pt-5 text-center">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ourTeam */}
            <div className="bg-gradient-to-b from-[#050105] to-[#321423] py-16" >
                <div className="text-center text-white mb-12 pt-8" data-aos="fade-down">
                    <h2 className="text-3xl font-bold border-b-4" style={{ display: 'inline', borderBottomColor: '#86164e' }}>OUR TEAM</h2>
                   
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6" data-aos="zoom-in-up">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-[#6e6969] rounded-lg p-6 text-center h-[300px]">
                            <img
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                                src={member.image}
                                alt={member.name}
                            />
                            
                            <p className="text-white mt-2">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default HomePage;