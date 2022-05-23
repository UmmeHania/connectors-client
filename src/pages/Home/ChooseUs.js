import React from 'react';
import quality from '../../Assets/quality.png';
import service from '../../Assets/wrench(1).png';
import idea from '../../Assets/group-idea.png'

const ChooseUs = () => {
    return (
        <div>

            <h1 className='text-4xl text-center font-bold my-10'>Why Choose Us!</h1>
            <h1 className='text-xl text-center px-5 '>
                Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here's some reasons why we're unique
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5 ml-10 my-10 px-30 '>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={quality} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>Quality</h2>
                    <p className='text-base text-black'>Since 1978 we've been supplying the highest quality tools to a variety of specialist markets.</p>
                </div>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={service} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>Innovation</h2>
                    <p className='text-base text-black'>We have a very creative team to make tools and other stuffs. We made almost 50 new tools to smooth your workflow.</p>
                </div>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={idea} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>Expertise</h2>
                    <p className='text-base text-black'>As we never compromise with quality, we always look after our production quality.  </p>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;
