import React from 'react';
import Slider from 'react-slick';
import Comma from "../../assets/images/comma.svg";
import Slide1 from "../../assets/images/slide1.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide3.png";

const testimonials = [
    {
        text: "Luds excels in both 2D and 3D animation, bringing our creative visions to life with precision and flair. Their dedication to quality and timely delivery makes them our top choice for animation services.",
        rating: 5,
        icon: Slide1
    },
    {
        text: "Luds consistently delivers exceptional results in animation and video editing. Their professionalism, creativity, and commitment to client satisfaction make them our trusted partner.",
        rating: 5,
        icon: Slide2
    },
    {
        text: "Partnering with Luds for graphic animation and video editing has been transformative. Their blend of creativity and technical expertise ensures every project exceeds our expectations.",
        rating: 5,
        icon: Slide3
    }
];

const TestimonialsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024, // lg
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640, // sm
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // xs
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="w-full overflow-x-hidden py-8 bg-black text-center">
            <h2 className="text-center text-[48px] font-[600] mb-12 border-b-4 border-[#911A57] text-white inline-flex">TESTIMONIALS</h2>
            <Slider {...settings} className='px-16'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`px-7 ${index % 3 === 1 ? 'lg:mt-0 mt-0' : 'lg:mt-16 mt-16'}`}>
                        <div className="bg-white rounded-lg py-8 shadow-lg text-center h-[400px]" >
                            <img src={Comma} alt='' className='w-[90px] mx-auto' />
                            <p className="text-[22px] font-[500] mb-6 pt-5 px-6">{testimonial.text}</p>
                            <div className='flex justify-between px-5'>
                                <div className="flex items-center justify-center mb-4">
                                    <img src={testimonial.icon} alt="" className=" mr-2" />
                                    
                                </div>
                                <div className="flex justify-center">
                                    {[...Array(testimonial.rating)].map((star, i) => (
                                        <span key={i} className="text-yellow-500 text-[25px]">★</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialsCarousel;
