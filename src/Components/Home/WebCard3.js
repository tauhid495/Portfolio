import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/todo-1.jpg'

const WebCard3 = () => {
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl mt-10">
                <figure class="px-10 pt-10">
                    <img src={image1} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">To-do App</h2>
                    <p>* This site for listing to-do tasks.</p>
                    <p>* Separately shows completed tasks.</p>
                    <p>* MongoDB database added.</p>
                    <div class="card-actions">
                        <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard3;