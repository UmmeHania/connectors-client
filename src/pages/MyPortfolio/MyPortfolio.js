import React from 'react';
import me from '../../Assets/me.png'

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={me} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold">Hey there everyone!</h1>
                        <p class="text-xl py-6">I'm <span className='text-2xl font-bold text-yellow-600'>Umme Hania</span> from Feni,Bangladesh.I'm a passionate web development learner.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam repellendus, officiis eveniet dolorem animi eos est hic. Beatae quisquam totam veniam quasi dolores, enim similique animi aliquid? </p>
                        <button class="btn btn-accent">Explore</button>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5 '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Personal Details</h2>
                        <ul style={{ listStyle: 'square' }}>
                            <li className=''>Name: Umme Hania</li>
                        </ul>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;