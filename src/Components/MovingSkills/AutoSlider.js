import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react';
import Slider from "react-slick";

import { FaGithub, FaHtml5, FaNodeJs, FaReact, FaStripe, } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiFirebase, SiHeroku, SiMongodb, SiNetlify, SiRedux, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

class AutoSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: "linear",
            className: 'center',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        // initialSlide: 2
                    }
                },

            ]
        };
        return (
            <div className="text-xs md:text-lg">
                {/* <h2> Single Item</h2> */}
                <Slider {...settings}>
                    <div >
                        <FaHtml5 className=' w-9 h-9 md:w-16 md:h-16 text-[#FF6633]' />
                        <p > HTML 5</p>
                    </div>
                    <div>
                        <DiCss3 className='w-9 h-9 md:w-16 md:h-16 text-[#0066CC]' />
                        <p >   CSS 3</p>
                    </div>
                    <div>
                        <FaBootstrap className='w-9 h-9 md:w-16 md:h-16 text-[#9966CC]' />
                        <p >BootStrap</p>
                    </div>
                    <div>
                        <SiTailwindcss className='w-9 h-9 md:w-16 md:h-16 text-[#00CCCC]' />
                        <p >Tailwind</p>
                    </div>
                    <div>
                        <TbBrandJavascript className='w-9 h-9 md:w-16 md:h-16 text-[#006699]' />
                        <p >JavaScript</p>
                    </div>
                    <div>
                        <FaReact className='w-9 h-9 md:w-16 md:h-16 text-[#59DCFA]' />
                        <p > ReactJs</p>
                    </div>
                    <div>
                        <SiMongodb className='w-9 h-9 md:w-16 md:h-16 text-[#339933]' />
                        <p >MontoDB</p>
                    </div>
                    <div>
                        <SiHeroku className='w-9 h-9 md:w-16 md:h-16 text-[#6666CC]' />
                        <p > Heroku</p>
                    </div>
                    <div>
                        <SiFirebase className='w-9 h-9 md:w-16 md:h-16 text-[#FF9900]' />
                        <p >Firebase</p>
                    </div>
                    <div>
                        <FaStripe className='w-9 h-9 md:w-16 md:h-16 text-[#6666CC]' />
                        <p >  Stripe</p>
                    </div>
                    <div>
                        <FaNodeJs className='w-9 h-9 md:w-16 md:h-16 text-[#669966]' />
                        <p > NodeJS</p>
                    </div>

                    <div>
                        <SiRedux className='w-9 h-9 md:w-16 md:h-16 text-[#9966CC]' />
                        <p >  Redux</p>
                    </div>
                    <div>
                        <SiNetlify className='w-9 h-9 md:w-16 md:h-16 text-[#0296aa]' />
                        <p >  Netlify</p>
                    </div>
                    <div>
                        <FaGithub className='w-9 h-9 md:w-16 md:h-16 text-[#ffffff]' />
                        <p> GitHub</p>
                    </div>
                    <div>
                        <SiVisualstudiocode className='w-9 h-9 md:w-16 md:h-16 text-[#036fc7]' />
                        <p > VsCode</p>
                    </div>
                </Slider>
            </div>
        );
    }
};

export default AutoSlider;