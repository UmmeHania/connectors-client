import React from 'react';
import banner from '../../Assets/banner.jpg'
import certified from '../../Assets/certified.png'


const Banner = () => {
    return (
        <div>
            <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='px-5'>
                            <img className='mb-2' src={certified} alt="" />

                            <h1 className="text-4xl font-bold text-[#302d7f]">Build Tools,Build Quality</h1>
                            <p className="py-6">We are the Quality Hand tools Manufacturer in UK and offers Engineering Excellence for the world's most demanding industries. Our Tools range includes Industrial Tools, Precision Tools, Cutting Tools, Air Tools and Lubrication tools etc</p>
                            <button className='btn bg-[#ffd400] hover:bg-[#302d7f] hover:text-white text-black'>Explore Us</button>
                        </div>
                        <div className='sm:h-[60vh] shrink-0 px-20'>
                            <img src={banner} className="lg:h-[70vh] " alt='' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;