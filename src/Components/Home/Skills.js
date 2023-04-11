import React from 'react';
import { FaHtml5, FaNodeJs, FaReact, FaStripe, } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiFirebase, SiHeroku, SiMongodb, SiNodemon, SiRedux, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const Skills = () => {
    return (
        <div className='w-full pr-5'>
            <div className='bg-secondary bg-cover w-full my-7'>
                <div className='pl-3'>
                    <p className='z-10 text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Skills</p>
                    <p className='text-4xl md:text-6xl font-semibold text-gray-700'>My Skills</p>
                </div>

                {/* content */}
                <div className='my-10 pb-7 pl-3 grid gap-x-auto grid-cols-5 md:grid-cols-12'>
                    <span className="tooltip" data-tip="HTML5">
                        <FaHtml5 className='w-12 h-12 text-[#FF6633]' />
                    </span>
                    <span className="tooltip" data-tip="CSS 3">
                        <DiCss3 className='w-12 h-12 text-[#0066CC]' />
                    </span>
                    <span className="tooltip" data-tip="BootStrap">
                        <FaBootstrap className='w-12 h-12 text-[#9966CC]' />
                    </span>
                    <span className="tooltip" data-tip="Tailwind">
                        <SiTailwindcss className='w-12 h-12 text-[#00CCCC]' />
                    </span>
                    <span className="tooltip" data-tip="JavaScript">
                        <TbBrandJavascript className='w-12 h-12 text-[#006699]' />
                    </span>
                    <span className="tooltip" data-tip="React Js">
                        <FaReact className='w-12 h-12 text-[#59DCFA]' />
                    </span>
                    <span className="tooltip" data-tip="MongoDB">
                        <SiMongodb className='w-12 h-12 text-[#339933]' />
                    </span>
                    <span className="tooltip" data-tip="Heroku">
                        <SiHeroku className='w-12 h-12 text-[#6666CC]' />
                    </span>
                    <span className="tooltip" data-tip="Firebase">
                        <SiFirebase className='w-12 h-12 text-[#FF9900]' />
                    </span>
                    <span className="tooltip" data-tip="Stripe">
                        <FaStripe className='w-12 h-12 text-[#6666CC]' />
                    </span>
                    <span className="tooltip" data-tip="NodeJS">
                        <FaNodeJs className='w-12 h-12 text-[#669966]' />
                    </span>
                    {/* <span className="tooltip" data-tip="Nodemon">
                        <SiNodemon className='w-12 h-12 text-[#66CC66]' />
                    </span> */}
                    <span className="tooltip" data-tip="Redux">
                        <SiRedux className='w-12 h-12 text-[#9966CC]' />
                    </span>



                </div>
            </div>
        </div>
    );
};

export default Skills;