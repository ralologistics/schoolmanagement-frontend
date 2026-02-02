import { useState } from 'react'

function Fees() {
  const [fees] = useState([
    { id: 1, studentName: 'Aarav Patel', rollNo: 'S001', class: '10A', amount: 5000, paid: 5000, pending: 0, status: 'Paid' },
    { id: 2, studentName: 'Bhavna Singh', rollNo: 'S002', class: '10A', amount: 5000, paid: 2500, pending: 2500, status: 'Partial' },
    { id: 3, studentName: 'Chirag Kumar', rollNo: 'S003', class: '10B', amount: 5000, paid: 0, pending: 5000, status: 'Pending' },
    { id: 4, studentName: 'Disha Sharma', rollNo: 'S004', class: '10B', amount: 5000, paid: 5000, pending: 0, status: 'Paid' },
    { id: 5, studentName: 'Eshan Verma', rollNo: 'S005', class: '10C', amount: 5000, paid: 3500, pending: 1500, status: 'Partial' },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800'
      case 'Partial':
        return 'bg-yellow-100 text-yellow-800'
      case 'Pending':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Fees Management</h1>
        <p className="text-slate-600">Manage fee collection here.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Roll No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Student Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Total Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Paid</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Pending</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-600 font-medium">{fee.rollNo}</td>
                <td className="px-6 py-3 text-sm text-slate-800">{fee.studentName}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{fee.class}</td>
                <td className="px-6 py-3 text-sm font-semibold text-slate-800">₹{fee.amount}</td>
                <td className="px-6 py-3 text-sm text-green-600 font-semibold">₹{fee.paid}</td>
                <td className="px-6 py-3 text-sm text-red-600 font-semibold">₹{fee.pending}</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(fee.status)}`}>
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fees
