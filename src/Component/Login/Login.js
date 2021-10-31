import React from 'react';
import useAuth from '../../Hook/useAuth';
import './Login.css'


const Login = () => {
    const {googleSingIn,user} = useAuth();
    return (
        <div className="loginBtn">
           <button type="button" className="btn btn-primary btn-lg" onClick={googleSingIn}>Google SingIN</button>
     
        </div>
    );
};

export default Login;