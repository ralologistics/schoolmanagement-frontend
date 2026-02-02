import { useState } from 'react'

function BudgetPlanning() {
    const [userRole] = useState('admin') // 'admin', 'accountant'
    const [budgets, setBudgets] = useState([
        { id: 1, category: 'Salaries', allocatedBudget: 500000, spent: 300000, remaining: 200000, percentage: 60 },
        { id: 2, category: 'Infrastructure', allocatedBudget: 200000, spent: 100000, remaining: 100000, percentage: 50 },
        { id: 3, category: 'Utilities', allocatedBudget: 100000, spent: 50000, remaining: 50000, percentage: 50 },
        { id: 4, category: 'Events', allocatedBudget: 80000, spent: 65000, remaining: 15000, percentage: 81 },
        { id: 5, category: 'Supplies', allocatedBudget: 50000, spent: 45000, remaining: 5000, percentage: 90 },
    ])

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        category: '',
        allocatedBudget: ''
    })

    const categories = ['Salaries', 'Infrastructure', 'Utilities', 'Events', 'Supplies', 'Transport', 'Technology']

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'allocatedBudget' ? parseFloat(value) : value
        }))
    }

    const handleAddBudget = () => {
        setShowForm(true)
        setFormData({ category: '', allocatedBudget: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.category || !formData.allocatedBudget) {
            alert('Please fill all fields')
            return
        }

        const newBudget = {
            id: Math.max(...budgets.map(b => b.id), 0) + 1,
            ...formData,
            allocatedBudget: parseFloat(formData.allocatedBudget),
            spent: 0,
            remaining: parseFloat(formData.allocatedBudget),
            percentage: 0
        }

        setBudgets([...budgets, newBudget])
        setShowForm(false)
    }

    const totalBudget = budgets.reduce((sum, b) => sum + b.allocatedBudget, 0)
    const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)
    const totalRemaining = budgets.reduce((sum, b) => sum + b.remaining, 0)
    const overallPercentage = Math.round((totalSpent / totalBudget) * 100)

    const getStatusColor = (percentage) => {
        if (percentage >= 90) return 'bg-red-100 text-red-800'
        if (percentage >= 70) return 'bg-yellow-100 text-yellow-800'
        return 'bg-green-100 text-green-800'
    }

    const getProgressBarColor = (percentage) => {
        if (percentage >= 90) return 'bg-red-600'
        if (percentage >= 70) return 'bg-yellow-600'
        return 'bg-green-600'
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">💰 Budget Planning</h2>
                    <p className="text-sm text-slate-600 mt-1">Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
                </div>
                {(userRole === 'admin' || userRole === 'accountant') && (
                    <button
                        onClick={handleAddBudget}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        ➕ Add Budget
                    </button>
                )}
            </div>

            {/* Overall Summary */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm text-slate-600">Total Budget</div>
                    <div className="text-2xl font-bold text-blue-600">₹{totalBudget}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-slate-600">Remaining</div>
                    <div className="text-2xl font-bold text-green-600">₹{totalRemaining}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="text-sm text-slate-600">Spent</div>
                    <div className="text-2xl font-bold text-red-600">₹{totalSpent}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-sm text-slate-600">Usage</div>
                    <div className="text-2xl font-bold text-purple-600">{overallPercentage}%</div>
                </div>
            </div>

            {/* Overall Progress */}
            <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">Overall Budget Usage</h3>
                <div className="w-full bg-gray-300 rounded-full h-3">
                    <div
                        className={`${getProgressBarColor(overallPercentage)} h-3 rounded-full transition-all`}
                        style={{ width: `${overallPercentage}%` }}
                    ></div>
                </div>
                <p className="text-xs text-slate-600 mt-2">₹{totalSpent} spent of ₹{totalBudget}</p>
            </div>

            {/* Form */}
            {showForm && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            name="allocatedBudget"
                            placeholder="Allocated Budget"
                            value={formData.allocatedBudget}
                            onChange={handleInputChange}
                            className="px-3 py-2 border border-slate-300 rounded-lg"
                            required
                        />
                        <div className="flex gap-2">
                            <button type="submit" className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg">Save</button>
                            <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-3 py-2 bg-slate-300 rounded-lg">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Budget Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100 border-b-2 border-slate-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                            <th className="px-6 py-3 text-right text-sm font-semibold">Allocated</th>
                            <th className="px-6 py-3 text-right text-sm font-semibold">Spent</th>
                            <th className="px-6 py-3 text-right text-sm font-semibold">Remaining</th>
                            <th className="px-6 py-3 text-center text-sm font-semibold">Progress</th>
                            <th className="px-6 py-3 text-center text-sm font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budgets.map((budget) => (
                            <tr key={budget.id} className="border-b border-slate-200 hover:bg-slate-50">
                                <td className="px-6 py-3 text-sm font-medium">{budget.category}</td>
                                <td className="px-6 py-3 text-sm text-right font-semibold">₹{budget.allocatedBudget}</td>
                                <td className="px-6 py-3 text-sm text-right text-red-600 font-semibold">₹{budget.spent}</td>
                                <td className="px-6 py-3 text-sm text-right text-green-600 font-semibold">₹{budget.remaining}</td>
                                <td className="px-6 py-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${getProgressBarColor(budget.percentage)} h-2 rounded-full`}
                                                style={{ width: `${budget.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs font-semibold">{budget.percentage}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(budget.percentage)}`}>
                                        {budget.percentage >= 90 ? '⚠️ Critical' : budget.percentage >= 70 ? '⚡ Warning' : '✓ Good'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-slate-100 font-semibold">
                            <td className="px-6 py-3 text-sm">Total</td>
                            <td className="px-6 py-3 text-sm text-right">₹{totalBudget}</td>
                            <td className="px-6 py-3 text-sm text-right">₹{totalSpent}</td>
                            <td className="px-6 py-3 text-sm text-right">₹{totalRemaining}</td>
                            <td colSpan="2" className="px-6 py-3 text-center">{overallPercentage}% Used</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BudgetPlanning
