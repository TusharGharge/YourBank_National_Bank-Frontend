import React from 'react'
import pan from '../Asset/pan_final.jpg';
import { useState,useRef } from "react";
import isValidPanCardNo from './utils';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const Createbankaccount = (props) => {
    const [paninvalid,setpannumber]=useState(false);
    
    const pannumber=useRef();
    const [error,seterror] =useState(null);
    function onhandlesubmit(event){
        event.preventDefault();
        // const enteredmail=pannumber.current.value;
        const fd=new FormData(event.target);
        const data=Object.fromEntries(fd.entries());
  
        console.log(data);
        const response=isValidPanCardNo(data);
        console.log(response);
        // if (response==='false'){
        //     setpannumber(true);
        //     return ("pan is in invalid");
        // }
        // else{
        //     setpannumber(false);
        // }
        const token = sessionStorage.getItem('token');
        console.log("torkn",token);
      
        try {
          axios.post(
            'http://127.0.0.1:8000/bank/createaccount', // Replace with your API endpoint
            data, // Data to be sent in the request body
            {
              headers: {
                Authorization: `Bearer ${token}` // Include JWT token in the Authorization header
              }
            }
          ).then(res=>{console.log('post request successful:', res.data);
    
          if (res.data.message === 'Pan number is already exists' )
          {
          toast.error(res.data.message);
          } 
          else if (res.data.message === "Account already exists"){
            toast.error(res.data.message);
          }
          else {
             toast.success(res.data.message);
            props.callback();
          }}
          )
        
          
          // Handle response data as needed
        } catch (error) {
          console.error('Error making post request:', error);
          toast.error('failed!');
          // Handle error
        }
      
        
         
    }
    const CheckErrorMsg =()=>{

      paninvalid ? setpannumber('') :setpannumber(error);
    }

  return (
    <div>
    <form onSubmit={onhandlesubmit}>
   <div className="flex justify-center items-center mt-10">
<div className="w-full lg:w-4/5 bg-white shadow-lg rounded-lg overflow-hidden lg:h-96">
<div className="flex flex-col lg:flex-row h-full p-3">
  {/* Left side with transfer money image */}
  <div className="w-full lg:w-1/2">
    <img src={pan} alt="Transfer Money" className="w-100 mx-auto h-full border-1" />
  </div>
  {/* Right side with transfer form */}
  <div className="w-full lg:w-1/2 p-6">
  <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Create New Bank Account
            </h2>
            <p className='font-moto p-1 text-red-500'>Required Document*:<span className='text-black font-moto'>  To Create Bank Account Pan card is Mandatory.</span></p>
         
    <div className="mb-4">
      <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
      <input type="text" id="pan_number" name="pan_number" placeholder="Enter PanCard number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyUp={CheckErrorMsg}/>
    </div>
    <div className='text-red-500'>{paninvalid && <p className='pt-1 ps-1'>Invalid Pancard number</p>}</div>
    {/* <div className="text-red-500 text-moto p-1">{count===1 && <p className='text-red-500 font-moto'>{error}</p>}</div> */}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Create Account</button>
  </div>
</div>
</div>
</div>
</form>
<ToastContainer />
</div>
  )
}

export default Createbankaccount
