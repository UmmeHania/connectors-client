import React, { useEffect, useState } from 'react';
import Part from '../../pages/Home/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Tools Section</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5'>
                {
                    parts.map(part => <Part

                        key={part._id}
                        part={part}
                    >

                    </Part>)
                }
            </div>
        </div>
    );
};


export default Parts;