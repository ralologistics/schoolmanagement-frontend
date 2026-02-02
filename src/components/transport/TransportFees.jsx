import React, { useEffect, useState } from 'react'

export default function TransportFees() {
    const [fees, setFees] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setFees([
                { id: 1, student: 'Aarav Patel', route: 'North Route', amount: 1500, status: 'Paid' },
                { id: 2, student: 'Bhavna Singh', route: 'East Route', amount: 1500, status: 'Pending' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Transport Fees</h3>
            {loading ? <div className="text-sm text-slate-500 mt-2">Loading transport fees...</div> : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {fees.map(f => <li key={f.id}>{f.student} — {f.route} — ₹{f.amount} — {f.status}</li>)}
                </ul>
            )}
        </div>
    )
}
