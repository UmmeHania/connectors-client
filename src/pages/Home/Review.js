import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img className='w-16' src={review.img} alt="" />
                            </div>
                        </div>
                        <div>
                            <div>

                                <p>{review.comment}</p>
                                <h4 className='text-xl'>{review.ratings}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;