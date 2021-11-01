import React, { useEffect } from 'react';

import './Home.css'
import img from './home.png';
import aboutImg from './about.png'
import aboutI from './about2.jpg'

import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

const Home = () => {
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('https://creepy-zombie-80659.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])
    return (
        <div className="  ">
            {/* ----------home-header-img----------- */}
            <div className="home-head container py-5">
                <div className="row py-5 ">
                
                <div className="col-md-6 col-12 ">
                
                <h1 className="fw-bold home-header-text text-center">Rahman Travel Agency</h1>
                <p>Our service center are best of all Other service center.Our Agency No 1 of the city</p>
                </div>

                <div className="col-md-6 col-12 d-flex justify-content-center homeImg">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                
                </div>
           
            </div>
            {/* ----------home-header-img end----------- */}

            {/* ---------about section ------------ */}

            <div className="bg-light py-5">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-6 col-12">
                    <h2 className="text-center fw-bold"> About Us</h2>
                       <h2>About Rahman Travels Agency</h2>
                       <p>When opening its doors in 1994, GlobalTravel.com founders Michael Gross and Randy Warren essentially pioneered the home-based Travel Agent model in the U.S. and abroad. Now, as the industry leader, GlobalTravel.com  is uniquely positioned to help you on your path to success. When it comes to starting your own business, you want to work with a company you know you can trust and one that can help make you successful.  We show you how to become a travel agent and give you the tools to succeed as an Independent Travel Agent. <br/> GlobalTravel.com has become firmly established as a financially solid company, winning recognition from premier publications such as The New York Times & The Wall Street Journal and building strong relationships with major travel suppliers.
                         By joining GlobalTravel.com, you can focus on selling travel and building your business without the burden or cost of a traditional storefront agency, and have the support and guidance from the best of the best. Whether full-time or part-time, experienced or beginner, GlobalTravel.com supports its members and helps them earn significant income and travel for less.</p>
                    </div>

                    <div className="col-md-6 col-12">
                        <img src={aboutImg} height="200" width="100%" className=" " alt="" /><br/><br/>
                        <img src={aboutI} height="200" width="100%" className=" " alt="" />
                    </div>
                </div>
            </div>
           
        </div>
            {/* ---------about section end------------ */}

            {/* --------service section----------- */}
            
            <div className="my-5">
               <div className="container">
                   <h2 className="text-center home-service-texts fw-bold">
                       Our Service
                   </h2>

                <div className="row">

                  

                  {
                      packages.slice(0,6).map(packages => <div packages={packages} className="col-md-4 col-12 my-2 pack-card">
                            <div class="card">
                            <img src={packages.img} height="250px" width="100%"  alt="" /> 
                                    <div class="card-body">
                                        <h5 className="card-title">{packages.name}</h5>
                                        <p className="text-info fw-bold">Starts Form BDT {packages.cost}</p>
                                          <p className="bg-primary d-inline px-1 rounded fw-bold text-light">{packages.country}</p>
                                        <p className="card-text">{packages.description.slice(0,95)}</p>
                                        <Link to={`/packageDetails/${packages._id}`}>
                                            <button className="btn-info">View</button>
                                        </Link>
                                    </div>
                                </div>
                            </div> 
                        
                        
                        )
                  }

                 </div>   
               </div>
            </div>

        </div>
    );
};

export default Home;