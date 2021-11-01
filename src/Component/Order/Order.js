import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../Hook/useAuth';

const Order = () => {
    const {user} = useAuth()
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('https://creepy-zombie-80659.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])

    const found = packages.filter(users => users.email === user.email )
   
    return (
        <div className="container">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">P.Number</th>
            <th scope="col">Address</th>
            <th scope="col">Service Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
       {
           found.map(packages =>  <tbody packages={packages}>
            <tr>
            <th scope="row">#</th>
            <td>{packages.name}</td>
            <td>{packages.email}</td>
            <td>{packages.phone}</td>
            <td>{packages.address}</td>
            <td>{packages.packageName}</td>
            <td>{packages.price}</td>
            <td><button>Delete</button></td>
            </tr>
            
        </tbody>)
       }
     </table>
    </div>
    );
};

export default Order;
