import React from 'react';
import profile from '../Images/profile.jpg'

const Avatar = () => {
    return (
        <div className='flex-col'>

            <div class="avatar">
                <div class="w-40  border-yellow-500 rounded-full">
                    <img src={profile} alt='pictur' />
                </div>
            </div>
            <div class="flex h-3 w-4 mt-[-19px]">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-lime-400 opacity-75"></span>
                <span class="relative border border-yellow-400 inline-flex rounded-full h-4 w-4 bg-lime-500"></span>
            </div>

        </div>
    );
};

export default Avatar;