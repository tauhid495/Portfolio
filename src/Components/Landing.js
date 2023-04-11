import React from 'react';
import { AiOutlineBars, AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { RiHomeGearLine } from 'react-icons/ri';
import Avatar from '../Components/Avatar';
import SocialLink from './SocialLink';
import { NavLink, Outlet } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start ">
                    {/* <!-- Page content here --> */}
                    <div className='flex items-center'>
                        <label for="my-drawer-2" class="btn text-primary btn-ghost drawer-button lg:hidden">

                            <AiOutlineBars className='w-6 h-6' />
                        </label>
                        <p className='md:hidden text-xl text-primary'>Portfolio of Shahidul Islam</p>
                    </div>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-secondary mr-5 text-base-content h-screen">
                        {/* <!-- Sidebar content here --> */}
                        <div className='bg-secondary '>
                            <li className='block mx-auto'>

                                <Avatar /></li>
                            <p className='hover:text-primary text-center text-xl font-semibold '>Shahidul Islam</p>
                            <p className='text-center'>Jr Web Developer</p>
                            <p className='text-center'>Ex Manager</p>
                        </div>

                        <div className='bg-secondary mt-5 py-3'>
                            <div className='w-full h-[1px] bg-gray-600'></div>
                            <li> <NavLink to='/home'> <div className='flex'><RiHomeGearLine className='w-6 h-6' /> Home </div></NavLink> </li>

                            <div className='w-full h-[1px] bg-gray-600'></div>
                            <li> <NavLink to='/contact'> <div className='flex'><AiOutlineMail className='w-6 h-6' />  Contact </div></NavLink> </li>

                            <div className='w-full h-[1px] bg-gray-600'></div>
                            <li> <NavLink to='/aboutme'> <div className='flex'><FaRegUser className='w-6 h-6' /> About Me </div></NavLink> </li>

                            <div className='w-full h-[1px] bg-gray-600'></div>

                        </div>


                        <div className='absolute bottom-3 '>
                            <SocialLink />

                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Landing;