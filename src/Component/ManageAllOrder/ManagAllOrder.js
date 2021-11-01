import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ManagAllOrder = () => {
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('https://creepy-zombie-80659.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])

    const handleDeletUser = id => {
        const url = `https://creepy-zombie-80659.herokuapp.com/users/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      alert('deleted successfully');
                      const remainingUsers = packages.filter(packages => packages._id !== id);
                      setPackage(remainingUsers);
                  }
              });
      }
   
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
               packages.map(packages =>  <tbody packages={packages}>
                <tr>
                <th scope="row">#</th>
                <td>{packages.name}</td>
                <td>{packages.email}</td>
                <td>{packages.phone}</td>
                <td>{packages.address}</td>
                <td>{packages.packageName}</td>
                <td>{packages.price}</td>
                <td><button onClick={() => handleDeletUser(packages._id)} className="mx-5">X</button></td>
                </tr>
                
            </tbody>)
           }
         </table>
        </div>
    );
};

export default ManagAllOrder;