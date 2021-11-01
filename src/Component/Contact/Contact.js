import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container ">
            <h2 className="text-center contact-text my-5">Contact Form</h2>
                <div className="row">
                    <div className="col-md-5 col-12 my-5">
                        <h1 className="fs-0 contact-texts">Feel Free To Connect With Us</h1>
                        <p className="bg-primary d-inline px-1 rounded fw-bold text-light">Open Hours: 09:00 A.M. 18.00 P.M</p>
                        <p>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming vulputate velit esse molestie possim ulla facilisis at vero eros et accumsan.
                        </p>
                    </div>
                     <div className="col-md-6 col-12 my-5 contact-form">
                        
                           <div className="d-flex">
                           <input type="text" className="form-control  me-3" placeholder="First name" aria-label="First name"/>
        
                             <input type="text" className="form-control " placeholder="Last name" aria-label="Last name"/>
                           </div>
                        
                            <input type="email" className="form-control outline-dark" placeholder="Enter Your Email"/>
                            <input type="number" className="form-control " placeholder="Enter Your number" />
              

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Any Problem</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                             </div>
                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button class="btn btn-primary" type="button">Submit</button>
                            
                            </div>
                          
                        </div>
                    </div>
                </div>
               
                   
               </div>
            
        
    );
};

export default Contact;