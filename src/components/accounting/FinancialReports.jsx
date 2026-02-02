import { useState } from 'react'

function FinancialReports() {
    const [userRole] = useState('admin') // 'admin', 'accountant', 'principal'
    const [reportType, setReportType] = useState('income')

    const incomeData = [
        { source: 'Student Fees', amount: 500000, percentage: 70 },
        { source: 'Donations', amount: 100000, percentage: 15 },
        { source: 'Events & Activities', amount: 50000, percentage: 8 },
        { source: 'Other Income', amount: 30000, percentage: 7 },
    ]

    const expenseData = [
        { category: 'Salaries', amount: 300000, percentage: 60 },
        { category: 'Infrastructure', amount: 100000, percentage: 20 },
        { category: 'Utilities', amount: 50000, percentage: 10 },
        { category: 'Maintenance', amount: 30000, percentage: 6 },
        { category: 'Events', amount: 20000, percentage: 4 },
    ]

    const monthlyData = [
        { month: 'January', income: 180000, expense: 150000, balance: 30000 },
        { month: 'February', income: 175000, expense: 152000, balance: 23000 },
        { month: 'March', income: 190000, expense: 148000, balance: 42000 },
        { month: 'April', income: 185000, expense: 155000, balance: 30000 },
        { month: 'May', income: 195000, expense: 150000, balance: 45000 },
        { month: 'June', income: 188000, expense: 149000, balance: 39000 },
    ]

    const totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0)
    const totalExpense = expenseData.reduce((sum, item) => sum + item.amount, 0)
    const balance = totalIncome - totalExpense

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">📈 Financial Reports</h2>
                <p className="text-sm text-slate-600">Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
            </div>

            {/* Report Type Selection */}
            <div className="mb-6 flex gap-4">
                {['income', 'expense', 'monthly', 'summary'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setReportType(type)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${reportType === type
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                    >
                        {type === 'income' && '📥 Income'}
                        {type === 'expense' && '📤 Expense'}
                        {type === 'monthly' && '📅 Monthly'}
                        {type === 'summary' && '📊 Summary'}
                    </button>
                ))}
            </div>

            {/* Summary Section */}
            {reportType === 'summary' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <div className="text-sm text-slate-600 mb-2">Total Income</div>
                            <div className="text-3xl font-bold text-green-600">₹{totalIncome}</div>
                            <div className="text-xs text-slate-500 mt-2">From {incomeData.length} sources</div>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <div className="text-sm text-slate-600 mb-2">Total Expense</div>
                            <div className="text-3xl font-bold text-red-600">₹{totalExpense}</div>
                            <div className="text-xs text-slate-500 mt-2">In {expenseData.length} categories</div>
                        </div>
                        <div className={`p-6 rounded-lg border ${balance >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-red-50 border-red-200'}`}>
                            <div className="text-sm text-slate-600 mb-2">Net Balance</div>
                            <div className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                                ₹{Math.abs(balance)}
                            </div>
                            <div className="text-xs text-slate-500 mt-2">{balance >= 0 ? 'Surplus' : 'Deficit'}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="font-semibold text-slate-800 mb-3">Income Ratio</h3>
                            <div className="space-y-2">
                                {incomeData.map((item) => (
                                    <div key={item.source}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{item.source}</span>
                                            <span className="font-semibold">{item.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="font-semibold text-slate-800 mb-3">Expense Ratio</h3>
                            <div className="space-y-2">
                                {expenseData.map((item) => (
                                    <div key={item.category}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{item.category}</span>
                                            <span className="font-semibold">{item.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-red-600 h-2 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Income Report */}
            {reportType === 'income' && (
                <div>
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b-2 border-slate-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Income Source</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Amount</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeData.map((item) => (
                                <tr key={item.source} className="border-b border-slate-200 hover:bg-slate-50">
                                    <td className="px-6 py-3 text-sm font-medium">{item.source}</td>
                                    <td className="px-6 py-3 text-sm font-semibold text-right">₹{item.amount}</td>
                                    <td className="px-6 py-3 text-sm text-right">{item.percentage}%</td>
                                </tr>
                            ))}
                            <tr className="bg-slate-100 font-semibold">
                                <td className="px-6 py-3 text-sm">Total Income</td>
                                <td className="px-6 py-3 text-sm text-right">₹{totalIncome}</td>
                                <td className="px-6 py-3 text-sm text-right">100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Expense Report */}
            {reportType === 'expense' && (
                <div>
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b-2 border-slate-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Expense Category</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Amount</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseData.map((item) => (
                                <tr key={item.category} className="border-b border-slate-200 hover:bg-slate-50">
                                    <td className="px-6 py-3 text-sm font-medium">{item.category}</td>
                                    <td className="px-6 py-3 text-sm font-semibold text-right">₹{item.amount}</td>
                                    <td className="px-6 py-3 text-sm text-right">{item.percentage}%</td>
                                </tr>
                            ))}
                            <tr className="bg-slate-100 font-semibold">
                                <td className="px-6 py-3 text-sm">Total Expense</td>
                                <td className="px-6 py-3 text-sm text-right">₹{totalExpense}</td>
                                <td className="px-6 py-3 text-sm text-right">100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Monthly Report */}
            {reportType === 'monthly' && (
                <div>
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b-2 border-slate-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Month</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Income</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Expense</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyData.map((item) => (
                                <tr key={item.month} className="border-b border-slate-200 hover:bg-slate-50">
                                    <td className="px-6 py-3 text-sm font-medium">{item.month}</td>
                                    <td className="px-6 py-3 text-sm text-right text-green-600 font-semibold">₹{item.income}</td>
                                    <td className="px-6 py-3 text-sm text-right text-red-600 font-semibold">₹{item.expense}</td>
                                    <td className="px-6 py-3 text-sm text-right font-semibold">₹{item.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default FinancialReports
