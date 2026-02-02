import { useState } from 'react'

function FeeManagement() {
    const [userRole] = useState('admin') // Can be 'admin', 'accountant', 'student'
    const [filterType, setFilterType] = useState('all') // 'all', 'month', 'dateRange'
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)) // YYYY-MM format
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [statusFilter, setStatusFilter] = useState('all') // 'all', 'Paid', 'Partial', 'Pending'

    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // const currentYear = new Date().getFullYear()
    // const currentMonth = new Date().getMonth()

    const [fees, setFees] = useState([
        { id: 1, studentId: 'S001', studentName: 'Aarav Patel', class: '10A', totalAmount: 5000, paid: 5000, pending: 0, dueDate: '2024-01-31', status: 'Paid', paymentDate: '2024-01-15' },
        { id: 2, studentId: 'S002', studentName: 'Bhavna Singh', class: '10A', totalAmount: 5000, paid: 2500, pending: 2500, dueDate: '2024-01-31', status: 'Partial', paymentDate: '2024-01-10' },
        { id: 3, studentId: 'S003', studentName: 'Chirag Kumar', class: '10B', totalAmount: 5000, paid: 0, pending: 5000, dueDate: '2024-01-31', status: 'Pending', paymentDate: null },
        { id: 4, studentId: 'S004', studentName: 'Disha Sharma', class: '10B', totalAmount: 5000, paid: 5000, pending: 0, dueDate: '2024-01-31', status: 'Paid', paymentDate: '2024-01-20' },
        { id: 5, studentId: 'S005', studentName: 'Eshan Verma', class: '10C', totalAmount: 5000, paid: 3500, pending: 1500, dueDate: '2024-01-31', status: 'Partial', paymentDate: '2024-01-12' },
        { id: 6, studentId: 'S006', studentName: 'Fiona Khan', class: '10A', totalAmount: 5000, paid: 5000, pending: 0, dueDate: '2024-02-28', status: 'Paid', paymentDate: '2024-02-18' },
        { id: 7, studentId: 'S007', studentName: 'Gaurav Singh', class: '10B', totalAmount: 5000, paid: 0, pending: 5000, dueDate: '2024-02-28', status: 'Pending', paymentDate: null },
    ])

    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({
        studentName: '',
        class: '10A',
        totalAmount: '',
        dueDate: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'totalAmount' ? parseFloat(value) : value
        }))
    }

    const handleAddFee = () => {
        setEditingId(null)
        setFormData({ studentName: '', class: '10A', totalAmount: '', dueDate: '' })
        setShowForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.studentName || !formData.totalAmount) {
            alert('Please fill required fields')
            return
        }

        if (editingId) {
            setFees(fees.map(f => f.id === editingId ? { ...f, ...formData } : f))
        } else {
            const newFee = {
                id: Math.max(...fees.map(f => f.id), 0) + 1,
                studentId: `S${String(Math.random() * 1000).padStart(3, '0')}`,
                ...formData,
                totalAmount: parseFloat(formData.totalAmount),
                paid: 0,
                pending: formData.totalAmount,
                status: 'Pending',
                paymentDate: null,
                dueDate: formData.dueDate || new Date().toISOString().split('T')[0]
            }
            setFees([...fees, newFee])
        }
        setShowForm(false)
    }

    const handleRecordPayment = (id, amount) => {
        setFees(fees.map(f => {
            if (f.id === id) {
                const newPaid = Math.min(f.paid + amount, f.totalAmount)
                const newPending = f.totalAmount - newPaid
                const newStatus = newPending === 0 ? 'Paid' : 'Partial'
                return { ...f, paid: newPaid, pending: newPending, status: newStatus, paymentDate: new Date().toISOString().split('T')[0] }
            }
            return f
        }))
    }

    // Filtering logic
    const getFilteredFees = () => {
        let filtered = fees

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(f => f.status === statusFilter)
        }

        // Date/Month filter
        if (filterType === 'month') {
            const [year, month] = selectedMonth.split('-')
            filtered = filtered.filter(f => {
                const feeDate = f.paymentDate || f.dueDate
                return feeDate.startsWith(`${year}-${month}`)
            })
        } else if (filterType === 'dateRange') {
            if (startDate && endDate) {
                filtered = filtered.filter(f => {
                    const feeDate = f.paymentDate || f.dueDate
                    return feeDate >= startDate && feeDate <= endDate
                })
            }
        }

        return filtered
    }

    const filteredFees = getFilteredFees()
    const totalCollected = filteredFees.reduce((sum, f) => sum + f.paid, 0)
    const totalPending = filteredFees.reduce((sum, f) => sum + f.pending, 0)

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">💳 Fee Management</h2>
                    <p className="text-sm text-slate-600 mt-1">Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
                </div>
                {(userRole === 'admin' || userRole === 'accountant') && (
                    <button
                        onClick={handleAddFee}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        ➕ Add Fee Record
                    </button>
                )}
            </div>

            {/* Filters */}
            <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Filter Type */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Filter Type</label>
                        <select
                            value={filterType}
                            onChange={(e) => {
                                setFilterType(e.target.value)
                                setStartDate('')
                                setEndDate('')
                            }}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Records</option>
                            <option value="month">By Month</option>
                            <option value="dateRange">Date Range</option>
                        </select>
                    </div>

                    {/* Month Filter */}
                    {filterType === 'month' && (
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Select Month</label>
                            <input
                                type="month"
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    {/* Date Range Filter */}
                    {filterType === 'dateRange' && (
                        <>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Start Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </>
                    )}

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Partial">Partial</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-slate-600">Total Collected</div>
                    <div className="text-2xl font-bold text-green-600">₹{totalCollected}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="text-sm text-slate-600">Total Pending</div>
                    <div className="text-2xl font-bold text-red-600">₹{totalPending}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm text-slate-600">Total Records</div>
                    <div className="text-2xl font-bold text-blue-600">{filteredFees.length}</div>
                </div>
            </div>

            {/* Form */}
            {showForm && userRole !== 'student' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Student Name"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <select name="class" value={formData.class} onChange={handleInputChange} className="px-3 py-2 border border-slate-300 rounded-lg">
                            <option value="10A">10A</option>
                            <option value="10B">10B</option>
                            <option value="10C">10C</option>
                        </select>
                        <input
                            type="number"
                            name="totalAmount"
                            placeholder="Total Amount"
                            value={formData.totalAmount}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                        />
                        <div className="col-span-2 flex gap-2 justify-end">
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">Save</button>
                            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-300 rounded-lg">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100 border-b-2 border-slate-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Student Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Class</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Total Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Paid</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Pending</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Payment Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFees.length > 0 ? (
                            filteredFees.map((fee) => (
                                <tr key={fee.id} className="border-b border-slate-200 hover:bg-slate-50">
                                    <td className="px-6 py-3 text-sm text-slate-800 font-medium">{fee.studentName}</td>
                                    <td className="px-6 py-3 text-sm text-slate-600">{fee.class}</td>
                                    <td className="px-6 py-3 text-sm font-semibold">₹{fee.totalAmount}</td>
                                    <td className="px-6 py-3 text-sm text-green-600 font-semibold">₹{fee.paid}</td>
                                    <td className="px-6 py-3 text-sm text-red-600 font-semibold">₹{fee.pending}</td>
                                    <td className="px-6 py-3 text-sm text-slate-600">{fee.paymentDate || '-'}</td>
                                    <td className="px-6 py-3 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${fee.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                            fee.status === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {fee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-sm">
                                        {(userRole === 'admin' || userRole === 'accountant') && (
                                            <button
                                                onClick={() => handleRecordPayment(fee.id, 500)}
                                                className="text-blue-600 hover:text-blue-800 font-semibold"
                                                title="Record ₹500 payment"
                                            >
                                                💰 Pay
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="px-6 py-4 text-center text-slate-500">
                                    No records found for the selected filters
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FeeManagement
