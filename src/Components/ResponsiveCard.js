import React from 'react';
import data from '../Asset/data.svg';

const ResponsiveCard = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden lg:p-14 p-10">
      {/* Left side: Image */}
      <div className="md:w-1/3">
        <img
          src={data}
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
      {/* Right side: Text */}
      <div className="md:w-2/3 px-6 py-4">
        {/* <div className="text-indigo-700 font-bold text-xl mb-2">
          Card Title
        </div> */}
        <p className="text-gray-700 text-center lg:text-5xl lg:pt-14 text-2xl center font-moto font-bold">
        It Started With The Simple Dream Of Creating Bank 🚀
        </p>
        <p className="text-gray-700 text-center lg:text-2xl lg:pt-14 text-[0.9rem] center lg:p-14 font-moto">
        YourBank is digital bank for you who need to do payment and make earth green again.
        </p>
      </div>
    </div>
    <div className='justify-center pt-6 pl-5 px-10 lg:py-10 font-moto  bg-white'>
                <p className='text-gray-700 text-center lg:text-7xl text-2xl lg:my-9'>
Feature of FINANCIAL</p>
<p className="text-gray-700 text-center lx:text-xl ">we take pride in being a trusted partner for all your financial needs.</p>
            </div>
           
    </div>

  );
};

export default ResponsiveCard;