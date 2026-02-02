import React, { useEffect, useState } from 'react'
import { BookCatalog, IssueReturnTracking, StudentsLibraryHistory, LateFineHandling } from '../components/library'

export default function Library() {
    const [summary, setSummary] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // simulate aggregated library data fetch
        // setLoading(true)
        setTimeout(() => {
            setSummary({ totalBooks: 45, activeIssues: 12, totalFinesPending: 80 })
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Library Management</h1>
                <p className="text-slate-600">Manage book catalog, issue/return, student history and late fines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Total Books</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalBooks}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Active Issues</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.activeIssues}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Fines Pending</div>
                    <div className="text-2xl font-bold text-slate-800">₹{loading ? '...' : summary.totalFinesPending}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BookCatalog />
                <IssueReturnTracking />
                <StudentsLibraryHistory />
                <LateFineHandling />
            </div>
        </div>
    )
}
