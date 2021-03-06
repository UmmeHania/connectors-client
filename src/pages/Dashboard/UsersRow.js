import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const UsersRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://vast-meadow-63021.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Opps!You can not make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`)
                }

            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm btn-accent">Make Admin</button>} </td>
            <td> <button class="btn btn-sm btn-error">Remove user</button></td>

        </tr>

    );
};

export default UsersRow;