import React from 'react';
import error from '../../Assets/error.jpg'

const NotFound = () => {
    return (
        <div>
            <div class="card lg:card-side bg-white shadow-xl">
                <figure><img className='w-1/2' src={error} alt="Album" /></figure>
                {/* <div class="pl-30">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div> */}
                {/* <button className='btn btn-accent'>Go Home</button> */}
            </div>
        </div>

    );
};

export default NotFound;