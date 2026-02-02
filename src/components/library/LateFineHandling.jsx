import React, { useEffect, useState } from 'react'

export default function LateFineHandling() {
    const [loading, setLoading] = useState(true)
    const [fines, setFines] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setFines([
                { id: 1, student: 'Bhavna Singh', bookTitle: 'Science Textbook', daysLate: 5, fineAmount: 50, status: 'Pending' },
                { id: 2, student: 'Disha Sharma', bookTitle: 'Mathematics Grade 10', daysLate: 3, fineAmount: 30, status: 'Paid' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Late Fine Handling</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading fines...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {fines.map(f => (
                        <li key={f.id}>{f.student} — {f.bookTitle} — ₹{f.fineAmount} — {f.status}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
