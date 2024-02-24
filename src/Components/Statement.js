const StatementTable = ({ data }) => {
    return (
      <div className="overflow-x-auto">
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
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">{item.sr_no}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.balance}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.created_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StatementTable;