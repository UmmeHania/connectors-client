import React from 'react';
import image from '../../Assets/new.jpg'

const NewProduct = () => {
    return (
        <div>
            <div class="card lg:card-side bg-white border shadow-xl my-30">
                <figure><img className='w-[400px] h-[300px] pl-30' src={image} alt="Album" /></figure>
                <div class="card-body my-20">
                    <div class="badge badge-secondary">NEW</div>
                    <h2 class="card-title text-3xl font-bold">New Tools just released!</h2>

                    <p className='text-lg'>SuperHandy Air Hose Reel Retractable 3/8" Inch x 100 Feet 300 Psi / 20 Bar Spring Driven Steel Portable Quad Pod Heavy Duty Industrial Premium Commercial Flex Hybrid Polymer </p>
                    <div> <button class="btn btn-primary">Explore now</button></div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;