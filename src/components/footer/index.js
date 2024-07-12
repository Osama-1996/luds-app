import React from 'react';
import { FaLinkedin, FaDribbble, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#181818] text-white py-16 pt-8">
            <div className="container mx-auto px-8 ">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/* Left Column */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-[40px] font-[700] mb-4">Tell us about your project</h2>
                        <button className="bg-[#FFFFFF66] text-[23px] font-[500] text-[#121519] px-10 py-2 rounded-full mb-8">Say Hi!</button>
                        <hr className="border-[#FFFFFF66] mb-8" />
                        <h3 className="text-[45px] font-[500] mb-9">Our offices</h3>
                        <p className="text-[35px] font-[600]">Pakistan</p>
                        <p>xxxxxxxx</p>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 lg:pl-16">
                        <h2 className="text-[40px] font-[400] mb-4">Sign up for our newsletter</h2>
                        <p className="mb-4 text-[24px] font-[300]">Subscribe to get the latest design news, articles, resources and inspiration</p>
                        <div className="flex mb-8">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border-[1px] rounded-full border-[#FFFFFF] bg-[#181818] text-white px-4 py-2  w-full focus:outline-none"
                            />
                            {/* <button className="bg-gray-700 text-white px-4 py-2 rounded-r-full">
                                <FaArrowRight />
                            </button> */}
                        </div>
                        <p className='text-[13px] font-[500] pb-3 pt-16'>CONNECT WITH US</p>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.linkedin.com" aria-label="LinkedIn">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://www.dribbble.com" aria-label="Dribbble">
                                <FaDribbble className="text-2xl" />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="https://www.facebook.com" aria-label="Facebook">
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a href="https://www.twitter.com" aria-label="Twitter">
                                <FaTwitter className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
