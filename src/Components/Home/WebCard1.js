import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WebCard1 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div >
            <div
                class="card w-full bg-base-100 shadow-xl mt-10">
                <figure class="px-10 pt-10">
                    <img src="https://i.ibb.co/TY71MVc/mo-1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">MOtools</h2>
                    <p>* B2B Manufacturar website.</p>
                    <p>* Firebase authentication implimented.</p>
                    <p>* Payment getway implimented</p>
                    <div class="card-actions">
                        <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard1;