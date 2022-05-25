import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState({});
    const [reload, setReload] = useState(false);

    const { _id, name, img, price, description } = part;

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPart(data));
    }, [id, reload]);


    return (
        <div>
            <h1>From purchase id: {_id}  </h1>
            <p>Name : {name}</p>
        </div>
    );
};

export default Purchase;