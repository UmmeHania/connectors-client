import React from 'react';

const Part = ({ part }) => {
    const { _id, name, img, description, price, minQuantity, availableQuantity } = part;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-[116px] h-[115px] rounded-xl' src={img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <h3>{description}</h3>
                    <h3 className='font-bold'>Price: {price}</h3>
                    <h3 className='font-bold'>Available Quantity: {availableQuantity}</h3>
                    <h3 className='font-bold'>Minimum Order Quantity: {minQuantity}</h3>
                    <button className='btn btn-accent font-bold mt-3'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;