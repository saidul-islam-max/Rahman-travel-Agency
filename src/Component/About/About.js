import React from 'react';
import aboutImg from './about.png'
import aboutI from './about2.jpg'

const About = () => {
    return (
        <div className="bg-light">
            <div className="bg-info py-5">
                 <h1 className=" ">About Us</h1>
             </div>
            <div className="container my-5">
            
                <div className="row bg-light">
                    <div className="col-md-6 col-12">
                    <h2 className="text-center my-2 fw-bold"> About Us</h2>
                       <h2>About Rahman Travels Agency</h2>
                       <p>When opening its doors in 1994, GlobalTravel.com founders Michael Gross and Randy Warren essentially pioneered the home-based Travel Agent model in the U.S. and abroad. Now, as the industry leader, GlobalTravel.com  is uniquely positioned to help you on your path to success. When it comes to starting your own business, you want to work with a company you know you can trust and one that can help make you successful.  We show you how to become a travel agent and give you the tools to succeed as an Independent Travel Agent. <br/> GlobalTravel.com has become firmly established as a financially solid company, winning recognition from premier publications such as The New York Times & The Wall Street Journal and building strong relationships with major travel suppliers.
                         By joining GlobalTravel.com, you can focus on selling travel and building your business without the burden or cost of a traditional storefront agency, and have the support and guidance from the best of the best. Whether full-time or part-time, experienced or beginner, GlobalTravel.com supports its members and helps them earn significant income and travel for less.</p>
                    </div>

                    <div className="col-md-6 col-12">
                        <img src={aboutImg} height="200" className="img-fluid" alt="" /><br/><br/>
                        <img src={aboutI} height="200" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default About;