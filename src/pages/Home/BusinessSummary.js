import React from 'react';
import idea from '../../Assets/project-management.png';
import supply from '../../Assets/supply-chain-management.png';
import client from '../../Assets/rating.png';
import revenue from '../../Assets/revenue.png';

const BusinessSummary = () => {
    return (
        <div className=''>
            <h2 className='text-center text-4xl font-bold mb-20'>Our Business Encapsulations</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-y-5 px-10 ml-10 my-20'>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={client} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>10M+</h2>
                    <p className='text-xl font-semibold text-[#302d7f]'>Happy Clients</p>
                </div>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={supply} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>50M+</h2>
                    <p className='text-xl font-semibold text-[#302d7f]'>Tools Supplied</p>
                </div>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={idea} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>500+</h2>
                    <p className='text-xl font-semibold text-[#302d7f]'>Innovations</p>
                </div>
                <div className='px-5 py-5 shadow-xl'>
                    <div className='text-center'> <img src={revenue} alt="" /></div>
                    <h2 className='text-3xl my-3 font-bold'>5B+</h2>
                    <p className='text-xl font-semibold text-[#302d7f]'>Annual Revenue</p>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;