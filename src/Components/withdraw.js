import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import deposite from '../Asset/withdraw.PNG';
import { useState } from 'react';


const Widthdraw = (props) => {
    const [count, setCount] = useState(0);
    const [error,seterror] =useState(null);
    const [showModal, setShowModal] = useState(false);

    function onhandlesubmit(event){
      event.preventDefault();
      const fd=new FormData(event.target);
      const data=Object.fromEntries(fd.entries());

      console.log(data);
      const token = sessionStorage.getItem('token');
      console.log("torkn",token);
  
      try {
        const response =axios.put(
          'http://127.0.0.1:8000/bank/widthdraw', // Replace with your API endpoint
          data, // Data to be sent in the request body
          {
            headers: {
              Authorization: `Bearer ${token}` // Include JWT token in the Authorization header
            }
          }
        ).then(res=>{console.log('PUT request successful:', res.data);
  
        if (res.data.message === 'Insufficient fund' )
        {
        toast.error(res.data.message);
        } 
        else {
           toast.success(res.data.message);
           props.isWithdraw(true);
        }
        }
        )
      
        
        // Handle response data as needed
      } catch (error) {
        console.error('Error making PUT request:', error);
        toast.error('Money Transfer failed!');
        // Handle error
      }
      
      
      
      
      event.target.reset();
      
      setCount(false);
      seterror(null);
      

    }
    const CheckErrorMsg =()=>{

        count ? seterror('') :seterror(error);
      }
  return (
    <div>
         <form onSubmit={onhandlesubmit}>
        <div className="flex justify-center p-5">
   <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-2/5 md:w-96 lg:h-80 lg:pt-10">
     <div className="flex flex-col md:flex-row items-center md:items-start">
     <div className="w-full md:w-1/2 md:pl-6 pt-4">
         <h2 className="text-xl font-bold mb-4">Withdraw Money</h2>
         <div className="mb-4">
           <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
           <input type="number" id="amount" name="amount" placeholder="Enter Amount" className="shadow appearance-none border rounded lg:w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyUp={CheckErrorMsg} />
         </div>
         {/* <div className="text-red-500 text-moto p-1">{count===1 && <p className='text-red-500 font-moto'>{error}</p>}</div> */}
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Withdraw</button>
       </div>
       {/* Left side with transfer money image */}
       <div className="lg:w-50 mx-auto lg:h-full border-1 pt-2">
         <img src={deposite} alt="Transfer Money" className="w-96 mx-auto h-50 " />
       </div>
       {/* Right side with transfer form */}
  
     </div>
   </div>
 </div>
 </form>
 {/* <ToastContainer /> */}
 </div>
  )
}

export default Widthdraw
