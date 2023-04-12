import React from 'react';
import TextSphere from '../MovingSkills/TextSphere';
import AutoSlider from '../MovingSkills/AutoSlider';


const SkillsAni = () => {
    return (

        <div className='w-full pr-5'>
            <div className='bg-secondary bg-cover w-full my-7'>

                <div className='md:flex'>
                    <div className='md:w-8/12 px-4'>
                        <div className='pl-3'>
                            <p className='z-10 text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Skills</p>
                            <p className='text-4xl md:text-6xl font-semibold text-gray-700'>My Skills</p>
                        </div>
                        <div className='px-5 mt-3 md:mt-10'>
                            <AutoSlider />
                        </div>
                    </div>
                    <div className='md:w-4/12  text-center'><TextSphere />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SkillsAni;