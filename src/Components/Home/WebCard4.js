import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../assets/blog-1.jpg'

const WebCard4 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl mt-10">
            <figure class="px-10 pt-10">
                <img src={blogImg} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Open Blog</h2>
                <p>* Open Blog website.</p>
                <p>* Multiple filters implemented.</p>
                <p>* MongoDB used for backend.</p>
                <div class="card-actions">
                    <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WebCard4;