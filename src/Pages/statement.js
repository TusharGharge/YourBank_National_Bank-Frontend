import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatementTable = () => {
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

        const response = await axios.get('https://'+process.env.REACT_APP_SERVER_URL+'/bank/Statement', config)
        setStatementData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto lg:px-10">
    <table className="w-full whitespace-nowrap">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {statementData.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.balance}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">{new Date(item.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default StatementTable;