import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [part, setPart] = useState({});
    const [reload, setReload] = useState(false);

    const { _id, name, img, price, description, availableQuantity, minQuantity } = part;

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPart(data));
    }, [id, reload]);



    const onSubmit = async data => {
        console.log('data', data);
        const order = {
            orderId: _id,
            productName: name,
            customerName: user.displayName,
            customer: user.email,
            mobile: data.mobileNumber,
            address: data.address
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Order Placed Successfully')
                }
            })
        reset();

    }


    //flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center
    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div class="card bg-white my-2 shadow-xl justify-center">
                    <figure><img className='my-2' src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-xl">Name: {name} </h2>
                        <h2 class="text-xm">Details: {description} </h2>

                        <h2 class="text-lg font-semibold">Price: {price} </h2>
                        <h2 class="text-lg font-semibold">Available Quantity: {availableQuantity} </h2>
                        <h2 class="text-lg font-semibold">Minimum Order Quantity: {minQuantity} </h2>


                        {/* <div class="card-actions justify-center">
                            <button class="btn btn-accent">Order now</button>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='bg-white justify-center items-center mx-auto px-20'>
                    <h2 className="text-2xl text-center font-bold mt-2">Place your Order!</h2>
                    <form className='mb-5' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user.displayName}
                                className="input input-bordered w-full px-20"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={user.email}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Order Quantity"
                                className="input input-bordered w-full"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Mobile Number"
                                className="input input-bordered w-full"
                                {...register("mobileNumber", {
                                    required: {
                                        value: true,
                                        message: 'Mobile Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full text-black btn-accent mb-3' type="submit" value="Order Now" />
                    </form>
                </div>
            </div>

        </div>
    );

}
export default Purchase;