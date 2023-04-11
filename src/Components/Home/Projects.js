import React from 'react';
import WebCard1 from './WebCard1';
import WebCard2 from './WebCard2';
import WebCard3 from './WebCard3';
import WebCard4 from './WebCard4';
import WebCard5 from './WebCard5';

const Projects = () => {
    return (
        <div className='w-full pr-5'>
            <div className='bg-secondary bg-cover w-full mb-7'>
                <div className='pl-3'>
                    <p className='z-10 text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Projects</p>
                    <p className='text-4xl md:text-6xl font-semibold text-gray-700'>My Projects</p>

                </div>

                {/* content */}
                <div className='mb-10 pb-7 pl-3 grid gap-x-5 grid-cols-1 md:grid-cols-3 pr-3'>
                    <WebCard1 />
                    <WebCard2 />
                    <WebCard3 />
                    <WebCard4 />
                    <WebCard5 />
                </div>
            </div>
        </div>
    );
};

export default Projects;