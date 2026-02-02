import React, { useEffect, useState } from 'react'

export default function IssueReturnTracking() {
    const [loading, setLoading] = useState(true)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setTransactions([
                { id: 1, student: 'Aarav Patel', book: 'Mathematics Grade 10', type: 'Issue', date: '2024-01-20' },
                { id: 2, student: 'Bhavna Singh', book: 'Science Textbook', type: 'Return', date: '2024-01-19' },
                { id: 3, student: 'Chirag Kumar', book: 'English Literature', type: 'Issue', date: '2024-01-18' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Issue & Return Tracking</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading transactions...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {transactions.map(t => (
                        <li key={t.id}>{t.date} — {t.student} — {t.type} — {t.book}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
