import { useState } from 'react'

function Students() {
  const [students] = useState([
    { id: 1, name: 'Aarav Patel', rollNo: 'S001', class: '10A', section: 'A', email: 'aarav@school.com', status: 'Active' },
    { id: 2, name: 'Bhavna Singh', rollNo: 'S002', class: '10A', section: 'A', email: 'bhavna@school.com', status: 'Active' },
    { id: 3, name: 'Chirag Kumar', rollNo: 'S003', class: '10B', section: 'B', email: 'chirag@school.com', status: 'Active' },
    { id: 4, name: 'Disha Sharma', rollNo: 'S004', class: '10B', section: 'B', email: 'disha@school.com', status: 'Inactive' },
    { id: 5, name: 'Eshan Verma', rollNo: 'S005', class: '10C', section: 'C', email: 'eshan@school.com', status: 'Active' },
  ])

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Students</h1>
        <p className="text-slate-600">Manage student information here.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Roll No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Section</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-600 font-medium">{student.rollNo}</td>
                <td className="px-6 py-3 text-sm text-slate-800">{student.name}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{student.class}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{student.section}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{student.email}</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                    }`}>
                    {student.status}
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

export default Students
