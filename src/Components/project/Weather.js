import React from 'react';
import image1 from '../assets/weather-1.jpg'
import image2 from '../assets/weather-2.jpg'
import image3 from '../assets/weather-3.jpg'

const Weather = () => {
    return (
        <div className='pr-7 my-5'>
            <div className='pl-3 bg-secondary mb-5 md:mb-0'>
                <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Weather App</p>
                <p
                    className='text-4xl md:text-6xl font-semibold text-gray-700'>Weather Forecast App</p>
            </div>

            {/* content */}
            <div className='md:flex items-center bg-secondary '>
                <div className='pl-7 mb-5 md:w-1/2'>
                    <p className='text-primary text-xl'>Description : </p>
                    <p>* It's a weather forcast app.</p>
                    <p>* It detects users location autometically and shows current forecast. </p>
                    <p>* This app shows next three days weather forecast. </p>
                    <p>* This site also shows hourly forecast, sunset and sunrise time, uv index and more.</p>
                    <p>* Open weather api used for forcast data.</p>
                    <p>* Rechart used for heat index</p>

                    <p className='text-primary text-xl mt-5'>Tecnology used : </p>
                    <p > ReactJs, React router, Tailwind, DaisyUi, Rechart, Netlify.</p>
                    <p className='text-primary text-xl mt-5'>Links : </p>

                    <p >
                        <a target='blank' className='hover:text-primary' href="https://weathertrend.netlify.app/">Live Link</a>
                        {/* ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/redux-assign-1"> Github-Client-side</a> */}
                        {/* ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/toDo-Server"> Github-Server-side</a> */}

                    </p>

                </div>
                {/* gallary */}
                <div className='pl-5 md:w-1/2'>
                    <section class="overflow-hidden text-gray-700">
                        <div class="container  py-2 mx-auto lg:pt-16 lg:pb-10 lg:px-14">
                            <div class="flex flex-wrap -m-1 md:-m-2">

                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={image1} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={image3} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={image2} />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default Weather;