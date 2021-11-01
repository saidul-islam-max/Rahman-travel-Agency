import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddPackage = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
    console.log(data);

    axios.post('https://creepy-zombie-80659.herokuapp.com/package', data)
    .then(res =>{
        if(res.data.insertedId){
            alert('successfully inserted')
            reset();
        }
    })
}
    return (
        <div className="add-Service"> 
             <h1>Please add A service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Enter Package Name" /><br/>
            <input className=""  {...register("country",)} placeholder="Enter Country Name"/>
            <textarea className=""  {...register("description",)} placeholder="Enter Package Description" />
           
            <input className=""  {...register("img",)} placeholder="Enter Image Url" />
            <input type="number" {...register("cost")} placeholder="Enter Package Cost"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;