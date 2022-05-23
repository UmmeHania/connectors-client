import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ChooseUs from './ChooseUs';
import NewProduct from './NewProduct';

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <NewProduct></NewProduct>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;