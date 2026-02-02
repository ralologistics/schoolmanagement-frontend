import { useState } from 'react'

function Attendance() {
  // Teacher role - can only manage their assigned classes
  const teacherData = {
    id: 'T001',
    name: 'Rajesh Kumar',
    role: 'Teacher',
    assignedClasses: [
      { classId: 'C001', className: '10A', section: 'A' },
      { classId: 'C002', className: '10B', section: 'B' },
    ]
  }

  const [selectedClass, setSelectedClass] = useState('C001')
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split('T')[0])
  const [studentAttendance, setStudentAttendance] = useState([
    { id: 'S001', name: 'Aarav Patel', rollNo: '001', classId: 'C001', status: 'Present', remarks: '' },
    { id: 'S002', name: 'Bhavna Singh', rollNo: '002', classId: 'C001', status: 'Present', remarks: '' },
    { id: 'S003', name: 'Chirag Kumar', rollNo: '003', classId: 'C001', status: 'Absent', remarks: 'Medical leave' },
    { id: 'S004', name: 'Disha Sharma', rollNo: '004', classId: 'C002', status: 'Present', remarks: '' },
    { id: 'S005', name: 'Eshan Verma', rollNo: '005', classId: 'C002', status: 'Present', remarks: '' },
    { id: 'S006', name: 'Fiona Mishra', rollNo: '006', classId: 'C002', status: 'Absent', remarks: '' },
  ])

  const filteredStudents = studentAttendance.filter(s => s.classId === selectedClass)

  const handleAttendanceChange = (studentId, status) => {
    setStudentAttendance(studentAttendance.map(s =>
      s.id === studentId ? { ...s, status } : s
    ))
  }

  const handleRemarksChange = (studentId, remarks) => {
    setStudentAttendance(studentAttendance.map(s =>
      s.id === studentId ? { ...s, remarks } : s
    ))
  }

  const handleSubmit = () => {
    const classData = teacherData.assignedClasses.find(c => c.classId === selectedClass)
    const attendanceSubmit = {
      date: attendanceDate,
      class: classData.className,
      teacher: teacherData.name,
      students: filteredStudents
    }
    console.log('Attendance submitted:', attendanceSubmit)
    alert(`Attendance marked for ${classData.className} on ${attendanceDate}`)
  }

  const selectedClassData = teacherData.assignedClasses.find(c => c.classId === selectedClass)
  const presentCount = filteredStudents.filter(s => s.status === 'Present').length
  const absentCount = filteredStudents.filter(s => s.status === 'Absent').length

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Attendance Management</h1>
        <p className="text-slate-600">Manage attendance records here.</p>
        <div className="mt-2 text-sm text-slate-500">
          Logged in as: <span className="font-semibold text-slate-700">{teacherData.name}</span> ({teacherData.role})
        </div>
      </div>

      {/* Selection Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Select Class */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {teacherData.assignedClasses.map((cls) => (
                <option key={cls.classId} value={cls.classId}>
                  {cls.className} - Section {cls.section}
                </option>
              ))}
            </select>
          </div>

          {/* Select Date */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Attendance Date</label>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stats */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{presentCount}</div>
                <div className="text-xs text-slate-600">Present</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{absentCount}</div>
                <div className="text-xs text-slate-600">Absent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-slate-100 border-b-2 border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">
            {selectedClassData?.className} - Section {selectedClassData?.section}
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Roll No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Student Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-600 font-medium">{student.rollNo}</td>
                <td className="px-6 py-3 text-sm text-slate-800">{student.name}</td>
                <td className="px-6 py-3 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAttendanceChange(student.id, 'Present')}
                      className={`px-4 py-1.5 rounded-lg font-semibold text-xs transition-colors ${student.status === 'Present'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      ✓ Present
                    </button>
                    <button
                      onClick={() => handleAttendanceChange(student.id, 'Absent')}
                      className={`px-4 py-1.5 rounded-lg font-semibold text-xs transition-colors ${student.status === 'Absent'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      ✕ Absent
                    </button>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm">
                  <input
                    type="text"
                    value={student.remarks}
                    onChange={(e) => handleRemarksChange(student.id, e.target.value)}
                    placeholder="Add remarks..."
                    className="w-full px-2 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex gap-3 justify-end">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          📝 Submit Attendance
        </button>
        <button
          className="px-6 py-2 bg-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-400 transition-colors"
        >
          ↺ Reset
        </button>
      </div>
    </div>
  )
}

export default Attendance

/* 
  COMMENTED OUT ORIGINAL CODE:
  
  function Attendance() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Attendance</h1>
        <p className="text-slate-600">Manage attendance records here.</p>
      </div>
    )
  }

  export default Attendance
*/
