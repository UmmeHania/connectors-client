import React from 'react';

const UsersRow = ({ user, index }) => {
    const { email } = user;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> <button class="btn btn-sm btn-accent">Make Admin</button></td>
            <td> <button class="btn btn-sm btn-accent">Remove user</button></td>

        </tr>

    );
};

export default UsersRow;