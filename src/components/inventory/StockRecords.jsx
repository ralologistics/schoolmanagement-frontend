import React, { useEffect, useState } from 'react'

export default function StockRecords() {
    const [loading, setLoading] = useState(true)
    const [records, setRecords] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setRecords([
                { id: 1, type: 'Issue', item: 'A4 Notebooks', qty: 10, date: '2024-01-20' },
                { id: 2, type: 'Receive', item: 'Pens (Box)', qty: 50, date: '2024-01-18' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Stock Records</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading stock records...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {records.map(r => (
                        <li key={r.id}>{r.date} — {r.type} — {r.item} — {r.qty}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
