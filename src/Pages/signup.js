import React from 'react';
import ab from '../Asset/signup.svg';
import '../index.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
// import {
//   PushSpinner, TraceSpinner, RainbowSpinner,
//   RingSpinner, SwishSpinner, PongSpinner,
//   MetroSpinner, JellyfishSpinner
// }
//   from "react-spinners-kit";
function Signup () {
  const navigate = useNavigate();
  // const [post,setPost]=useState(null);
  const [count, setCount] = useState(0);
  const [error,seterror] =useState(null);
  const [nextpage,setnextpage] =useState(false);
  // const [loading, setLoading] = useState(false)
  const handlesubmit = (event)=>{
  
    event.preventDefault();
    const fd=new FormData(event.target);
    const data=Object.fromEntries(fd.entries());
    if (data.password !== data['confirm-password']){
      setCount(1);
      seterror('password not matched');
      return;
  }
    console.log(data);
    delete data['confirm-password'];
    console.log(data);

    // const response =axios.post('http://127.0.0.1:8000/user/',data).then(res=>{console.log(res);setCount(0);navigate('/signin')}).catch(error=> {console.log(error.detail);setCount(2);seterror('Credentials are already used')});
    // setLoading(true);
       
    
    // await new Promise(resolve => setTimeout(resolve, 1000));
    //alert(loading);
    
    const response =axios.post('https://'+process.env.REACT_APP_SERVER_URL+'/user/',data).then(res=>{console.log(res);setCount(0);navigate('/signin')}).catch(error=> {console.log(error.detail);setCount(2);seterror('Credentials are already used')});
  

    setCount(false);
    seterror(null);
    event.target.reset();
    console.log("submitted")
  };


const CheckErrorMsg =()=>{

  count ? seterror('') :seterror(error);
}

  return (
    <div className='drop-shadow-2xl container mx-auto p-5 h-full xl:h-[800px]'>
        <div className="flex-row">
        <h1 className='text-center text-[4rem] text-indigo-500 font-moto'> 🏦 YourBank</h1>
        </div>
        <div className='rounded-md h-full flex'> 
        <div className="w-ful rounded-md shadow-lg mx-auto">
    <div className="md:flex p-10">
      {/* Left Side (Image) */}
      <div className="md:w-1/2">
        <img
          className="w-full object-cover h-full md:w-full  "
          src={ab}
          alt="Card"
        />
      </div>
      {/* Right Side (Title and Description) */}
      <form onSubmit={handlesubmit}>
      <div className='main'>
      <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
       
        <div className='control'>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name"/>
        </div>
        
        <div className='control'>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required/>
        </div>

        <div className="control-row"> </div>
        <div className="control">
          <label htmlFor='password'>Password</label> 
          <input id="password" type="password" name="password" required minLength={8} onKeyUp={CheckErrorMsg} />
          </div>

          <div className='control'>
            <label htmlFor='confirm-password'> Confirm password</label>
            <input id="confirm-password" type="password" name="confirm-password" required maxLength={15} onKeyUp={CheckErrorMsg} />
          </div>
            <div className="control-error">{count === 1 && <p className='text-red-600 font-moto'> {error}</p>}</div>

          <div className='control'>
          <label htmlFor="phoneno">Phone number</label>
          <input id="phoneno" type="numnber" name="phone_number" required maxLength={10} minLength={10}/>
        </div>
        <p>{count === 2 && <p className='text-red-500 font-moto'>{error}</p>}</p>
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up {nextpage && <Link to="MainPage"/>}
          </button>
        
          {/* <Link to="MainPage"><button type="submit" className="button">
            Sign up
          </button></Link> */}
        </p>
        {/* {loading&&<div className="spinner">
        <TraceSpinner size={40} frontColor="green"
                        backColor="white" />
                </div>} */}
        <hr/>
        <h6 className='text-center'>Have already an account? <span><Link to="/signin">Login</Link> </span></h6>
        <p></p>
        </div>
         







      </form>
    </div>
  </div>

      </div>
    </div>
  )
}

export default Signup
