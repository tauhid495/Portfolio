import React from 'react';
import Banner from './Banner'
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;