import { useState } from 'react'
import { FeeManagement, SalaryManagement, ExpenseTracker, FinancialReports, BudgetPlanning } from '../components/accounting'

function Accounting() {
    const [activeTab, setActiveTab] = useState('fees')
    const [userRole] = useState('admin') // Can be 'admin', 'accountant', 'student', 'staff'

    const tabs = [
        { id: 'fees', name: 'Fee Management', icon: '💳', roles: ['admin', 'accountant', 'student'] },
        { id: 'salary', name: 'Salary Management', icon: '💼', roles: ['admin', 'accountant'] },
        { id: 'expenses', name: 'Expense Tracker', icon: '📤', roles: ['admin', 'accountant'] },
        { id: 'reports', name: 'Financial Reports', icon: '📈', roles: ['admin', 'accountant', 'principal'] },
        { id: 'budget', name: 'Budget Planning', icon: '💰', roles: ['admin', 'accountant'] },
    ]

    // Filter tabs based on user role
    const visibleTabs = tabs.filter(tab => tab.roles.includes(userRole))

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Accounting & Finance Management</h1>
                <p className="text-slate-600">Manage fees, salaries, expenses, and financial reports</p>
                <div className="mt-2">
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                        Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                    </span>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
                <div className="flex flex-wrap border-b border-slate-200 overflow-x-auto">
                    {visibleTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-semibold transition-all border-b-2 whitespace-nowrap ${activeTab === tab.id
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-slate-600 hover:text-slate-800'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'fees' && <FeeManagement />}
                {activeTab === 'salary' && <SalaryManagement />}
                {activeTab === 'expenses' && <ExpenseTracker />}
                {activeTab === 'reports' && <FinancialReports />}
                {activeTab === 'budget' && <BudgetPlanning />}
            </div>
        </div>
    )
}

export default Accounting
