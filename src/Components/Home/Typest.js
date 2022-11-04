import React from 'react';
import Typed from "react-typed"



const Type = () => {
    return (
        <div className='flex text-xl md:text-2xl'>
            <p className='text-xl md:text-2xl'>I am a </p>
            <Typed className='text-primary font-semibold'
                strings={[
                    " Font End Web Developer",
                    " Sales Team Leader ",
                    " Pathological Lab Manager",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
            />
        </div>
    );
};

export default Type;