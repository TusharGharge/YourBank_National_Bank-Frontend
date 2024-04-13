// import React from 'react';
// import profile from '../Asset/profile.svg'; // Import your profile picture
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';


// const Profile = () => {
//   const navigate = useNavigate();
//   const [statementData, setStatementData] = useState([]);
//   const [statementData2, setStatementData2] = useState([]);
//   const [statementData3, setStatementData3] = useState(false);
//   const handleLogout = () => {
//     // Clear sessionStorage
//     sessionStorage.clear();
    
//     // Navigate to login page
//     navigate('/signin');
//   };
//   useEffect(() => {
  
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const token = sessionStorage.getItem('token');
//       // console.log("torkn",token);

//       // Set the Authorization header with the token
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }

//       await axios.get('https://'+process.env.REACT_APP_SERVER_URL+'/bank/checkaccount', config).then((res)=>{
//        // console.log(res.data);
      
//       if (res.data.messge==="Please create account"){
//         toast.error(res.data.messge);
//         setStatementData3(true);
//       }
//       setStatementData(res.data[0]);setStatementData2(res.data[1])}
//     )
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   console.log('log',statementData2);
//   return (
//     <>{
//       statementData3 &&<div><h1>Please Create bank aacount</h1>  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline center" onClick={handleLogout}>Log out</button></div>}
//       {statementData  &&
//     <div className="flex flex-col items-center h-screen pt-5 ">
//       {/* Profile Picture */}
//       <img src={profile} alt="Profile" className="rounded-full h-25 w-25 mb-2" />
//         {/* {alert(statementData)} */}
//       {/* Profile Details */}
//       <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-2/5 md:w-60 lg:h-96 lg:pe-10">
//         <div className='ps-14 center items-center'>
//         <p className="lg:text-4xl text-2xl font-semibold">Name:{statementData.name}   </p>
//         <p className="lg:text-2xl text-xl text-gray-600">Email_id: {statementData.email}</p>
//         <p className="lg:text-2xl text-xl text-gray-600">Account Number: {statementData2.account_number}</p>
//         <p className="lg:text-2xl text-xl text-gray-600">Pancard Number: {statementData2.pan_number}</p>
//         <p className="lg:text-2xl text-xl text-gray-600">Phone Number: {statementData.phone_number}</p>
//         <p className="lg:text-2xl text-xl text-gray-600">accountholder_id: {statementData2.accountholder_id}</p> 
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline center" onClick={handleLogout}>Log out</button>
//       </div>
    
//       </div>
      
//     </div>}
//     </>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from 'react';
import profile from '../Asset/profile.svg'; // Import your profile picture
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const [statementData, setStatementData] = useState([]);
  const [statementData2, setStatementData2] = useState([]);
  const [statementData3, setStatementData3] = useState(false);

  const handleLogout = () => {
    // Clear sessionStorage
    sessionStorage.clear();
    // Navigate to login page
    navigate('/signin');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(`https://${process.env.REACT_APP_SERVER_URL}/bank/checkaccount`, config);
      
      if (res.data.message === "Please create account") {
        toast.error(res.data.message);
        setStatementData3(true);
      } else {
        setStatementData(res.data[0]);
        setStatementData2(res.data[1]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {statementData3 &&
        <div>
          <h1>Please Create bank account</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline center" onClick={handleLogout}>Log out</button>
        </div>
      }
      {statementData &&
        <div className="flex flex-col items-center h-screen pt-5">
          {/* Profile Picture */}
          <img src={profile} alt="Profile" className="rounded-full h-25 w-25 mb-2" />
          {/* Profile Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-2/5 md:w-60 lg:h-96 lg:pe-10">
            <div className='ps-14 center items-center'>
              <p className="lg:text-4xl text-2xl font-semibold">Name: {statementData.name}</p>
              <p className="lg:text-2xl text-xl text-gray-600">Email_id: {statementData.email}</p>
              <p className="lg:text-2xl text-xl text-gray-600">Account Number: {statementData2.account_number}</p>
              <p className="lg:text-2xl text-xl text-gray-600">Pancard Number: {statementData2.pan_number}</p>
              <p className="lg:text-2xl text-xl text-gray-600">Phone Number: {statementData.phone_number}</p>
              <p className="lg:text-2xl text-xl text-gray-600">accountholder_id: {statementData2.accountholder_id}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline center" onClick={handleLogout}>Log out</button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Profile;
