import React from 'react';
import { Link } from 'react-router-dom';
import decoimg from '../assets/deco-1.jpg'

const WebCard2 = () => {
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl mt-10">
                <figure class="px-10 pt-10">
                    <img src={decoimg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">DecoFurn</h2>
                    <p>* Inventory Management website.</p>
                    <p>* Firebase authentication implimented.</p>
                    <p>* Product Management implimented</p>
                    <div class="card-actions">
                        <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard2;