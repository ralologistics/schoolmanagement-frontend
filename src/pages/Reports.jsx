import { useState } from 'react'

function Reports() {
  const [reports] = useState([
    { id: 1, title: 'Student Attendance Report', type: 'Attendance', generatedDate: '2024-01-15', status: 'Completed' },
    { id: 2, title: 'Academic Performance Report', type: 'Academic', generatedDate: '2024-01-14', status: 'Completed' },
    { id: 3, title: 'Fee Collection Report', type: 'Finance', generatedDate: '2024-01-13', status: 'Completed' },
    { id: 4, title: 'Staff Performance Report', type: 'HR', generatedDate: '2024-01-12', status: 'Pending' },
    { id: 5, title: 'Monthly Assessment Report', type: 'Academic', generatedDate: '2024-01-11', status: 'Completed' },
  ])

  const getTypeColor = (type) => {
    switch (type) {
      case 'Attendance':
        return 'bg-blue-100 text-blue-800'
      case 'Academic':
        return 'bg-purple-100 text-purple-800'
      case 'Finance':
        return 'bg-green-100 text-green-800'
      case 'HR':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    return status === 'Completed'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Reports</h1>
        <p className="text-slate-600">Generate and view reports here.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Report Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Generated Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{report.title}</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(report.type)}`}>
                    {report.type}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm text-slate-600">{report.generatedDate}</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold mr-3">📥 Download</button>
                  <button className="text-slate-600 hover:text-slate-800 font-semibold">👁️ View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Reports
