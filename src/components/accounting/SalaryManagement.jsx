import { useState } from 'react'

function SalaryManagement() {
    const [userRole] = useState('admin') // 'admin', 'accountant', 'staff'
    const [salaries, setSalaries] = useState([
        { id: 1, employeeId: 'E001', name: 'Rajesh Kumar', designation: 'Teacher', baseSalary: 40000, allowances: 8000, deductions: 2000, netSalary: 46000, month: 'January', status: 'Paid', paymentDate: '2024-01-05' },
        { id: 2, employeeId: 'E002', name: 'Priya Sharma', designation: 'Teacher', baseSalary: 35000, allowances: 7000, deductions: 1500, netSalary: 40500, month: 'January', status: 'Paid', paymentDate: '2024-01-05' },
        { id: 3, employeeId: 'E003', name: 'Amit Patel', designation: 'Teacher', baseSalary: 38000, allowances: 7500, deductions: 1800, netSalary: 43700, month: 'January', status: 'Pending', paymentDate: null },
        { id: 4, employeeId: 'E004', name: 'Neha Gupta', designation: 'Staff', baseSalary: 25000, allowances: 3000, deductions: 1000, netSalary: 27000, month: 'January', status: 'Paid', paymentDate: '2024-01-05' },
        { id: 5, employeeId: 'E005', name: 'Admin Staff', designation: 'Accountant', baseSalary: 30000, allowances: 5000, deductions: 1200, netSalary: 33800, month: 'January', status: 'Pending', paymentDate: null },
    ])

    const [selectedMonth, setSelectedMonth] = useState('January')
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        designation: 'Teacher',
        baseSalary: '',
        allowances: '',
        deductions: ''
    })

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const designations = ['Teacher', 'Staff', 'Accountant', 'Admin', 'Principal']

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'designation' ? value : parseFloat(value) || value
        }))
    }

    const handleAddSalary = () => {
        setShowForm(true)
        setFormData({ name: '', designation: 'Teacher', baseSalary: '', allowances: '', deductions: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { baseSalary, allowances, deductions } = formData
        const netSalary = baseSalary + allowances - deductions

        const newSalary = {
            id: Math.max(...salaries.map(s => s.id), 0) + 1,
            employeeId: `E${String(Math.random() * 1000).padStart(3, '0')}`,
            ...formData,
            baseSalary: parseFloat(baseSalary),
            allowances: parseFloat(allowances),
            deductions: parseFloat(deductions),
            netSalary,
            month: selectedMonth,
            status: 'Pending',
            paymentDate: null
        }

        setSalaries([...salaries, newSalary])
        setShowForm(false)
    }

    const handleProcessPayment = (id) => {
        setSalaries(salaries.map(s =>
            s.id === id ? { ...s, status: 'Paid', paymentDate: new Date().toISOString().split('T')[0] } : s
        ))
    }

    const monthSalaries = salaries.filter(s => s.month === selectedMonth)
    const totalSalaries = monthSalaries.reduce((sum, s) => sum + s.netSalary, 0)
    const paidCount = monthSalaries.filter(s => s.status === 'Paid').length
    const pendingCount = monthSalaries.filter(s => s.status === 'Pending').length

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">💼 Salary Management</h2>
                    <p className="text-sm text-slate-600 mt-1">Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
                </div>
                {(userRole === 'admin' || userRole === 'accountant') && (
                    <button
                        onClick={handleAddSalary}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        ➕ Add Salary
                    </button>
                )}
            </div>

            {/* Month Selection */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select Month</label>
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                >
                    {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm text-slate-600">Total Salaries</div>
                    <div className="text-2xl font-bold text-blue-600">₹{totalSalaries}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-slate-600">Paid</div>
                    <div className="text-2xl font-bold text-green-600">{paidCount}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="text-sm text-slate-600">Pending</div>
                    <div className="text-2xl font-bold text-red-600">{pendingCount}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-sm text-slate-600">Total Staff</div>
                    <div className="text-2xl font-bold text-purple-600">{monthSalaries.length}</div>
                </div>
            </div>

            {/* Form */}
            {showForm && userRole !== 'staff' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Employee Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <select name="designation" value={formData.designation} onChange={handleInputChange} className="px-3 py-2 border border-slate-300 rounded-lg">
                            {designations.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            name="baseSalary"
                            placeholder="Base Salary"
                            value={formData.baseSalary}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <input
                            type="number"
                            name="allowances"
                            placeholder="Allowances"
                            value={formData.allowances}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                        />
                        <input
                            type="number"
                            name="deductions"
                            placeholder="Deductions"
                            value={formData.deductions}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                        />
                        <div className="flex gap-2">
                            <button type="submit" className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg">Save</button>
                            <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-3 py-2 bg-slate-300 rounded-lg">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100 border-b-2 border-slate-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Employee Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Designation</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Base Salary</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Allowances</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Deductions</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Net Salary</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {monthSalaries.map((salary) => (
                            <tr key={salary.id} className="border-b border-slate-200 hover:bg-slate-50">
                                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{salary.name}</td>
                                <td className="px-6 py-3 text-sm text-slate-600">{salary.designation}</td>
                                <td className="px-6 py-3 text-sm">₹{salary.baseSalary}</td>
                                <td className="px-6 py-3 text-sm text-green-600">₹{salary.allowances}</td>
                                <td className="px-6 py-3 text-sm text-red-600">₹{salary.deductions}</td>
                                <td className="px-6 py-3 text-sm font-bold text-slate-800">₹{salary.netSalary}</td>
                                <td className="px-6 py-3 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${salary.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {salary.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {(userRole === 'admin' || userRole === 'accountant') && salary.status === 'Pending' && (
                                        <button
                                            onClick={() => handleProcessPayment(salary.id)}
                                            className="text-green-600 hover:text-green-800 font-semibold"
                                        >
                                            ✓ Pay
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalaryManagement
