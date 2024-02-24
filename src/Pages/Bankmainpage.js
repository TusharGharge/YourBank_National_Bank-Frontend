import React from 'react'
import Deposite from '../Components/deposite'
import Widthdraw from '../Components/withdraw'

const Bankmainpage = () => {
  return (
   <>
   <div>
  <Deposite/>
  </div>
  <div className='p-15'>
   <Widthdraw/>
   </div>
   </>
  )
}

export default Bankmainpage
