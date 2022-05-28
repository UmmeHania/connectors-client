import React from 'react';
import { useForm } from 'react-hook-form';

const AddAReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://vast-meadow-63021.herokuapp.com/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>

            <div className='flex justify-center items-center '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 className='text-3xl font-bold text-center'>Add A Review</h2>
                        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                            <textarea className='mb-5 p-3 border-2 w-full max-w-xs' placeholder='Comment' {...register("comment")} />
                            <input className='mb-5 p-3 border-2 w-full max-w-xs' placeholder='Ratings' type="text" {...register("ratings")} />
                            <input className='mb-5 p-3 border-2 w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                            <br />
                            <button className='btn btn-accent text-center text-sm'><input type="submit" value="Add A Review" /></button>
                        </form>
                    </div>
                </div>
                <h2>Please add a service</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input type="submit" value="Add Service" />
                </form>
            </div>


        </div>
    );
};

export default AddAReview;