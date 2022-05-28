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
                        <p class="text-xl py-6">I'm <span className='text-2xl font-bold text-yellow-600'>Umme Hania</span> from Feni,Bangladesh.I'm a passionate web developer and a creative web designer. Learning development with Programming Hero team for last 5 month and skilled in Full-stack development.
                        </p>
                        <button class="btn btn-accent">Download resume</button>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5 '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Personal Details</h2>
                        <ul style={{ listStyle: 'square' }}>
                            <li className='text-lg'> <span className='font-bold text-yellow-600'>Name:</span> Umme Hania</li>
                            <li className='text-lg'><span className='font-bold text-yellow-600'>Email:</span> haniazoly@gmail.com</li>
                            <li className='text-lg'><span className='font-bold text-yellow-600'>Educational Background:</span> </li>
                        </ul>
                        <ul style={{ listStyle: 'disc' }}>
                            <li className='text-xm'>Bachelor in Social Science in National University</li>

                        </ul>
                        {/* <div class="card-actions">
                            <button class="btn btn-primary"></button>
                        </div> */}
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">List of Technology</h2>

                        <ul style={{ listStyle: 'square' }}>
                            <li className='text-lg'>Javascript</li>
                            <li className='text-lg'>React.js</li>
                            <li className='text-lg'>Node.js</li>
                            <li className='text-lg'>Express.js</li>
                            <li className='text-lg'>Firebase</li>
                            <li className='text-lg'>Mongodb</li>
                            <li className='text-lg'>Tailwind</li>
                            <li className='text-lg'>Bootstrap</li>
                            <li className='text-lg'>CSS</li>
                            <li className='text-lg'>HTML</li>


                        </ul>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">My Projects</h2>
                        <ul style={{ listStyle: 'square' }}>
                            <li className='text-lg'>https://phoneera.netlify.app/</li>
                            <li className='text-lg'>https://gadgeterabyhania.netlify.app/</li>
                            <li className='text-lg'>https://essentials-b0da4.web.app/</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;