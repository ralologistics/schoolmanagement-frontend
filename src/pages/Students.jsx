import { useEffect, useState } from 'react'
import { getStudents, StudentProfile } from '../components/students'

function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let mounted = true
    getStudents().then((data) => {
      if (!mounted) return
      setStudents(data)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Students</h1>
        <p className="text-slate-600">Manage student information here. (data loaded from <code>components/students</code>)</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Roll No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Section</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Admission No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-slate-500">Loading students…</td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-slate-500">No students found</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3 text-sm text-slate-600 font-medium">{student.rollNo}</td>
                  <td className="px-6 py-3 text-sm text-slate-800">{student.name}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{student.classAssignment?.className}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{student.classAssignment?.section}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{student.admissionNumber}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status?.value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {student.status?.value}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <button
                      className="text-sm text-indigo-600 hover:underline"
                      onClick={() => setSelected(student)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selected ? (
        <div>
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-lg font-medium text-slate-800">Profile — {selected.name}</h3>
            <button className="text-sm text-slate-500" onClick={() => setSelected(null)}>Close</button>
          </div>
          <StudentProfile student={selected} />
        </div>
      ) : null}
    </div>
  )
}

export default Students
