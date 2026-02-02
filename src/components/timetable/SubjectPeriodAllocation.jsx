import { useState } from 'react'

function SubjectPeriodAllocation() {
    const [allocations, setAllocations] = useState([
        { id: 1, subject: 'Mathematics', class: '10A', periods: 5, allocatedTo: 'Rajesh Kumar', status: 'Active' },
        { id: 2, subject: 'English', class: '10A', periods: 4, allocatedTo: 'Priya Sharma', status: 'Active' },
        { id: 3, subject: 'Science', class: '10B', periods: 6, allocatedTo: 'Amit Patel', status: 'Active' },
        { id: 4, subject: 'History', class: '10B', periods: 3, allocatedTo: 'Neha Gupta', status: 'Active' },
        { id: 5, subject: 'Computer Science', class: '10C', periods: 4, allocatedTo: 'Vikram Singh', status: 'Inactive' },
    ])

    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({
        subject: '',
        class: '10A',
        periods: 1,
        allocatedTo: '',
        status: 'Active'
    })

    const subjects = ['Mathematics', 'English', 'Science', 'History', 'Computer Science', 'Physical Education']
    const classes = ['10A', '10B', '10C']
    const teachers = ['Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Neha Gupta', 'Vikram Singh']

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'periods' ? parseInt(value) : value
        }))
    }

    const handleAddNew = () => {
        setEditingId(null)
        setFormData({
            subject: '',
            class: '10A',
            periods: 1,
            allocatedTo: '',
            status: 'Active'
        })
        setShowForm(true)
    }

    const handleEdit = (allocation) => {
        setEditingId(allocation.id)
        setFormData({
            subject: allocation.subject,
            class: allocation.class,
            periods: allocation.periods,
            allocatedTo: allocation.allocatedTo,
            status: allocation.status
        })
        setShowForm(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this allocation?')) {
            setAllocations(allocations.filter(a => a.id !== id))
            console.log('Allocation deleted:', id)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.subject || !formData.allocatedTo) {
            alert('Please fill all required fields')
            return
        }

        if (editingId) {
            setAllocations(allocations.map(a =>
                a.id === editingId ? { ...a, ...formData } : a
            ))
            console.log('Allocation updated:', editingId, formData)
        } else {
            const newAllocation = {
                id: Math.max(...allocations.map(a => a.id), 0) + 1,
                ...formData
            }
            setAllocations([...allocations, newAllocation])
            console.log('Allocation added:', newAllocation)
        }

        setShowForm(false)
        setFormData({
            subject: '',
            class: '10A',
            periods: 1,
            allocatedTo: '',
            status: 'Active'
        })
    }

    const handleCancel = () => {
        setShowForm(false)
    }

    const totalPeriodsPerWeek = allocations.reduce((sum, a) => sum + a.periods, 0)

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">📚 Subject & Period Allocation</h2>
                    <div className="text-sm text-slate-600">
                        Total Weekly Periods: <span className="font-semibold text-slate-800">{totalPeriodsPerWeek}</span>
                    </div>
                </div>
                <button
                    onClick={handleAddNew}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ➕ Add Allocation
                </button>
            </div>

            {showForm && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                        {editingId ? 'Edit Allocation' : 'Add New Allocation'}
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Subject *</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Subject</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Class *</label>
                            <select
                                name="class"
                                value={formData.class}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {classes.map((cls) => (
                                    <option key={cls} value={cls}>{cls}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Periods per Week *</label>
                            <input
                                type="number"
                                name="periods"
                                value={formData.periods}
                                onChange={handleInputChange}
                                min="1"
                                max="6"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Allocated To *</label>
                            <select
                                name="allocatedTo"
                                value={formData.allocatedTo}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Teacher</option>
                                {teachers.map((teacher) => (
                                    <option key={teacher} value={teacher}>{teacher}</option>
                                ))}
                            </select>
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

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100 border-b-2 border-slate-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Subject</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Class</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Periods/Week</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Allocated To</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allocations.map((allocation) => (
                            <tr key={allocation.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{allocation.subject}</td>
                                <td className="px-6 py-3 text-sm text-slate-600">{allocation.class}</td>
                                <td className="px-6 py-3 text-sm text-slate-600 font-semibold">{allocation.periods}</td>
                                <td className="px-6 py-3 text-sm text-slate-600">{allocation.allocatedTo}</td>
                                <td className="px-6 py-3 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${allocation.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}>
                                        {allocation.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(allocation)}
                                            className="text-blue-600 hover:text-blue-800 font-semibold"
                                        >
                                            ✎ Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(allocation.id)}
                                            className="text-red-600 hover:text-red-800 font-semibold"
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
        </div>
    )
}

export default SubjectPeriodAllocation
