import React from 'react'
import profile from '../Asset/tushar.jfif';

const Aboutus = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-10 ">
      {/* Profile Picture */}
      <img src={profile} alt="Profile" className="rounded-full h-45 w-25 mb-2" />

      {/* Profile Details */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-2/5 md:w-60 lg:h-75 lg:pe-10">
    <p className="lg:text-2xl text-xl text-black-600">Hello everyone👋🏻,</p>
    <p className="lg:text-2xl text-xl text-black-600"> I am Tushar Gharge.Implemeted this yourBank web application with supporting backend and frontend. Backend is written using python programming with Fastapi framework. frontend implemented using react.</p>
    <a className='p-2 text-xl' href="https://www.linkedin.com/in/tushargharge/"  target="_blank">Linkdin</a>
      <a className='p-2 text-xl' href="https://github.com/TusharGharge"  target="_blank">Github</a>
      <a className='p-2 text-xl' href="https://www.instagram.com/_tushargharge_/" target="_blank">Instgram</a>
    
      </div>
    
    </div>
  )
}

export default Aboutus
