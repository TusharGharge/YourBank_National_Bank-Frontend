import ResponsiveCard from "../Components/ResponsiveCard";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from "react";


const MainPage = () => {
  const navigate = useNavigate();
  const [statementData, setStatementData] = useState([]);

  useEffect(() => {
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

        const response = await axios.get('http://127.0.0.1:8000/bank/Statement', config)
        setStatementData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/signin')
      }
    };

    fetchData();
  }, []);
  return (
    <div>
          {/* <div className='flex justify-center pt-18 pl-10 px-20 py-20 font-moto bg-indigo-300'>
                <p className='text-[#ffffff] text-center text-5xl my-9'>
It Started With The Simple Dream Of Creating Bank 🚀</p>
            </div> */}
            <ResponsiveCard/>
    </div>
  )
}

export default MainPage;
