import React from 'react'
import Balance from './balance'
import Widthdraw from './withdraw'
import Deposite from './deposite'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Yourbankmain = () => {

  const [isActivityDone, setisActivityDone] = useState(false);
  

  const WithDrawRequest = (fl)=>{
// //alert('withdraw from parent');
isActivityDone ? setisActivityDone(false) : setisActivityDone(true);
  }
  // const despoistRequest = (fl)=>{
  //   //alert('withdraw from parent');
  //   isActivityDone ? setisActivityDone(false) : setisActivityDone(true);
  //     }
    


  return (
    <>
    <Balance
    isActivityDone = {isActivityDone}
    />
    <div>
  <Deposite isdeposite={WithDrawRequest}
   />
  </div>
  <div className='p-15'>
   <Widthdraw
    isWithdraw={WithDrawRequest}
   />
   </div>
   <ToastContainer />
   </>
  )
}

export default Yourbankmain
