import React from 'react';

import MOtools from './MOtools';
import DecoFurn from './DecoFurn';
import ToDo from './ToDo';
import Blog from './Blog';
import Weather from './Weather';

const ProjectDetail = () => {

    return (
        <div>
            <MOtools />
            <DecoFurn />
            <ToDo />
            <Blog />
            <Weather />
        </div>
    );
};

export default ProjectDetail;