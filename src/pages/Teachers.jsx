import { useState } from 'react'

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 'T001', name: 'Rajesh Kumar', email: 'rajesh@school.com', phone: '9876543210', subject: 'Mathematics', qualification: 'M.Sc', experience: 8, status: 'Active' },
    { id: 'T002', name: 'Priya Sharma', email: 'priya@school.com', phone: '9876543211', subject: 'English', qualification: 'M.A', experience: 6, status: 'Active' },
    { id: 'T003', name: 'Amit Patel', email: 'amit@school.com', phone: '9876543212', subject: 'Science', qualification: 'B.Sc', experience: 5, status: 'Active' },
    { id: 'T004', name: 'Neha Gupta', email: 'neha@school.com', phone: '9876543213', subject: 'History', qualification: 'M.A', experience: 7, status: 'Active' },
    { id: 'T005', name: 'Vikram Singh', email: 'vikram@school.com', phone: '9876543214', subject: 'Computer Science', qualification: 'B.Tech', experience: 4, status: 'Inactive' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    qualification: '',
    experience: '',
    status: 'Active'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      qualification: '',
      experience: '',
      status: 'Active'
    })
    setShowForm(true)
  }

  const handleEdit = (teacher) => {
    setEditingId(teacher.id)
    setFormData({
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      subject: teacher.subject,
      qualification: teacher.qualification,
      experience: teacher.experience,
      status: teacher.status
    })
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id))
      console.log('Teacher deleted:', id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingId) {
      // Update existing teacher
      setTeachers(teachers.map(t =>
        t.id === editingId ? { ...t, ...formData } : t
      ))
      console.log('Teacher updated:', editingId, formData)
    } else {
      // Add new teacher
      const newTeacher = {
        id: `T${String(teachers.length + 1).padStart(3, '0')}`,
        ...formData
      }
      setTeachers([...teachers, newTeacher])
      console.log('Teacher added:', newTeacher)
    }

    setShowForm(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      qualification: '',
      experience: '',
      status: 'Active'
    })
  }

  const handleCancel = () => {
    setShowForm(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      qualification: '',
      experience: '',
      status: 'Active'
    })
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Teachers Management</h1>
          <p className="text-slate-600">Manage teacher information here.</p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          ➕ Add New Teacher
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-blue-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            {editingId ? 'Edit Teacher' : 'Add New Teacher'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Qualification *</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., M.Sc, M.A, B.Tech"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Experience (Years) *</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter years of experience"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>

            <div className="md:col-span-2 flex gap-3 justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                ✓ Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-400 transition-colors"
              >
                ✕ Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Teachers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Qualification</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Experience</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-600 font-medium">{teacher.id}</td>
                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{teacher.name}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{teacher.email}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{teacher.phone}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{teacher.subject}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{teacher.qualification}</td>
                <td className="px-6 py-3 text-sm text-slate-600">{teacher.experience} yrs</td>
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${teacher.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : teacher.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {teacher.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                      title="Edit"
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                      title="Delete"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {teachers.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No teachers found. Click "Add New Teacher" to create one.
        </div>
      )}
    </div>
  )
}

export default Teachers
