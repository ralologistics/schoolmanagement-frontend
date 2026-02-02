import React, { useEffect, useState } from 'react'

export default function FeeFinanceReport() {
    const [loading, setLoading] = useState(true)
    const [fees, setFees] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setFees([
                { id: 1, collected: 15000, pending: 5000 },
                { id: 2, collected: 12000, pending: 8000 }
            ])
            setLoading(false)
        }, 500)
    }, [])

    const totalCollected = fees.reduce((s, f) => s + f.collected, 0)
    const totalPending = fees.reduce((s, f) => s + f.pending, 0)

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Fee & Finance Report</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading...</div>
            ) : (
                <div className="mt-3 text-sm text-slate-700">
                    <div>Total Collected: ₹{totalCollected}</div>
                    <div>Total Pending: ₹{totalPending}</div>
                </div>
            )}
        </div>
    )
}
