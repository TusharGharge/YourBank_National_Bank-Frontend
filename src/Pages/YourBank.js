import React from 'react'
import Createbankaccount from '../Components/createbankaccount'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './welcome';
import Bankmainpage from './Bankmainpage';
import Yourbankmain from '../Components/youtbankmain';
import { useNavigate } from 'react-router-dom';

const YourBank = () => {
  const navigate = useNavigate();
  const [statementData, setStatementData] = useState(false);
  const [reloadcom, setreloadcom] = useState(false);
  
  useEffect(() => {
    
    fetchData();
  }, [reloadcom]);
  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      // console.log("torkn",token);

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      await axios.get('https://'+process.env.REACT_APP_SERVER_URL+'/bank/checkaccount', config).then((res)=>{console.log(res);
      if (res.data.messge!=="Please create account"){
        setStatementData(res);

      }
     })
      
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate('/signin')
    }
  };



  const CallbackAccount = ()=> {
reloadcom ? setreloadcom(false):setreloadcom(true);

  }


  return (
    <>
    <div>{statementData ? <Yourbankmain/>:<Createbankaccount
    callback={CallbackAccount}
    />}</div> 
    {/* <Createbankaccount/> */}
    </>
  )
}

export default YourBank
