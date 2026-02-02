import { useState } from 'react'

function ExpenseTracker() {
    const [userRole] = useState('admin') // 'admin', 'accountant'
    const [expenses, setExpenses] = useState([
        { id: 1, category: 'Utilities', description: 'Electricity Bill', amount: 15000, date: '2024-01-05', status: 'Paid', approvedBy: 'Principal' },
        { id: 2, category: 'Maintenance', description: 'Building Repair', amount: 25000, date: '2024-01-08', status: 'Paid', approvedBy: 'Principal' },
        { id: 3, category: 'Supplies', description: 'Office Supplies', amount: 8000, date: '2024-01-10', status: 'Pending', approvedBy: null },
        { id: 4, category: 'Transport', description: 'Bus Maintenance', amount: 5000, date: '2024-01-12', status: 'Approved', approvedBy: 'Finance' },
        { id: 5, category: 'Events', description: 'Sports Day Arrangement', amount: 20000, date: '2024-01-15', status: 'Pending', approvedBy: null },
    ])

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        category: 'Utilities',
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0]
    })

    const categories = ['Utilities', 'Maintenance', 'Supplies', 'Transport', 'Events', 'Other']
    // const statuses = ['Pending', 'Approved', 'Paid']

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'amount' ? parseFloat(value) : value
        }))
    }

    const handleAddExpense = () => {
        setShowForm(true)
        setFormData({ category: 'Utilities', description: '', amount: '', date: new Date().toISOString().split('T')[0] })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.description || !formData.amount) {
            alert('Please fill all fields')
            return
        }

        const newExpense = {
            id: Math.max(...expenses.map(e => e.id), 0) + 1,
            ...formData,
            amount: parseFloat(formData.amount),
            status: 'Pending',
            approvedBy: null
        }

        setExpenses([...expenses, newExpense])
        setShowForm(false)
    }

    const handleApprove = (id) => {
        setExpenses(expenses.map(e =>
            e.id === id ? { ...e, status: 'Approved', approvedBy: 'Finance' } : e
        ))
    }

    const handlePayment = (id) => {
        setExpenses(expenses.map(e =>
            e.id === id ? { ...e, status: 'Paid', approvedBy: 'Principal' } : e
        ))
    }

    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)
    const paidExpenses = expenses.filter(e => e.status === 'Paid').reduce((sum, e) => sum + e.amount, 0)
    const pendingExpenses = expenses.filter(e => e.status === 'Pending').reduce((sum, e) => sum + e.amount, 0)

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">📊 Expense Tracker</h2>
                    <p className="text-sm text-slate-600 mt-1">Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
                </div>
                {(userRole === 'admin' || userRole === 'accountant') && (
                    <button
                        onClick={handleAddExpense}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        ➕ Add Expense
                    </button>
                )}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm text-slate-600">Total Expenses</div>
                    <div className="text-2xl font-bold text-blue-600">₹{totalExpenses}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-slate-600">Paid</div>
                    <div className="text-2xl font-bold text-green-600">₹{paidExpenses}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="text-sm text-slate-600">Pending</div>
                    <div className="text-2xl font-bold text-red-600">₹{pendingExpenses}</div>
                </div>
            </div>

            {/* Category Breakdown */}
            <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-3">Expenses by Category</h3>
                <div className="grid grid-cols-3 gap-3">
                    {categories.map((category) => {
                        const categoryExpenses = expenses.filter(e => e.category === category).reduce((sum, e) => sum + e.amount, 0)
                        return categoryExpenses > 0 && (
                            <div key={category} className="text-sm text-slate-700">
                                <span className="font-semibold">{category}:</span> ₹{categoryExpenses}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Form */}
            {showForm && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
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
                            <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Approved By</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="border-b border-slate-200 hover:bg-slate-50">
                                <td className="px-6 py-3 text-sm text-slate-600">{expense.date}</td>
                                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{expense.category}</td>
                                <td className="px-6 py-3 text-sm text-slate-600">{expense.description}</td>
                                <td className="px-6 py-3 text-sm font-semibold">₹{expense.amount}</td>
                                <td className="px-6 py-3 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${expense.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                        expense.status === 'Approved' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {expense.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-sm text-slate-600">{expense.approvedBy || '-'}</td>
                                <td className="px-6 py-3 text-sm">
                                    {(userRole === 'admin' || userRole === 'accountant') && (
                                        <>
                                            {expense.status === 'Pending' && (
                                                <button onClick={() => handleApprove(expense.id)} className="text-blue-600 hover:text-blue-800 font-semibold mr-2">Approve</button>
                                            )}
                                            {expense.status === 'Approved' && (
                                                <button onClick={() => handlePayment(expense.id)} className="text-green-600 hover:text-green-800 font-semibold">Pay</button>
                                            )}
                                        </>
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

export default ExpenseTracker
