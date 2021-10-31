import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from './logo.png'

import './Header.css'
import useAuth from '../../Hook/useAuth';


const Header = () => {
   const {user,logOut} = useAuth()
   
    return (
        <div>
        <div className="header">
           <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">
                 <img src={img} width="150" height="60" width="100" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 ml-5 mb-lg-0 nav-ul-li">
                    <li className="nav-item header-link">
                    <NavLink to="/home"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    
                    >Home</NavLink>
                    </li>
                    <li className="nav-item header-link">
                    <NavLink to="/about"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >About</NavLink>
                    </li>
                    <li className="nav-item header-link">
                    <NavLink to="/package"
                       activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                        Packag
                    </NavLink>
                    </li>
                    {/* -----------My order---- */}
                    {
                      user?.email?(
                        <li className="nav-item header-link">
                    <NavLink to="/myOrder" 
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                       My Order
                    </NavLink>
                    </li>
                    ):('')
                    }

                    {/* ------manag All Order */}
                    {
                      user?.email?(
                        <li className="nav-item header-link">
                    <NavLink to="/managpackege" 
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                        Manag All Order
                    </NavLink>
                    </li>

                      ):('')
                    }
                    {/* ----add package */}
                    {
                      user?.email?(
                        <li className="nav-item header-link">
                    <NavLink to="/addpackage" 
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                        Add Package
                    </NavLink>
                    </li>

                      ):('')
                    }
                    <li className="nav-item header-link">
                    <NavLink to="/contact" 
                      activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                        Contact
                    </NavLink>
                    </li>
                   
                
                </ul>
                <from className="d-flex">
                {    
                       user?.email ?
                        <div className="d-flex">
                            <img src={user.photoURL} className="rounded-circle my-auto img-fluid" alt="" width="30px" height="30px" />
                        <h5 className="mx-3 my-auto">{user.displayName}</h5>
                       <button onClick={logOut} className="btn btn-outline-success " type="submit">Log Out</button>
                       </div>
                       :<div>
                        <Link to="/login"><button className="btn btn-outline-success " type="submit">Log In</button></Link>
                        </div>
                   }
                </from>
                </div>
            </div>
            </nav>
        </div>
    
    </div>
    );
};

export default Header;