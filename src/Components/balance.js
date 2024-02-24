import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Balance = (props) => {
    const [statementData, setStatementData] = useState([]);
   //console.log(props.isActivityDone);
    //console.log(statementData);
    useEffect(() => {
        //console.log("useeffect");   
        fetchData();
      }, [props.isActivityDone]);
    
    const fetchData = async () => {
        try {
          const token = sessionStorage.getItem('token');
          console.log("torkn",token);
  
          // Set the Authorization header with the token
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
  
          await axios.get('http://127.0.0.1:8000/bank/balance', config).then((res)=>{console.log(res.data);setStatementData(res.data)})
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  

    


  return (
    <div>
         <div className='flex justify-center lg:pl-10 lg:px-5 px-2 font-moto'>
                <p className='text-black text-center lg:text-5xl text-xl my-9 font-moto'>
Your current Balance💸 : <span className='font-bold text-green-500'>{statementData.balance}</span> </p>
            </div>
    </div>
  )
}

export default Balance
