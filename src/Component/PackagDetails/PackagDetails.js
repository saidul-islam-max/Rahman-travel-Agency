import React, { useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PackagDetails.css'
import useAuth from '../../Hook/useAuth';
import axios from 'axios';


const PackagDetails = () => {
    const {user} = useAuth()
    ////form insert 
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
     
        axios.post('https://creepy-zombie-80659.herokuapp.com/users', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully inserted')
                reset();
            }
        })
     }
     
     
     
        ////form insert 
    const {packagId} = useParams();
    const [packages, setpackages] = useState([]);
    const [isLogin,setIslogin] = useState(false)
  
    
    useEffect(() => {
        fetch('https://creepy-zombie-80659.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setpackages(data));
    }, [])
 
    const toggoleLogin = e => {
        setIslogin(e.target.checked)
    }
    
    const found = packages.find(packag => packag._id === String(packagId));
    
    
    return (
        <div className="my-5 container">
             <div className="row">
         {
            found?.name?(
                <div className="col-md-7 col-12 text-center">
                    <img src={found.img} className="" alt="" /> <br/>
                <h2 className="text-center home-service-texts fw-bold">{found.name}</h2>
                <p className="bg-primary d-inline px-1 rounded fw-bold text-light">{found.country}</p>
                <p className="">{found.description}</p>
                   <h4>Price: {found.cost}  </h4>
                   <div class="col-md-6 form-check bg-info p-3">
                   <input type="checkbox" onChange={toggoleLogin} class="form-check-input mx-2" id="exampleCheck1"/>
                        <label class="form-check-label m-0 fw-bold" for="exampleCheck1">Are Your Agree Purchase Package</label>
                    </div>
                </div>
           
            ):(
                <h1>service not found</h1>
            )
        }

         {
             isLogin ?   
             <div className="col-md-5 col-12">
             <div className="PackagDetails col-md-12"> 
                <h1>Submit All Requeriment</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} value={user.displayName} /><br/>
                <input className=""  {...register("email",)} value={user.email}/>
                <input className=""  {...register("address",)} placeholder="Enter Your Address" />
                <input type="number" {...register("phone")} placeholder="Enter Your Phone Number"/>
                <textarea className=""  {...register("comment",)} placeholder="Enter Your Any problem"/>
                <input  {...register("packageName")} value={found.name} />
                <input type="number" {...register("price")} value={found.cost} />
                
                <input type="submit" />
                </form>
                </div>
             
            </div>
             
             : ('')
         }
         </div>
     </div>

    );
};

export default PackagDetails;