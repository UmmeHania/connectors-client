import React, { useEffect, useState } from 'react';

import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://vast-meadow-63021.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-8'>Meet Our Valued Customer</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5'>
                {
                    reviews.map(review => <Review

                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};


export default Reviews;