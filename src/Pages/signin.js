// import React from 'react';
// import '../index.css';
// import { useState } from 'react';
// import signin from '../Asset/login.svg';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const Signin = () => {
//   const [count, setCount] = useState(0);
//   const [error,seterror] =useState(null);
//   const [responseData, setResponseData] = useState(null);
//   let [datatushar, setdatatushar] = useState(0)
//   const navigate = useNavigate();

//   function handlesubmit(event){
      
//     setdatatushar(1);
//     event.preventDefault();
//     const fd=new FormData(event.target);
//     const data=Object.fromEntries(fd.entries());
//     console.log(data);
//     event.target.reset();
//     console.log("submitted")
//     alert(datatushar);
//     axios.post('https://'+process.env.REACT_APP_SERVER_URL+'/login/',data).then(res=>{console.log('ressssssss',res.data);sessionStorage.setItem("token",res.data.access_token);navigate('/')}).catch(error=> {console.log(error.detail);setCount(2);seterror("Invalid credentials")});
//     console.log("submitted")
//     console.log(responseData);
//     setdatatushar(0);
//   }
//   const CheckErrorMsg =()=>{

//     count ? seterror('') :seterror(error);
//   }
//   return (
//     <div>
//         <div className='drop-shadow-2xl container mx-auto p-12 h-full'>
//         <div className="flex-row">
//         <h1 className='text-center text-[4rem] text-indigo-500 font-moto'> 🏦 YourBank</h1>
//         </div>
//         <div className='rounded-md h-full flex'> 
//         <div className="w-ful rounded-md shadow-lg mx-auto">
//     <div className="md:flex p-10">
//       {/* Left Side (Image) */}
//       <div className="md:w-1/2">
//         <img
//           className="w-full object-cover h-full md:w-full "
//           src={signin}
//           alt="Card"
//         />
//       </div>
//       {/* Right Side (Title and Description) */}
//       <form className='lg:pt-14 pt-5 ps-10' onSubmit={handlesubmit}>
//       <h2>Login</h2>
//       <p>We just need a little bit of data for login 🚀</p>
      
//       <div className="control">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" onKeyUp={CheckErrorMsg} />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" onKeyUp={CheckErrorMsg} />
//         </div>
//         <div className="control-error">{count === 2 && <p className='text-red-600 font-moto'> {error}</p>}</div>

//       </div>
//       <div className='pt-2'>
//       <p className="form-actions">
//         {/* <button className="button button-flat">Reset</button> */}
//         <button className="buttonx">Login</button>
       
//       </p>
//       <hr/>
//       <h6 className='text-center'>create new account. <span> <Link to="/Signup">sign up</Link></span></h6>
//       </div>
    
//     </form>
//     {datatushar===0&& <p></p>}
//         {datatushar===1&& <p>Loading....</p>}
//     </div>
//   </div>

//       </div>
//     </div>     
//     </div>
//   )
// }

// export default Signin


import React, { useState } from 'react';
import signin from '../Asset/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import Loader from '../Components/Loader'; 
import {
  PushSpinner, TraceSpinner, RainbowSpinner,
  RingSpinner, SwishSpinner, PongSpinner,
  MetroSpinner, JellyfishSpinner
}
  from "react-spinners-kit";

const Signin = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [datatushar, setDatatushar] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setDatatushar(1); // Set datatushar to 1 to display the loading message
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    axios.post('https://' + process.env.REACT_APP_SERVER_URL + '/login/', data)
      .then(res => {
        sessionStorage.setItem("token", res.data.access_token);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        setCount(2);
        setError("Invalid credentials");
      })
      .finally(() => {
        setDatatushar(0); // Reset datatushar after the request is complete
      });
  };

  const checkErrorMsg = () => {
    count ? setError('') : setError(error);
  };

  return (
    <div className='drop-shadow-2xl container mx-auto p-12 h-full'>
      <div className="flex-row">
        <h1 className='text-center text-[4rem] text-indigo-500 font-moto'> 🏦 YourBank</h1>
      </div>
      <div className='rounded-md h-full flex'>
        <div className="w-ful rounded-md shadow-lg mx-auto">
          <div className="md:flex p-10">
            <div className="md:w-1/2">
              <img
                className="w-full object-cover h-full md:w-full "
                src={signin}
                alt="Card"
              />
            </div>
            <form className='lg:pt-14 pt-5 ps-10' onSubmit={handleSubmit}>
              <h2>Login</h2>
              <p>We just need a little bit of data for login 🚀</p>
              <div className="control">
                <div className="control no-margin">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" onKeyUp={checkErrorMsg} />
                </div>
                <div className="control no-margin">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" name="password" onKeyUp={checkErrorMsg} />
                </div>
                <div className="control-error">{count === 2 && <p className='text-red-600 font-moto'> {error}</p>}</div>
              </div>
              <div className='pt-2 center'>
              <p className="form-actions">
                {datatushar === 0 &&<button className="button" type="submit">Login</button>}
                {datatushar === 1 && <div className='text-center bg-center'>
                    <PongSpinner size={60} color="Blue"
                         />
                        </div>
                       }
                </p>
                <hr />
                <h6 className='text-center'>create new account. <span> <Link to="/Signup">sign up</Link></span></h6>
              </div>
           
            </form>
      
          </div>
       
        </div>
       
      </div>
    
    </div>
  );
}

export default Signin;

