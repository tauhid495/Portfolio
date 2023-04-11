import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../assets/weather-1.jpg'

const WebCard5 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl mt-10">
            <figure class="px-10 pt-10">
                <img src={blogImg} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Weather App</h2>
                <p>* Weather forecasting website.</p>
                <p>* Auto locate & shows current data.</p>
                <p>* ReChart used for heat index.</p>
                <div class="card-actions">
                    <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WebCard5;