import React, { useEffect, useState } from 'react'

export default function StudentsLibraryHistory() {
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setHistory([
                { student: 'Aarav Patel', booksIssued: 5, currentBorrowing: 2, totalFine: 0 },
                { student: 'Bhavna Singh', booksIssued: 8, currentBorrowing: 1, totalFine: 50 },
                { student: 'Chirag Kumar', booksIssued: 3, currentBorrowing: 1, totalFine: 0 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Students Library History</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading history...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {history.map(h => (
                        <li key={h.student}>{h.student} — Issued: {h.booksIssued}, Borrowing: {h.currentBorrowing}, Fine: ₹{h.totalFine}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
