import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Packag.css'

const Packag = () => {
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])
    // delet user
    const handleDeletUser = id => {
          const url = `http://localhost:5000/package/${id}`
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
        <div className="my-5">
               <div className="container">
                   <h2 className="text-center home-service-texts fw-bold">
                       Our Service
                   </h2>

                <div className="row">

                  

                  {
                      packages.map(packages => <div packages={packages} className="col-md-4 col-12 my-2 pack-card">
                            <div class="card">
                            <img src={packages.img} height="250px" width="100%"  alt="" /> 
                                    <div class="card-body">
                                        <h5 className="card-title">{packages.name}</h5>
                                        <p className="text-info fw-bold">Starts Form BDT {packages.cost}</p>
                                          <p className="bg-primary d-inline px-1 rounded fw-bold text-light">{packages.country}</p>
                                        <p className="card-text">{packages.description.slice(0,95)}</p>
                                        
                                        <div classsName=" ">
                                        <Link to={`/packageDetails/${packages._id}`}>
                                            <button className="btn-info">View</button>
                                        </Link>
                                        
                                        <button onClick={() => handleDeletUser(packages._id)} className="mx-5">X</button>

                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div> 
                        
                        
                        )
                  }

                 </div>   
               </div>
            </div>

    );
};

export default Packag;