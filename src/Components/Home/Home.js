import React from 'react';
import Banner from './Banner'
import Projects from './Projects';
// import Skills from './Skills';
import SkillsAni from './SkillsAni';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <SkillsAni />
            {/* <Skills /> */}
            <Projects />

        </div>
    );
};

export default Home;