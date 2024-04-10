import React, { useRef,useState,useEffect} from 'react'
import transfer from '../Asset/transfer.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Transfer = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [error,seterror] =useState(null);
  const [showModal, setShowModal] = useState(false);
 
  function onhandlesubmit(event){
    event.preventDefault();
    const fd=new FormData(event.target);
    const data=Object.fromEntries(fd.entries());
    console.log(data);
    if (data.amount ==='' || data.account_number===''){
      setCount(1);
      seterror("Please Enter valid input");
        return "Please Enter valid input";
      
    }
    const token = sessionStorage.getItem('token');
    console.log("torkn",token);

    try {
      const response =axios.put(
        'https://'+process.env.REACT_APP_SERVER_URL+'/bank/transfer', // Replace with your API endpoint
        data, // Data to be sent in the request body
        {
          headers: {
            Authorization: `Bearer ${token}` // Include JWT token in the Authorization header
          }
        }
      ).then(res=>{console.log('PUT request successful:', res.data);

      if (res.data.message === 'Receiver account not found' )
      {
      toast.error(res.data.message);
      } 
      else if (res.data.message === "Insufficient fund"){
        toast.error(res.data.message);
      }
      else {
         toast.success(res.data.message);
       
      }}
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
  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);
  const CheckErrorMsg =()=>{

    count ? seterror('') :seterror(error);
  }
  return (
    <div>
       <div className='flex justify-center lg:pl-10 lg:px-5 px-2 font-moto'>
                <p className='text-black text-center lg:text-5xl text-xl my-9 font-moto'>
Transfer Money To Your Friends and Family with <span className='text-bold text-red-500'>YourBank Transfer</span> 💸 </p>
            </div>
            {/*  */}
            <form onSubmit={onhandlesubmit}>
           <div className="flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-3/5 md:w-96 lg:h-96 lg:pt-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left side with transfer money image */}
          <div className="w-50 mx-auto h-full border-1">
            <img src={transfer} alt="Transfer Money" className="w-96 mx-auto h-50 " />
          </div>
          {/* Right side with transfer form */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-xl font-bold mb-4">Transfer Money</h2>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
              <input type="text" id="amount" name="amount" placeholder="Enter Amount" className="shadow appearance-none border rounded w-full lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyUp={CheckErrorMsg} />
            </div>
            <div className="mb-4">
              <label htmlFor="account_number" className="block text-gray-700 text-sm font-bold mb-2">Account Number</label>
              <input type="text" id="account_number" name="account_number" placeholder="Enter Account Number" className="shadow appearance-none border rounded w-full lg:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  onKeyUp={CheckErrorMsg} />
            </div>
            <div className="text-red-500 text-moto p-1">{count===1 && <p className='text-red-500 font-moto'>{error}</p>}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Transfer</button>
          </div>
        </div>
      </div>
    </div>
    </form>
    <ToastContainer />
    </div>
  )
}

export default Transfer
