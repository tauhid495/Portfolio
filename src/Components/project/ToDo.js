import React from 'react';
import image1 from '../assets/todo-1.jpg'
import image2 from '../assets/todo-2.jpg'
import image3 from '../assets/todo-3.jpg'

const ToDo = () => {
    return (
        <div className='pr-7 my-5'>
            <div className='pl-3 bg-secondary mb-5 md:mb-0'>
                <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>ToDo App</p>
                <p
                    className='text-4xl md:text-6xl font-semibold text-gray-700'>ToDo App Site</p>
            </div>

            {/* content */}
            <div className='md:flex items-center bg-secondary '>
                <div className='pl-7 mb-5 md:w-1/2'>
                    <p className='text-primary text-xl'>Description : </p>
                    <p>* It's a todo task listing website.</p>
                    <p>* Users can add tasks, edit and delete tasks. </p>
                    <p>* Pending and completed tasks shows different pages. </p>
                    <p>* Backend database implemented.</p>
                    <p>* Quote generator added.</p>
                    <p>* MongoDB used for database.</p>
                    <p className='text-primary text-xl mt-5'>Tecnology used : </p>
                    <p > ReactJs, React router, Tailwind, DaisyUi,MongoDB, NodeJs, Render Netlify.</p>
                    <p className='text-primary text-xl mt-5'>Links : </p>

                    <p >
                        <a target='blank' className='hover:text-primary' href="https://tauhid-todo.netlify.app/home">Live Link</a>
                        ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/toDo-client"> Github-Client-side</a>
                        ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/toDo-Server"> Github-Server-side</a>

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

export default ToDo;